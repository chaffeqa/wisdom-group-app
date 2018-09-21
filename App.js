import React from "react";
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
} from "react-native";
import { Constants, KeepAwake, Audio, Permissions } from "expo";
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
} from "react-native-paper";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
} from "react-native-svg";

import BackgroundPattern from "./src/client/components/BackgroundPattern";
import Selector from "./src/client/components/Selector";
import InnerCircle from "./src/client/components/InnerCircle";
import Drawer from "./src/client/components/Drawer";
import PrayerQuad from "./src/client/components/PrayerQuad";
import ObservationQuad from "./src/client/components/ObservationQuad";
import ScriptureQuad from "./src/client/components/ScriptureQuad";
import ApplicationQuad from "./src/client/components/ApplicationQuad";
// import Recording from "./src/client/components/Recording";
import { CategoriesArray, Categories } from "./src/client/utils/categories";

import {
  NativeRouter,
  Route,
  Link,
  withRouter,
  Switch
} from "react-router-native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "white"
    // accent: 'yellow',
  }
};

const QuadClickFlow = 1;
const padWithZero = number => {
  const string = number.toString();
  if (number < 10) {
    return "0" + string;
  }
  return string;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff"
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  container: {
    flex: 1,
    width: "100%"
  },
  content: {
    padding: 4,
    paddingTop: 60
  },
  homeContainer: {
    flex: 1
  },
  layer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    ...StyleSheet.absoluteFillObject
  },
  homeAddButton: {
    position: "absolute",
    zIndex: 1,
    marginTop: 10,
    height: 40,
    width: 250,
    marginLeft: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  h2: {
    width: "100%",
    paddingBottom: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,0.6)"
  },
  h2Text: {
    fontSize: 17,
    fontWeight: "bold"
  },
  bgClear: {
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 3,
    marginTop: 8,
    padding: 10
  }
});

class CircleChooser extends React.Component {
  render() {
    return (
      <Svg height={100 * 3} width={100 * 3}>
        <G>
          <Path
            d="M150,150L150,15A135,135,0,0,1,285,150L150,150A0,0,0,0,0,150,150"
            stroke="#ffffff"
            strokeWidth="9"
            fill="rgba(124, 73, 227, 0.4)"
          />
        </G>
        <G>
          <Path
            d="M150,150L15,150.00000000000003A135,135,0,0,1,150,15L150,150A0,0,0,0,0,150,150"
            stroke="#ffffff"
            strokeWidth="9"
            fill="rgba(124, 73, 227, 0.4)"
          />
        </G>
        <G>
          <Path
            d="M150,150L150,285A135,135,0,0,1,15,150.00000000000003L150,150A0,0,0,0,0,150,150"
            stroke="#ffffff"
            strokeWidth="9"
            fill="rgba(124, 73, 227, 0.4)"
          />
        </G>
        <G>
          <Path
            d="M150,150L285,150A135,135,0,0,1,150,285L150,150A0,0,0,0,0,150,150"
            stroke="#ffffff"
            strokeWidth="9"
            fill="rgba(124, 73, 227, 0.4)"
          />
        </G>
      </Svg>
    );
  }
}

