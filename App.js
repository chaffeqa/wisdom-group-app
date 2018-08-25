import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Button as RnButton,
  Image
} from "react-native";
import { Constants, KeepAwake } from "expo";
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

import BackgroundPattern from "./src/client/components/BackgroundPattern";
import Selector from "./src/client/components/Selector";
import InnerCircle from "./src/client/components/InnerCircle";
import Drawer from "./src/client/components/Drawer";
import PrayerQuad from "./src/client/components/PrayerQuad";
import ObservationQuad from "./src/client/components/ObservationQuad";
import ScriptureQuad from "./src/client/components/ScriptureQuad";
import ApplicationQuad from "./src/client/components/ApplicationQuad";
import { CategoriesArray, Categories } from "./src/client/utils/categories";

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

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff"
  },
  centered: {
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1
  },
  content: {
    padding: 4,
    paddingTop: 60
  },
  homeContainer: {
    flex: 1
  },
  layer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    ...StyleSheet.absoluteFillObject
  },
  homeAddButton: {
    position: "absolute",
    zIndex: 1,
    marginTop: 10,
    height: 40,
    width: 250,
    marginLeft: 30,
    alignItems: "center",
    justifyContent: "center"
  }
});

class CircleChooser extends React.Component {
  render() {
    return (
      <Svg height={100 * 3} width={100 * 3}>
        <G>
          <Path
            d="M150,150L150,15A135,135,0,0,1,285,150L150,150A0,0,0,0,0,150,150"
            stroke="#ffffff"
            strokeWidth="9"
            fill="rgba(124, 73, 227, 0.4)"
          />
        </G>
        <G>
          <Path
            d="M150,150L15,150.00000000000003A135,135,0,0,1,150,15L150,150A0,0,0,0,0,150,150"
            stroke="#ffffff"
            strokeWidth="9"
            fill="rgba(124, 73, 227, 0.4)"
          />
        </G>
        <G>
          <Path
            d="M150,150L150,285A135,135,0,0,1,15,150.00000000000003L150,150A0,0,0,0,0,150,150"
            stroke="#ffffff"
            strokeWidth="9"
            fill="rgba(124, 73, 227, 0.4)"
          />
        </G>
        <G>
          <Path
            d="M150,150L285,150A135,135,0,0,1,150,285L150,150A0,0,0,0,0,150,150"
            stroke="#ffffff"
            strokeWidth="9"
            fill="rgba(124, 73, 227, 0.4)"
          />
        </G>
      </Svg>
    );
  }
}

class Feed extends React.Component {
  render() {
    return (
      <View style={styles.homeContainer}>
        <Button
          style={styles.homeAddButton}
          icon="note-add"
          raised
          primary
          mode="contained"
          onPress={() => this.props.history.push("/")}
        >
          Add SOAP
        </Button>
        <ScrollView
          style={[styles.container]}
          contentContainerStyle={styles.content}
        >
          <Card>
            <CardCover source={require("./assets/images/wrecked-ship.jpg")} />
            <CardContent>
              <Title>Abandoned Ship</Title>
              <Paragraph>
                The Abandoned Ship is a wrecked ship located on Route 108 in
                Hoenn, originally being a ship named the S.S. Cactus. The second
                part of the ship can only be accessed by using Dive and contains
                the Scanner.
              </Paragraph>
            </CardContent>
          </Card>
          <Card>
            <CardCover source={require("./assets/images/forest.jpg")} />
            <CardActions>
              <Button primary onPress={() => {}}>
                Share
              </Button>
              <Button primary onPress={() => {}}>
                Explore
              </Button>
            </CardActions>
          </Card>
          <Card>
            <CardContent>
              <Title>Berries</Title>
              <Caption>Omega Ruby</Caption>
              <Paragraph>
                Dotted around the Hoenn region, you will find loamy soil, many
                of which are housing berries. Once you have picked the berries,
                then you have the ability to use that loamy soil to grow your
                own berries. These can be any berry and will require attention
                to get the best crop.
              </Paragraph>
            </CardContent>
          </Card>
          <Card>
            <CardCover source={require("./assets/images/strawberries.jpg")} />
          </Card>
        </ScrollView>
      </View>
    );
  }
}

class ScriptureNav extends React.PureComponent {
  render() {
    const { currentCategory } = this.props;
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
                color: `rgba(255,255,255, 0.8)`,
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
    );
  }
}

const pathnameCategoryMatcher = /category\/([a-z]*)/;
const getCurrentCategory = location => {
  const match = pathnameCategoryMatcher.exec(location.pathname);
  return match ? match[1] : null;
};

class CategoryResponse extends React.PureComponent {
  render() {
    const { history, location, match } = this.props;
    console.log("CategoryResponse:");
    console.log(match);
    const currentCategory = getCurrentCategory(location);
    return (
      <View
        style={[
          styles.container,
          { flex: 1, alignItems: "center", backgroundColor: "blue", width: 300 }
        ]}
      >
        <Text>{JSON.stringify(match, null, 2)}</Text>
      </View>
    );
  }
}

