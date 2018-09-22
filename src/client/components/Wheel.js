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

import { CategoriesArray, Categories } from "../utils/categories"
import PrayerQuad from "./PrayerQuad"
import ObservationQuad from "./ObservationQuad"
import ScriptureQuad from "./ScriptureQuad"
import ApplicationQuad from "./ApplicationQuad"
import InnerCircle from "./InnerCircle"
import styles from "../utils/styles"
import {
  getCurrentCategory,
  goTo,
  getCurrentResponseType
} from "../utils/prop-utils"


const QuadClickFlow = 1

const QuadIcons = {
  prayer: require("../../../assets/images/prayer-quad.png"),
  scripture: require("../../../assets/images/scripture-quad.png"),
  application: require("../../../assets/images/application-quad.png"),
  observation: require("../../../assets/images/observation-quad.png")
}

const promptForResponseTypeKey = "promptForResponseType"

const Quad = ({
  w,
  imgPad,
  imgPadMod,
  quadMargin,
  currentCategory,
  quadComponent: Comp,
  category,
  navigation,
  onPress,
  pads
}) => (
  <TouchableOpacity
    onPress={() => goTo(`/category/${category}`, {navigation})}
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
)

const Wheel = props => {
  const { width, height } = Dimensions.get("window")
  const svgW = 1030
  const svgH = 1030
  const ww = width / 10
  const w = Math.round(width * 0.85)
  const h = Math.round(width * 0.85)
  const margin = (width - w) / 2 + Constants.statusBarHeight
  const imageWidth = (w / 2) * 0.5
  const imgPad = w / 9.5
  const imgPadMod = 1.35
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
          navigation={props.navigation}
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
          navigation={props.navigation}
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
          navigation={props.navigation}
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
          sourceStr={require("../../../assets/images/application-quad.png")}
          quadComponent={ApplicationQuad}
          currentCategory={props.currentCategory}
          category={"application"}
          navigation={props.navigation}
          pads={{
            paddingTop: imgPad / imgPadMod,
            paddingBottom: imgPad * imgPadMod,
            paddingLeft: imgPad / imgPadMod,
            paddingRight: imgPad * imgPadMod
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => goTo(`/feed`, props)}
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
  )
}

export default Wheel