class Feed extends React.Component {
  render() {
    return (
      <View style={styles.homeContainer}>
        <Button
          style={styles.homeAddButton}
          icon="note-add"
          raised
          primary
          mode="contained"
          onPress={() => this.props.history.push("/")}
        >
          Add SOAP
        </Button>
        <ScrollView
          style={[styles.container]}
          contentContainerStyle={styles.content}
        >
          <Card>
            <CardCover source={require("./assets/images/wrecked-ship.jpg")} />
            <CardContent>
              <Title>Abandoned Ship</Title>
              <Paragraph>
                The Abandoned Ship is a wrecked ship located on Route 108 in
                Hoenn, originally being a ship named the S.S. Cactus. The second
                part of the ship can only be accessed by using Dive and contains
                the Scanner.
              </Paragraph>
            </CardContent>
          </Card>
          <Card>
            <CardCover source={require("./assets/images/forest.jpg")} />
            <CardActions>
              <Button primary onPress={() => {}}>
                Share
              </Button>
              <Button primary onPress={() => {}}>
                Explore
              </Button>
            </CardActions>
          </Card>
          <Card>
            <CardContent>
              <Title>Berries</Title>
              <Caption>Omega Ruby</Caption>
              <Paragraph>
                Dotted around the Hoenn region, you will find loamy soil, many
                of which are housing berries. Once you have picked the berries,
                then you have the ability to use that loamy soil to grow your
                own berries. These can be any berry and will require attention
                to get the best crop.
              </Paragraph>
            </CardContent>
          </Card>
          <Card>
            <CardCover source={require("./assets/images/strawberries.jpg")} />
          </Card>
        </ScrollView>
      </View>
    );
  }
}

class ScriptureNav extends React.PureComponent {
  render() {
    const { currentCategory } = this.props;
    return (
      <View
        style={[
          {
            flexDirection: "row",
            height: 40,
            width: "100%",
            marginBottom: 10,
            justifyContent: "space-around",
            alignItems: "center"
          }
        ]}
      >
        <TouchableOpacity style={[{ flexDirection: "row" }]} onPress={() => {}}>
          <Text
            style={[
              {
                color: `rgba(255,255,255, 0.8)`,
                fontSize: 20,
                fontWeight: "bold"
              }
            ]}
          >
            Romans 11
          </Text>
          <MaterialIcons
            name="filter-list"
            color="rgba(255,255,255, 0.8)"
            style={[{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const pathnameCategoryMatcher = /category\/([a-z]*)/;
const getCurrentCategory = location => {
  const match = pathnameCategoryMatcher.exec(location.pathname);
  return match ? match[1] : null;
};
const pathnameResponseTypeMatcher = /response\/([a-z]*)/;
const getCurrentResponseType = location => {
  const match = pathnameResponseTypeMatcher.exec(location.pathname);
  return match ? match[1] : null;
};

class RecordingResponse extends React.Component {
  constructor(props) {
    super(props);
    this.recording = null;
    this.sound = null;
    this.isSeeking = false;
    this.shouldPlayAtEndOfSeek = false;
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
    };
    this.recordingSettings = JSON.parse(
      JSON.stringify(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY)
    );
    // // UNCOMMENT THIS TO TEST maxFileSize:
    // this.recordingSettings.android['maxFileSize'] = 12000;
  }

  _askForPermissions = async () => {
    const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    this.setState({
      haveRecordingPermissions: response.status === "granted"
    });
  };

  _onRecordPressed = () => {
    if (this.state.isRecording) {
      this._stopRecordingAndEnablePlayback();
    } else {
      this._stopPlaybackAndBeginRecording();
    }
  };

  _getMMSSFromMillis(millis) {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);
    return padWithZero(minutes) + ":" + padWithZero(seconds);
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
      });
    } else {
      this.setState({
        soundDuration: null,
        soundPosition: null,
        isPlaybackAllowed: false
      });
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  };

  _updateScreenForRecordingStatus = status => {
    if (status.canRecord) {
      this.setState({
        isRecording: status.isRecording,
        recordingDuration: status.durationMillis
      });
    } else if (status.isDoneRecording) {
      this.setState({
        isRecording: false,
        recordingDuration: status.durationMillis
      });
      if (!this.state.isLoading) {
        this._stopRecordingAndEnablePlayback();
      }
    }
  };

  _getRecordingTimestamp() {
    if (this.state.recordingDuration != null) {
      return `${this._getMMSSFromMillis(this.state.recordingDuration)}`;
    }
    return `${this._getMMSSFromMillis(0)}`;
  }

  async _stopPlaybackAndBeginRecording() {
    this.setState({
      isLoading: true
    });
    if (this.sound !== null) {
      await this.sound.unloadAsync();
      this.sound.setOnPlaybackStatusUpdate(null);
      this.sound = null;
    }
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
    });
    if (this.recording !== null) {
      this.recording.setOnRecordingStatusUpdate(null);
      this.recording = null;
    }

    const recording = new Audio.Recording();
    await recording.prepareToRecordAsync(this.recordingSettings);
    recording.setOnRecordingStatusUpdate(this._updateScreenForRecordingStatus);

    this.recording = recording;
    await this.recording.startAsync(); // Will call this._updateScreenForRecordingStatus to update the screen.
    this.setState({
      isLoading: false
    });
  }