class Category extends React.PureComponent {
  render() {
    const { history, location, match } = this.props;
    console.log("Category:");
    console.log(match);
    const currentCategory = getCurrentCategory(location);
    return (
      <View
        style={[
          styles.container,
          { flex: 1, alignItems: "center", backgroundColor: "red", width: 300 }
        ]}
      >
        <Text>{JSON.stringify(match, null, 2)}</Text>
        <Route
          path="/category/:category/response/:response"
          component={CategoryResponse}
        />
      </View>
    );
  }
}

class Home extends React.PureComponent {
  render() {
    const { history, location, match } = this.props;
    console.log("location:");
    console.log(location);
    const currentCategory = getCurrentCategory(location);
    return (
      <View style={[styles.container, { flex: 1, alignItems: "center" }]}>
        <ScriptureNav currentCategory={currentCategory} />
        <Wheel history={history} currentCategory={currentCategory} />
        <Route path="/category/:category" component={Category} />
      </View>
    );
  }
}

const CategoryIcons = {
  prayer: ({ size, color }) => (
    <Image
      source={require("./assets/images/prayer-icon.png")}
      style={{
        width: size * 2,
        height: size * 2,
        left: size * -0.5,
        top: size * -0.5
      }}
    />
  ),
  scripture: ({ size, color }) => (
    <Image
      source={require("./assets/images/scripture-icon.png")}
      style={{
        width: size * 2,
        height: size * 2,
        left: size * -0.5,
        top: size * -0.5
      }}
    />
  ),
  application: ({ size, color }) => (
    <Image
      source={require("./assets/images/application-icon.png")}
      style={{
        width: size * 2,
        height: size * 2,
        left: size * -0.5,
        top: size * -0.5
      }}
    />
  ),
  observation: ({ size, color }) => (
    <Image
      source={require("./assets/images/observation-icon.png")}
      style={{
        width: size * 2,
        height: size * 2,
        left: size * -0.5,
        top: size * -0.5
      }}
    />
  )
};

const FabIcon = ({ size, color }) => (
  <Image
    source={require("./assets/images/FAB.png")}
    style={{
      width: size * 3,
      height: size * 3,
      left: size * -1,
      top: size * -1
    }}
  />
);

class BottomFabWithoutRouter extends React.PureComponent {
  state = {
    open: false
  };

  fabActionPress = action => () => {
    console.log("fabActionPress: " + action);
    const { history, location, match } = this.props;
    const currentCategory = getCurrentCategory(location);
    if (Categories[action]) {
      const pathname = `/category/${action}`;
      if (currentCategory) {
        history.replace(pathname);
      } else {
        history.push(pathname);
      }
    }
    if (/audio|video|picture|text/.test(action)) {
      history.push(`/category/${currentCategory}/response/${action}`);
    }
    // console.log(event);
  };

  onFabPress = event => {
    // console.log('onFabPress')
    // if (this.state.open) {
    //   // do something if the speed dial is open
    // }
  };

  onStateChange = ({ open }) => {
    // console.log('onStateChange')
    this.setState({ open });
  };

  render() {
    const { history, location, match } = this.props;
    // console.log('routerProps')
    // console.log(routerProps)
    // const state = location.state || {}
    const isExpanded = this.state.open;
    const currentCategory = getCurrentCategory(location);
    console.log(`render fab: '${currentCategory}'`);

    const actions = currentCategory
      ? [
          {
            icon: "mic",
            label: "Audio",
            key: "audio",
            onPress: this.fabActionPress("audio")
          },
          {
            icon: "videocam",
            label: "Video",
            key: "video",
            onPress: this.fabActionPress("video")
          },
          {
            icon: "camera-alt",
            label: "Picture",
            key: "picture",
            onPress: this.fabActionPress("picture")
          },
          {
            icon: "edit",
            label: "Text",
            key: "text",
            onPress: this.fabActionPress("text")
          }
        ]
      : CategoriesArray.map(category => {
          return {
            icon: CategoryIcons[category.key],
            label: category.label,
            key: category.key,
            onPress: this.fabActionPress(category.key)
          };
        });
    return (
      <FABGroup
        open={isExpanded}
        // icon={isExpanded ? "close" : "add"}
        icon={currentCategory ? CategoryIcons[currentCategory] : FabIcon}
        actions={actions}
        onStateChange={this.onStateChange}
        onPress={this.onFabPress}
      />
    );
  }
}
const BottomFab = withRouter(BottomFabWithoutRouter);

class TitlebarWithoutRouter extends React.PureComponent {
  _toggleDrawer = () => {};
  render() {
    const { history, location, match, active } = this.props;
    const parts = location.pathname.split("/");
    const isBackable = parts.length > 2;
    return (
      <Toolbar
        style={[
          {
            width: "100%"
          }
        ]}
      >
        {isBackable && <ToolbarBackAction onPress={history.goBack} />}
        {!isBackable && (
          <ToolbarAction icon="menu" onPress={this._toggleDrawer} />
        )}
        <ToolbarContent title="Wisdom Group" subtitle="Mark's Group" />
      </Toolbar>
    );
  }
}

