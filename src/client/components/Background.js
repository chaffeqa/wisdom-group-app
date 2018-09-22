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

import styles from "../utils/styles"
import { getCurrentCategory, gotTo } from "../utils/prop-utils"

import BackgroundPattern from "./BackgroundPattern"

const Background = ({category}) => {
  const { width, height } = Dimensions.get("window")
  const svgW = 1200
  const svgH = 2500
  const w = Math.round(width * 1.2)
  const h = Math.round(height * 1.2)
  return (
    <View style={[styles.container, styles.centered, { position: "absolute" }]}>
      <BackgroundPattern
        width={w}
        height={h}
        category={category}
        viewBox={`0 0 ${svgW} ${svgH}`}
      />
    </View>
  )
}
export default Background
