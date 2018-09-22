import React from "react"
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  Button as RnButton,
  TextInput,
  KeyboardAvoidingView,
  Image
} from "react-native"
import { Constants, KeepAwake, Audio, Permissions, FileSystem } from "expo"
import {
  DefaultTheme,
  FABGroup,
  Provider as PaperProvider,
  Title,
  Caption,
  Paragraph,
  Card,
  CardCover,
  CardActions,
  CardContent,
  Button,
  withTheme,
  ClipPath,
  DrawerSection,
  DrawerItem,
  Toolbar,
  ToolbarBackAction,
  ToolbarContent,
  TextInput as RNPTextInput,
  Icon,
  ToolbarAction
} from "react-native-paper"

import MaterialIcons from "react-native-vector-icons/MaterialIcons"

import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Use,
  Defs,
  Stop
} from "react-native-svg"

const pathnameCategoryMatcher = /category\/([a-z]*)/
const getCurrentCategory = location => {
  const match = pathnameCategoryMatcher.exec(location.pathname)
  return match ? match[1] : null
}
const pathnameResponseTypeMatcher = /response\/([a-z]*)/
const getCurrentResponseType = location => {
  const match = pathnameResponseTypeMatcher.exec(location.pathname)
  return match ? match[1] : null
}
const padWithZero = number => {
  const string = number.toString()
  if (number < 10) {
    return "0" + string
  }
  return string
}
class RecordingResponse extends React.Component {
  constructor(props) {
    super(props)
    this.recording = null
    this.sound = null
    this.isSeeking = false
    this.shouldPlayAtEndOfSeek = false
    this.state = {
      haveRecordingPermissions: false,
      isLoading: false,
      isPlaybackAllowed: false,
      muted: false,
      soundPosition: null,
      soundDuration: null,
      recordingDuration: null,
      shouldPlay: false,
      isPlaying: false,
      isRecording: false,
      fontLoaded: true,
      shouldCorrectPitch: true,
      volume: 1.0,
      rate: 1.0
    }
    this.recordingSettings = JSON.parse(
      JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY)
    )
    // // UNCOMMENT THIS TO TEST maxFileSize:
    // this.recordingSettings.android['maxFileSize'] = 12000;
  }

  _askForPermissions = async () => {
    const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING)
    this.setState({
      haveRecordingPermissions: response.status === "granted"
    })
  };

  _onRecordPressed = () => {
    if (this.state.isRecording) {
      this._stopRecordingAndEnablePlayback()
    } else {
      this._stopPlaybackAndBeginRecording()
    }
  };

  _getMMSSFromMillis(millis) {
    const totalSeconds = millis / 1000
    const seconds = Math.floor(totalSeconds % 60)
    const minutes = Math.floor(totalSeconds / 60)
    return padWithZero(minutes) + ":" + padWithZero(seconds)
  }

  _updateScreenForSoundStatus = status => {
    if (status.isLoaded) {
      this.setState({
        soundDuration: status.durationMillis,
        soundPosition: status.positionMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        rate: status.rate,
        muted: status.isMuted,
        volume: status.volume,
        shouldCorrectPitch: status.shouldCorrectPitch,
        isPlaybackAllowed: true
      })
    } else {
      this.setState({
        soundDuration: null,
        soundPosition: null,
        isPlaybackAllowed: false
      })
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`)
      }
    }
  };

  _updateScreenForRecordingStatus = status => {
    if (status.canRecord) {
      this.setState({
        isRecording: status.isRecording,
        recordingDuration: status.durationMillis
      })
    } else if (status.isDoneRecording) {
      this.setState({
        isRecording: false,
        recordingDuration: status.durationMillis
      })
      if (!this.state.isLoading) {
        this._stopRecordingAndEnablePlayback()
      }
    }
  };

  _getRecordingTimestamp() {
    if (this.state.recordingDuration != null) {
      return `${this._getMMSSFromMillis(this.state.recordingDuration)}`
    }
    return `${this._getMMSSFromMillis(0)}`
  }

  async _stopPlaybackAndBeginRecording() {
    this.setState({
      isLoading: true
    })
    if (this.sound !== null) {
      await this.sound.unloadAsync()
      this.sound.setOnPlaybackStatusUpdate(null)
      this.sound = null
    }
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
    })
    if (this.recording !== null) {
      this.recording.setOnRecordingStatusUpdate(null)
      this.recording = null
    }

    const recording = new Audio.Recording()
    await recording.prepareToRecordAsync(this.recordingSettings)
    recording.setOnRecordingStatusUpdate(this._updateScreenForRecordingStatus)

    this.recording = recording
    await this.recording.startAsync() // Will call this._updateScreenForRecordingStatus to update the screen.
    this.setState({
      isLoading: false
    })
  }

  async _stopRecordingAndEnablePlayback() {
    this.setState({
      isLoading: true
    })
    try {
      await this.recording.stopAndUnloadAsync()
    } catch (error) {
      // Do nothing -- we are already unloaded.
    }
    const info = await FileSystem.getInfoAsync(this.recording.getURI())
    console.log(`FILE INFO: ${JSON.stringify(info)}`)
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      playsInSilentLockedModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
    })
    const { sound, status } = await this.recording.createNewLoadedSound(
      {
        isLooping: true,
        isMuted: this.state.muted,
        volume: this.state.volume,
        rate: this.state.rate,
        shouldCorrectPitch: this.state.shouldCorrectPitch
      },
      this._updateScreenForSoundStatus
    )
    this.sound = sound
    this.setState({
      isLoading: false
    })
  }

  render() {
    return (
      <View style={[{}]}>
        <TouchableHighlight
          onPress={this._onRecordPressed}
          disabled={this.state.isLoading}
        >
          <MaterialIcons
            name="mic"
            color="rgba(255,255,255, 0.8)"
            style={[{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }]}
          />
        </TouchableHighlight>
        <View style={[{}]}>
          <Text style={[{}]}>{this.state.isRecording ? "LIVE" : "RECORD"}</Text>
          <View style={[{}]}>
            <Text
              style={[this.state.isRecording ? { color: "#FF0000" } : null]}
            >
              {this._getRecordingTimestamp()}
            </Text>
          </View>
          <View />
        </View>
        <View />
      </View>
    )
  }
}
