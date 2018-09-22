import React from "react"
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from "react-native"

import Selector from "./src/client/components/Selector"
import InnerCircle from "./src/client/components/InnerCircle"
import Drawer from "./src/client/components/Drawer"
import PrayerQuad from "./src/client/components/PrayerQuad"
import ObservationQuad from "./src/client/components/ObservationQuad"
import ScriptureQuad from "./src/client/components/ScriptureQuad"
import ApplicationQuad from "./src/client/components/ApplicationQuad"
import ScriptureNav from "./src/client/components/ScriptureNav"
import Category from "./src/client/components/Category"
import CategoryResponse from "./src/client/components/CategoryResponse"
import Wheel from "./src/client/components/Wheel"
import Background from "./src/client/components/Background"
import BottomFab from "./src/client/components/BottomFab"
import Titlebar from "./src/client/components/Titlebar"
import Feed from "./src/client/components/Feed"
import { CategoriesArray, Categories } from "./src/client/utils/categories"
import styles from "./src/client/utils/styles"
import {
  getCurrentCategory,
  getCurrentResponseType,
  goTo,
} from "./src/client/utils/prop-utils"
import {
  NativeRouter,
  Route,
  Link,
  withRouter,
  Switch
} from "react-router-native"

class Home extends React.PureComponent {
  render() {
    // console.log("location:");
    // console.log(location);
    const currentCategory = getCurrentCategory(this.props)
    return (
      <View style={[styles.container, { flex: 1, alignItems: "center" }]}>
        <ScriptureNav currentCategory={currentCategory} />
        <Wheel
          history={this.props.history}
          location={this.props.location}
          currentCategory={currentCategory}
        />
        <Route exact path="/category/:category" component={Category} />
        <Route
          exact
          path="/category/:category/response/:response"
          component={CategoryResponse}
        />
      </View>
    )
  }
}

const Layout = withRouter(
  (props) => (
    <View style={[styles.background, styles.centered, styles.container]}>
      <Background category={getCurrentCategory(props)} />
      <Titlebar />
      <View style={[styles.container, { flex: 1 }]}>
        <Switch>
          <Route exact path="/feed" component={Feed} />
          <Route component={Home} />
        </Switch>
      </View>
      <BottomFab buster="plus" {...props}  />
      <BottomFab buster="prayer" {...props} />
      <BottomFab buster="application" {...props} />
      <BottomFab buster="observation" {...props} />
      <BottomFab buster="scripture" {...props} />
      {/* <Drawer open={true} /> */}
    </View>
  )
)

class AppRR extends React.Component {
  render() {
    return (
        <NativeRouter>
          <Layout />
        </NativeRouter>
    )
  }
}

export default AppRR