const Titlebar = withRouter(TitlebarWithoutRouter);

const Background = ({ category }) => {
  const { width, height } = Dimensions.get("window");
  const svgW = 1200;
  const svgH = 2500;
  const w = Math.round(width * 1.2);
  const h = Math.round(height * 1.2);
  return (
    <View style={[styles.container, styles.centered, { position: "absolute" }]}>
      <BackgroundPattern
        width={w}
        height={h}
        category={category}
        viewBox={`0 0 ${svgW} ${svgH}`}
      />
    </View>
  );
};

const Quad = ({
  w,
  imgPad,
  imgPadMod,
  quadMargin,
  sourceStr,
  quadComponent: Comp,
  category,
  history,
  onPress,
  pads
}) => (
  <TouchableOpacity
    onPress={() => history.push(`/category/${category}`)}
    activeOpacity={0.6}
  >
    <View
      style={[
        {
          width: w / 2,
          height: w / 2
        },
        pads
      ]}
    >
      <Comp style={[styles.layer, quadMargin]} />
      <View style={{ flex: 1 }}>
        <Image
          style={[
            styles.layer,
            {
              left: 0,
              top: 0,
              flex: 1,
              alignSelf: "stretch",
              width: undefined,
              height: undefined
            }
          ]}
          resizeMode="contain"
          source={sourceStr}
        />
      </View>
    </View>
  </TouchableOpacity>
);

const Wheel = props => {
  const { width, height } = Dimensions.get("window");
  const svgW = 1030;
  const svgH = 1030;
  const ww = width / 10;
  const w = Math.round(width * 0.85);
  const h = Math.round(width * 0.85);
  const margin = (width - w) / 2 + Constants.statusBarHeight;
  const imageWidth = (w / 2) * 0.5;
  const imgPad = w / 9.5;
  const imgPadMod = 1.35;
  return (
    <View style={[styles.centered, { width: w, height: h }]}>
      <View style={{ width: w, height: w / 2, flexDirection: "row" }}>
        <Quad
          w={w}
          imgPad={imgPad}
          imgPadMod={imgPadMod}
          quadMargin={{ marginBottom: 3, marginRight: 3 }}
          sourceStr={require("./assets/images/scripture-quad.png")}
          quadComponent={ScriptureQuad}
          category={"scripture"}
          history={props.history}
          pads={{
            paddingTop: imgPad * imgPadMod,
            paddingBottom: imgPad / imgPadMod,
            paddingLeft: imgPad * imgPadMod,
            paddingRight: imgPad / imgPadMod
          }}
        />
        <Quad
          w={w}
          imgPad={imgPad}
          imgPadMod={imgPadMod}
          quadMargin={{ marginBottom: 3, marginLeft: 3 }}
          sourceStr={require("./assets/images/observation-quad.png")}
          quadComponent={ObservationQuad}
          category={"observation"}
          history={props.history}
          pads={{
            paddingTop: imgPad * imgPadMod,
            paddingBottom: imgPad / imgPadMod,
            paddingLeft: imgPad / imgPadMod,
            paddingRight: imgPad * imgPadMod
          }}
        />
      </View>
      <View style={{ width: w, height: w / 2, flexDirection: "row" }}>
        <Quad
          w={w}
          imgPad={imgPad}
          imgPadMod={imgPadMod}
          quadMargin={{ marginTop: 3, marginRight: 3 }}
          sourceStr={require("./assets/images/prayer-quad.png")}
          quadComponent={PrayerQuad}
          category={"prayer"}
          history={props.history}
          pads={{
            paddingTop: imgPad / imgPadMod,
            paddingBottom: imgPad * imgPadMod,
            paddingLeft: imgPad * imgPadMod,
            paddingRight: imgPad / imgPadMod
          }}
        />
        <Quad
          w={w}
          imgPad={imgPad}
          imgPadMod={imgPadMod}
          quadMargin={{ marginTop: 3, marginLeft: 3 }}
          sourceStr={require("./assets/images/application-quad.png")}
          quadComponent={ApplicationQuad}
          category={"application"}
          history={props.history}
          pads={{
            paddingTop: imgPad / imgPadMod,
            paddingBottom: imgPad * imgPadMod,
            paddingLeft: imgPad / imgPadMod,
            paddingRight: imgPad * imgPadMod
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => props.history.push("/feed")}
        activeOpacity={0.6}
        style={[
          styles.layer,
          {
            left: w / 2 - ww,
            top: h / 2 - ww,
            right: w - w / 2 - ww,
            bottom: h - h / 2 - ww
          }
        ]}
      >
        <InnerCircle width={w} height={h} viewBox={`0 0 ${svgW} ${svgH}`} />
      </TouchableOpacity>
    </View>
  );
};

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
                <Route exact path="/feed" component={Feed} />
                <Route component={Home} />
              </Switch>
            </View>
            <BottomFab />
            {/* <Drawer open={true} /> */}
          </View>
        </NativeRouter>
        <KeepAwake />
      </PaperProvider>
    );
  }
}
