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
import { Appbar } from "react-native-paper";

import {
  NativeRouter,
  Route,
  Link,
  withRouter,
  Switch
} from "react-router-native";

class TitlebarWithoutRouter extends React.PureComponent {
  _toggleDrawer = () => {};
  render() {
    const { history, location, match, active } = this.props;
    const parts = location.pathname.split("/");
    const isBackable = parts.length > 2;
    return (
      <Appbar
        style={[
          {
            width: "100%"
          }
        ]}
      >
        {isBackable && <Appbar.BackAction onPress={history.goBack} />}
        {!isBackable && (
          <Appbar.Action icon="menu" onPress={this._toggleDrawer} />
        )}
        <Appbar.Content title="Wisdom Group" subtitle="Mark's Group" />
      </Appbar>
    );
  }
}

export default withRouter(TitlebarWithoutRouter);
