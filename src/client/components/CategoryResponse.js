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

import RecordingResponse from "./RecordingResponse";
import TextResponse from "./TextResponse";
import { CategoriesArray, Categories } from "../utils/categories";

import {
  NativeRouter,
  Route,
  Link,
  withRouter,
  Switch
} from "react-router-native";
import styles from "../utils/styles";
import {
  getCurrentCategory,
  getCurrentResponseType
} from "../utils/prop-utils";

class CategoryResponse extends React.PureComponent {
  render() {
    const { history, location, match } = this.props;
    // console.log("CategoryResponse:");
    // console.log(match);
    return null;
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

export default CategoryResponse;
