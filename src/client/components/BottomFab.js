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
import { Constants, KeepAwake, Audio, Permissions } from "expo"
import {
  DefaultTheme,
  FAB,
  Portal,
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

import { CategoriesArray, Categories } from "../utils/categories"
import {
  getCurrentCategory,
  getCurrentResponseType,
  goTo
} from "../utils/prop-utils"


const QuadClickFlow = 1
const CategoryIcons = {
  prayer: require("../../../assets/images/prayer-icon.png"),
  scripture: require("../../../assets/images/scripture-icon.png"),
  application: require("../../../assets/images/application-icon.png"),
  observation: require("../../../assets/images/observation-icon.png")
}

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
)

const CategoryFabIcons = {
  prayer: buildCategoryIcon("prayer"),
  scripture: buildCategoryIcon("scripture"),
  application: buildCategoryIcon("application"),
  observation: buildCategoryIcon("observation")
}

const FabSize = size => ({
  width: size * 3,
  height: size * 3,
  left: size * -1,
  top: size * -1
})
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
)

const FabIcons = {
  prayer: createFabIcon("prayer"),
  scripture: createFabIcon("scripture"),
  application: createFabIcon("application"),
  observation: createFabIcon("observation")
}

const FabIcon = ({ size, color }) => (
  <Image
    source={require("../../../assets/images/FAB.png")}
    style={FabSize(size)}
  />
)

const promptForResponseTypeKey = "promptForResponseType"

class BottomFab extends React.PureComponent {
  state = {
    open: false
  };

  fabActionPress = action => () => {
    // console.log("fabActionPress: " + action);
    const currentCategory = getCurrentCategory(this.props)
    if (Categories[action]) {
      goTo(`/category/${action}`, this.props)
    }
    if (/audio|video|picture|text/.test(action)) {
      goTo(`/category/${currentCategory}/response/${action}`, this.props)
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
    this.setState({ open })
  };

  usesState = () => QuadClickFlow === 5 && this.props.buster === "plus";

  render() {
    const { buster } = this.props
    const isExpanded = this.state.open
    const currentCategory = getCurrentCategory(this.props)
    // console.log(`render fab: '${currentCategory}'`);
    if (buster === "plus" && !!currentCategory) {
      return null
    }
    if (buster !== "plus" && buster !== currentCategory) {
      return null
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
        }
      })
    return (
      <Portal>
        <FAB.Group
          open={isExpanded}
          icon={currentCategory ? FabIcons[currentCategory] : FabIcon}
          color={
            currentCategory ? Categories[currentCategory].color : undefined
          }
          actions={actions}
          onStateChange={this.onStateChange}
          onPress={this.onFabPress}
        />
      </Portal>
    )
  }
}
export default BottomFab
