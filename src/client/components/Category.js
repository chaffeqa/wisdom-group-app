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

import RecordingResponse from "./RecordingResponse"
import TextResponse from "./TextResponse"
import { CategoriesArray, Categories } from "../utils/categories"

import {
  NativeRouter,
  Route,
  Link,
  withRouter,
  Switch
} from "react-router-native"
import styles from "../utils/styles"
import {
  getCurrentCategory,
  getCurrentResponseType
} from "../utils/prop-utils"

class Category extends React.PureComponent {
  render() {
    const { history, location, match } = this.props
    // console.log("Category:");
    // console.log(match);
    const currentCategory = getCurrentCategory(location)
    return (
      <View
        style={[
          styles.container,
          styles.bgClear,
          { flex: 1, alignItems: "center", width: 300 }
        ]}
      >
        <Text>Category: {JSON.stringify(match, null, 2)}</Text>
      </View>
    )
  }
}
export default Category