  async _stopRecordingAndEnablePlayback() {
    this.setState({
      isLoading: true
    });
    try {
      await this.recording.stopAndUnloadAsync();
    } catch (error) {
      // Do nothing -- we are already unloaded.
    }
    const info = await FileSystem.getInfoAsync(this.recording.getURI());
    console.log(`FILE INFO: ${JSON.stringify(info)}`);
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      playsInSilentLockedModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
    });
    const { sound, status } = await this.recording.createNewLoadedSound(
      {
        isLooping: true,
        isMuted: this.state.muted,
        volume: this.state.volume,
        rate: this.state.rate,
        shouldCorrectPitch: this.state.shouldCorrectPitch
      },
      this._updateScreenForSoundStatus
    );
    this.sound = sound;
    this.setState({
      isLoading: false
    });
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
    );
  }
}

class TextResponse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  onTextChange = text => {
    this.setState({ text });
  };

  render() {
    return (
      <KeyboardAvoidingView enabled behavior="padding">
        <TextInput
          style={[styles.container]}
          placeholder="Enter your response..."
          onChangeText={this.onTextChange}
          multiline={true}
          numberOfLines={6}
          value={this.state.text}
        />
      </KeyboardAvoidingView>
    );
  }
}

class AudioResponse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return null;
  }
}

class CategoryResponse extends React.PureComponent {
  render() {
    const { history, location, match } = this.props;
    // console.log("CategoryResponse:");
    // console.log(match);
    const currentCategory = getCurrentCategory(location);
    const currentResponseType = getCurrentResponseType(location);
    return (
      <View
        style={[
          styles.container,
          styles.bgClear,
          {
            alignItems: "flex-start",
            flex: 1,
            width: 300,
            flexDirection: "column"
          }
        ]}
      >
        <View style={[styles.h2]}>
          <Text style={[styles.h2Text]}>What Verse stood out to you?</Text>
        </View>

        {currentResponseType === "text" && <TextResponse />}
        {currentResponseType === "audio" && <RecordingResponse />}
      </View>
    );
  }
}

class Category extends React.PureComponent {
  render() {
    const { history, location, match } = this.props;
    // console.log("Category:");
    // console.log(match);
    const currentCategory = getCurrentCategory(location);
    return (
      <View
        style={[
          styles.container,
          styles.bgClear,
          { flex: 1, alignItems: "center", alignItems: "center", width: 300 }
        ]}
      >
        <Text>Category: {JSON.stringify(match, null, 2)}</Text>
      </View>
    );
  }
}

class Home extends React.PureComponent {
  render() {
    const { history, location, match } = this.props;
    // console.log("location:");
    // console.log(location);
    const currentCategory = getCurrentCategory(location);
    return (
      <View style={[styles.container, { flex: 1, alignItems: "center" }]}>
        <ScriptureNav currentCategory={currentCategory} />
        <Wheel
          history={history}
          location={location}
          currentCategory={currentCategory}
        />
        <Route exact path="/category/:category" component={Category} />
        <Route
          exact
          path="/category/:category/response/:response"
          component={CategoryResponse}
        />
      </View>
    );
  }
}

