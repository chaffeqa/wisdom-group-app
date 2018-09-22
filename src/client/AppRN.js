import React from "react"
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from "react-native"
import { Constants, KeepAwake } from "expo"
import {
  Provider as PaperProvider,
  DefaultTheme,
} from "react-native-paper"

import { createStackNavigator, createSwitchNavigator, createDrawerNavigator , withNavigation} from 'react-navigation';

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
import { useScreens } from 'react-native-screens';

useScreens();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "white"
    // accent: 'yellow',
  }
}


class LayoutWithoutRouter extends React.PureComponent {
  render() {
    const {navigation} = this.props
    const category = getCurrentCategory(this.props)
    return (
      <View style={[styles.background, styles.centered, styles.container]}>
        <Background category={category} />
        <View style={[styles.container, { flex: 1 }]}>
          {this.props.children}
        </View>
        <BottomFab buster="plus" navigation={navigation} />
        <BottomFab buster="prayer" navigation={navigation} />
        <BottomFab buster="application" navigation={navigation} />
        <BottomFab buster="observation" navigation={navigation} />
        <BottomFab buster="scripture" navigation={navigation} />
      </View>
    );
  }
}
const Layout = withNavigation(LayoutWithoutRouter)

class CategoryResponseScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    title: "Category",
  };
  render() {
    return (
      <View style={[styles.container, { flex: 1, alignItems: "center" }]}>
        <Text>CategoryResponse Screen!</Text>
        <Text>state: {JSON.stringify(this.props.navigation.state, null, 2)}</Text>
          <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back"
        />
      </View>
    );
  }
}
class CategoryScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    title: "Category",
  };
  render() {
    return (
      <Layout>
        <View style={[styles.container, { flex: 1, alignItems: "center" }]}>
          <Text>Category Screen!</Text>
          <Text>state: {JSON.stringify(this.props.navigation.state, null, 2)}</Text>
            <Button
            onPress={() => goTo('/', this.props)}
            title="Go back"
          />
        </View>
        
      </Layout>
    );
  }
}
class WheelScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    title: "Home",
  };
  render() {
    return (
      <Layout>
        <View style={[styles.container, { flex: 1, alignItems: "center" }]}>
          <ScriptureNav currentCategory={null} />
          <Wheel
            navigation={this.props.navigation}
            currentCategory={null}
          />
        </View>
      </Layout>
    );
  }
}
class FeedScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Feed',
    title: "Feed"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Feed Screen!</Text>
          <Button
          onPress={() => goTo('/', this.props)}
          title="Go back home"
        />
      </View>
    );
  }
}

const CategoryStack = createStackNavigator({
  Category: {
    screen: CategoryScreen,
    path: '/category/:category'
  },
  CategoryResponse: {
    screen: CategoryResponseScreen,
    path: '/category/:category/response/:response'
  },
},
{
  initialRouteName: 'Category',
  mode: 'modal',
  navigationOptions: {
    header: null,
  },
})
const WheelStack = createStackNavigator({
  Wheel: {
    screen: WheelScreen,
    path: '/'
  },
  Category: CategoryStack
},
{
  initialRouteName: 'Wheel',
})
const FeedStack = createStackNavigator({
  Feed: {
    screen: FeedScreen,
    path: '/feed'
  }
},
{
  initialRouteName: 'Feed',
})

const RootStack = createDrawerNavigator({
  Wheel: WheelStack,
  Feed: FeedStack,
},
{
  initialRouteName: 'Wheel',
  contentOptions: {
  }
});


export default RootStack
