import React from "react"
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from "react-native"
// import MultiMediaTabNavigator from './navigation/MainAppTabNavigator';
import { Constants, KeepAwake } from "expo"
import {
  Provider as PaperProvider,
  DefaultTheme,
} from "react-native-paper"
import LibraryScreen from './screens/LibraryScreen';
import PlayVideoScreen from './screens/PlayVideoScreen';
import RecordVideoScreen from './screens/RecordVideoScreen';
import RecordAudioScreen from './screens/RecordAudioScreen';

import { createStackNavigator, createSwitchNavigator, createDrawerNavigator , withNavigation} from 'react-navigation';

import Selector from "./components/Selector"
import InnerCircle from "./components/InnerCircle"
import Drawer from "./components/Drawer"
import PrayerQuad from "./components/PrayerQuad"
import ObservationQuad from "./components/ObservationQuad"
import ScriptureQuad from "./components/ScriptureQuad"
import ApplicationQuad from "./components/ApplicationQuad"
import ScriptureNav from "./components/ScriptureNav"
import Category from "./components/Category"
import CategoryResponse from "./components/CategoryResponse"
import Wheel from "./components/Wheel"
import Background from "./components/Background"
import BottomFab from "./components/BottomFab"
import Titlebar from "./components/Titlebar"
import Feed from "./components/Feed"
import { CategoriesArray, Categories } from "./utils/categories"
import styles from "./utils/styles"
import {
  getCurrentCategory,
  getCurrentResponseType,
  goTo,
} from "./utils/prop-utils"
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
  render() {
    console.log('CategoryResponseScreen')
    console.log(this.props)
    return (
      <LibraryScreen {...this.props} />
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
},
{
  initialRouteName: 'Category',
  headerMode: 'none',
  // headerMode: 'screen',
  mode: 'modal',
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
  // headerMode: 'screen',
})
const FeedStack = createStackNavigator({
  Feed: {
    screen: FeedScreen,
    path: '/feed'
  }
},
{
  initialRouteName: 'Feed',
  // headerMode: 'screen',
})

const AppStack = createDrawerNavigator({
  Wheel: WheelStack,
  Feed: FeedStack,
},
{
  initialRouteName: 'Wheel',
  // headerMode: 'none',
});
const CategoryResponseStack = createStackNavigator({
  CategoryResponse: {
    screen: CategoryResponseScreen,
    path: '/category/:category/response/:response'
  },
},
{
  initialRouteName: 'CategoryResponse',
  headerMode: 'screen',
})

const RootStack = createStackNavigator({
  Wheel: AppStack,
  CategoryResponse: CategoryResponseStack,
},
{
  initialRouteName: 'Wheel',
  headerMode: 'none',
  mode: 'modal',
});


export default RootStack
