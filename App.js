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

import Selector from "./src/client/components/Selector";
import InnerCircle from "./src/client/components/InnerCircle";
import Drawer from "./src/client/components/Drawer";
import PrayerQuad from "./src/client/components/PrayerQuad";
import ObservationQuad from "./src/client/components/ObservationQuad";
import ScriptureQuad from "./src/client/components/ScriptureQuad";
import ApplicationQuad from "./src/client/components/ApplicationQuad";
import ScriptureNav from "./src/client/components/ScriptureNav";
import Category from "./src/client/components/Category";
import CategoryResponse from "./src/client/components/CategoryResponse";
import Wheel from "./src/client/components/Wheel";
import Background from "./src/client/components/Background";
import BottomFab from "./src/client/components/BottomFab";
import Titlebar from "./src/client/components/Titlebar";
import Feed from "./src/client/components/Feed";
import { CategoriesArray, Categories } from "./src/client/utils/categories";
import styles from "./src/client/utils/styles";
import {
  getCurrentCategory,
  getCurrentResponseType
} from "./src/client/utils/prop-utils";

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