const CategoryIcons = {
  prayer: require("./assets/images/prayer-icon.png"),
  scripture: require("./assets/images/scripture-icon.png"),
  application: require("./assets/images/application-icon.png"),
  observation: require("./assets/images/observation-icon.png")
};
const QuadIcons = {
  prayer: require("./assets/images/prayer-quad.png"),
  scripture: require("./assets/images/scripture-quad.png"),
  application: require("./assets/images/application-quad.png"),
  observation: require("./assets/images/observation-quad.png")
};

const buildCategoryIcon = name => ({ size, color }) => (
  <View
    style={{
      width: size * 2,
      height: size * 2,
      left: size * -0.5,
      top: size * -0.5,
      borderRadius: size,
      padding: size * 0.2,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: color
    }}
  >
    <Image
      source={CategoryIcons[name]}
      style={{
        width: size * 1.5,
        height: size * 1.5,
        flex: 1
      }}
    />
  </View>
);

const CategoryFabIcons = {
  prayer: buildCategoryIcon("prayer"),
  scripture: buildCategoryIcon("scripture"),
  application: buildCategoryIcon("application"),
  observation: buildCategoryIcon("observation")
};

const FabSize = size => ({
  width: size * 3,
  height: size * 3,
  left: size * -1,
  top: size * -1
});
const createFabIcon = name => ({ size, color }) => (
  <View
    pointerEvents="box-none"
    style={{
      width: size * 2.5,
      height: size * 2.5,
      left: size * -0.75,
      top: size * -0.75,
      borderRadius: size * 2.5,
      padding: size * 0.5,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: color
    }}
  >
    <Image
      source={CategoryIcons[name]}
      style={{
        width: size * 1.5,
        height: size * 1.5,
        flex: 1
      }}
    />
  </View>
);

const FabIcons = {
  prayer: createFabIcon("prayer"),
  scripture: createFabIcon("scripture"),
  application: createFabIcon("application"),
  observation: createFabIcon("observation")
};

const FabIcon = ({ size, color }) => (
  <Image source={require("./assets/images/FAB.png")} style={FabSize(size)} />
);

const promptForResponseTypeKey = "promptForResponseType";

class BottomFabWithoutRouter extends React.PureComponent {
  state = {
    open: false
  };

  fabActionPress = action => () => {
    console.log("fabActionPress: " + action);
    const { history, location, match } = this.props;
    const currentCategory = getCurrentCategory(location);
    if (Categories[action]) {
      const pathname = `/category/${action}`;
      if (currentCategory) {
        history.replace(pathname);
      } else {
        history.push(pathname);
      }
    }
    if (/audio|video|picture|text/.test(action)) {
      history.push(`/category/${currentCategory}/response/${action}`);
    }
    // console.log(event);
  };

  onFabPress = event => {
    // console.log('onFabPress')
    // if (this.state.open) {
    //   // do something if the speed dial is open
    // }
  };

  onStateChange = ({ open }) => {
    // console.log(`onStateChange: ${open}`, this.props.location.state)
    if (this.usesState()) {
      this.setState({ open });
    } else {
      const location = this.props.location;
      const state = location.state || {};
      state[promptForResponseTypeKey] = !!open;
      this.props.history.replace(
        `${location.pathname}${location.search || ""}`,
        Object.assign({}, state)
      );
    }
  };

  usesState = () => QuadClickFlow === 5 && this.props.buster === "plus";

