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

import {
  NativeRouter,
  Route,
  Link,
  withRouter,
  Switch
} from "react-router-native"

class ScriptureNav extends React.PureComponent {
  render() {
    const { currentCategory } = this.props
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
                color: "rgba(255,255,255, 0.8)",
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
    )
  }
}

export default ScriptureNav
