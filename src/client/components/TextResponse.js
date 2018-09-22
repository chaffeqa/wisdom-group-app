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

import styles from "../utils/styles";

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