  render() {
    const { history, location, match, buster } = this.props;
    // console.log('routerProps')
    // console.log(routerProps)
    // const state = location.state || {}
    const isExpanded = this.usesState()
      ? this.state.open
      : !!(this.props.location.state || {})[promptForResponseTypeKey];
    const currentCategory = getCurrentCategory(location);
    // console.log(`render fab: '${currentCategory}'`);
    if (buster === "plus" && !!currentCategory) {
      return null;
    }
    if (buster !== "plus" && buster !== currentCategory) {
      return null;
    }

    const actions = currentCategory
      ? [
          {
            icon: "mic",
            label: "Audio",
            key: "audio",
            onPress: this.fabActionPress("audio")
          },
          {
            icon: "videocam",
            label: "Video",
            key: "video",
            onPress: this.fabActionPress("video")
          },
          {
            icon: "camera-alt",
            label: "Picture",
            key: "picture",
            onPress: this.fabActionPress("picture")
          },
          {
            icon: "edit",
            label: "Text",
            key: "text",
            onPress: this.fabActionPress("text")
          }
        ]
      : CategoriesArray.map(category => {
          return {
            icon: CategoryFabIcons[category.key],
            label: category.label,
            color: category.color,
            key: category.key,
            onPress: this.fabActionPress(category.key)
          };
        });
    return (
      <FABGroup
        open={isExpanded}
        // icon={isExpanded ? "close" : "add"}
        icon={currentCategory ? FabIcons[currentCategory] : FabIcon}
        color={currentCategory ? Categories[currentCategory].color : undefined}
        actions={actions}
        onStateChange={this.onStateChange}
        onPress={this.onFabPress}
      />
    );
  }
}
const BottomFab = withRouter(BottomFabWithoutRouter);

class TitlebarWithoutRouter extends React.PureComponent {
  _toggleDrawer = () => {};
  render() {
    const { history, location, match, active } = this.props;
    const parts = location.pathname.split("/");
    const isBackable = parts.length > 2;
    return (
      <Toolbar
        style={[
          {
            width: "100%"
          }
        ]}
      >
        {isBackable && <ToolbarBackAction onPress={history.goBack} />}
        {!isBackable && (
          <ToolbarAction icon="menu" onPress={this._toggleDrawer} />
        )}
        <ToolbarContent title="Wisdom Group" subtitle="Mark's Group" />
      </Toolbar>
    );
  }
}

const Titlebar = withRouter(TitlebarWithoutRouter);

const BackgroundWithoutRouter = ({ location }) => {
  const { width, height } = Dimensions.get("window");
  const category = getCurrentCategory(location);
  const svgW = 1200;
  const svgH = 2500;
  const w = Math.round(width * 1.2);
  const h = Math.round(height * 1.2);
  return (
    <View style={[styles.container, styles.centered, { position: "absolute" }]}>
      <BackgroundPattern
        width={w}
        height={h}
        category={category}
        viewBox={`0 0 ${svgW} ${svgH}`}
      />
    </View>
  );
};
const Background = withRouter(BackgroundWithoutRouter);

const Quad = ({
  w,
  imgPad,
  imgPadMod,
  quadMargin,
  currentCategory,
  quadComponent: Comp,
  category,
  location,
  history,
  onPress,
  pads
}) => (
  <TouchableOpacity
    onPress={() => {
      // console.log(`location: `, location)
      if (currentCategory) {
        const newLocation = location.pathname.replace(
          currentCategory,
          category
        );
        history.replace(newLocation);
      } else if (QuadClickFlow === 5) {
        const state = location.state || {};
        state[promptForResponseTypeKey] = true;
        history.push(`/category/${category}`, state);
      } else {
        history.push(`/category/${category}/response/text`);
      }
    }}
    activeOpacity={0.6}
  >
    <View
      style={[
        {
          width: w / 2,
          height: w / 2
        },
        pads
      ]}
    >
      <Comp style={[styles.layer, quadMargin]} />
      <View style={{ flex: 1 }}>
        <Image
          style={[
            styles.layer,
            {
              left: 0,
              top: 0,
              flex: 1,
              alignSelf: "stretch",
              width: undefined,
              height: undefined
            }
          ]}
          resizeMode="contain"
          source={QuadIcons[category]}
        />
      </View>
    </View>
  </TouchableOpacity>
);

const Wheel = props => {
  const { width, height } = Dimensions.get("window");
  const svgW = 1030;
  const svgH = 1030;
  const ww = width / 10;
  const w = Math.round(width * 0.85);
  const h = Math.round(width * 0.85);
  const margin = (width - w) / 2 + Constants.statusBarHeight;
  const imageWidth = (w / 2) * 0.5;
  const imgPad = w / 9.5;
  const imgPadMod = 1.35;
  return (
    <View style={[styles.centered, { width: w, height: h }]}>
      <View style={{ width: w, height: w / 2, flexDirection: "row" }}>
        <Quad
          w={w}
          imgPad={imgPad}
          imgPadMod={imgPadMod}
          quadMargin={{ marginBottom: 3, marginRight: 3 }}
          quadComponent={ScriptureQuad}
          currentCategory={props.currentCategory}
          category={"scripture"}
          location={props.location}
          history={props.history}
          pads={{
            paddingTop: imgPad * imgPadMod,
            paddingBottom: imgPad / imgPadMod,
            paddingLeft: imgPad * imgPadMod,
            paddingRight: imgPad / imgPadMod
          }}
        />
        <Quad
          w={w}
          imgPad={imgPad}
          imgPadMod={imgPadMod}
          quadMargin={{ marginBottom: 3, marginLeft: 3 }}
          quadComponent={ObservationQuad}
          currentCategory={props.currentCategory}
          category={"observation"}
          location={props.location}
          history={props.history}
          pads={{
            paddingTop: imgPad * imgPadMod,
            paddingBottom: imgPad / imgPadMod,
            paddingLeft: imgPad / imgPadMod,
            paddingRight: imgPad * imgPadMod
          }}
        />
      </View>
      <View style={{ width: w, height: w / 2, flexDirection: "row" }}>
        <Quad
          w={w}
          imgPad={imgPad}
          imgPadMod={imgPadMod}
          quadMargin={{ marginTop: 3, marginRight: 3 }}
          quadComponent={PrayerQuad}
          currentCategory={props.currentCategory}
          category={"prayer"}
          location={props.location}
          history={props.history}
          pads={{
            paddingTop: imgPad / imgPadMod,
            paddingBottom: imgPad * imgPadMod,
            paddingLeft: imgPad * imgPadMod,
            paddingRight: imgPad / imgPadMod
          }}
        />
        <Quad
          w={w}
          imgPad={imgPad}
          imgPadMod={imgPadMod}
          quadMargin={{ marginTop: 3, marginLeft: 3 }}
          sourceStr={require("./assets/images/application-quad.png")}
          quadComponent={ApplicationQuad}
          currentCategory={props.currentCategory}
          category={"application"}
          location={props.location}
          history={props.history}
          pads={{
            paddingTop: imgPad / imgPadMod,
            paddingBottom: imgPad * imgPadMod,
            paddingLeft: imgPad / imgPadMod,
            paddingRight: imgPad * imgPadMod
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => props.history.push("/feed")}
        activeOpacity={0.6}
        style={[
          styles.layer,
          {
            left: w / 2 - ww,
            top: h / 2 - ww,
            right: w - w / 2 - ww,
            bottom: h - h / 2 - ww
          }
        ]}
      >
        <InnerCircle width={w} height={h} viewBox={`0 0 ${svgW} ${svgH}`} />
      </TouchableOpacity>
    </View>
  );
};

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <NativeRouter>
          <View style={[styles.background, styles.centered, styles.container]}>
            <Background />
            <Titlebar />
            <View style={[styles.container, { flex: 1 }]}>
              <Switch>
                // <Route exact path="/feed" component={Feed} />
                <Route component={Home} />
              </Switch>
            </View>
            {/*<RecordingResponse /> */}
            <BottomFab buster="plus" />
            <BottomFab buster="prayer" />
            <BottomFab buster="application" />
            <BottomFab buster="observation" />
            <BottomFab buster="scripture" />
            {/* <Drawer open={true} /> */}
          </View>
        </NativeRouter>
        <KeepAwake />
      </PaperProvider>
    );
  }
}
