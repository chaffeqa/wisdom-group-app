import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Image
} from "react-native";
import { Constants } from "expo";
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
  ToolbarAction
} from "react-native-paper";

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
import PrayerIcon from "./src/client/components/PrayerIcon";
import ObservationIcon from "./src/client/components/ObservationIcon";
import ScriptureIcon from "./src/client/components/ScriptureIcon";
import ApplicationIcon from "./src/client/components/ApplicationIcon";

import { NativeRouter, Route, Link, withRouter } from "react-router-native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors
    // primary: 'tomato',
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

class Home extends React.Component {
  render() {
    return (
      <View style={styles.homeContainer}>
        <Button
          style={styles.homeAddButton}
          icon="note-add"
          raised
          primary
          mode="contained"
          onPress={() => console.log("Pressed")}
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

class BottomFab extends React.PureComponent {
  state = {
    open: false
  };

  fabActionPress = event => {
    console.log(event);
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
    return (
      <Route>
        {({ history, location, match }) => {
          // console.log('routerProps')
          // console.log(routerProps)
          // const state = location.state || {}
          const isExpanded = this.state.open;
          const actions = [
            { icon: "add", onPress: this.fabActionPress },
            { icon: "star", label: "Star", onPress: this.fabActionPress },
            { icon: "email", label: "Email", onPress: this.fabActionPress },
            {
              icon: "notifications",
              label: "Remind",
              onPress: this.fabActionPress
            }
          ];
          return (
            <FABGroup
              open={isExpanded}
              icon={isExpanded ? "today" : "add"}
              actions={actions}
              onStateChange={this.onStateChange}
              onPress={this.onFabPress}
            />
          );
        }}
      </Route>
    );
  }
}

class TitlebarWithoutRouter extends React.PureComponent {
  render() {
    const { history, location, match, active } = this.props;
    const isBackable = location.pathname.split("/").length > 2;
    return (
      <Toolbar>
        {isBackable && <ToolbarBackAction onPress={history.goBack} />}
        <ToolbarContent title="Title" subtitle="Subtitle" />
        <ToolbarAction icon="search" onPress={this._onSearch} />
        <ToolbarAction icon="more-vert" onPress={this._onMore} />
        <DrawerSection title="Some title">
          <DrawerItem
            label="First Item"
            active={active === "First Item"}
            onPress={() => {
              this.setState({ active: "First Item" });
            }}
          />
          <DrawerItem
            label="Second Item"
            active={active === "Second Item"}
            onPress={() => {
              this.setState({ active: "Second Item" });
            }}
          />
        </DrawerSection>
      </Toolbar>
    );
  }
}

const Titlebar = withRouter(TitlebarWithoutRouter);

const Background = () => {
  const { width, height } = Dimensions.get("window");
  const svgW = 1200;
  const svgH = 2500;
  const w = Math.round(width * 1.2);
  const h = Math.round(height * 1.2);
  return (
    <View style={[styles.container, styles.centered, { position: "absolute" }]}>
      <BackgroundPattern width={w} height={h} viewBox={`0 0 ${svgW} ${svgH}`} />
    </View>
  );
};

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
    <View
      style={[
        styles.container,
        styles.centered,
        { position: "absolute", width: w, height: h, top: margin }
      ]}
    >
      <Selector
        style={[styles.layer]}
        width={w}
        height={h}
        viewBox={`0 0 ${svgW} ${svgH}`}
      />
      <InnerCircle
        style={[styles.layer, { left: w / 2 - ww, top: h / 2 - ww }]}
        width={w}
        height={h}
        viewBox={`0 0 ${svgW} ${svgH}`}
      />
      <View style={{ width: w, height: w / 2, flexDirection: "row" }}>
        <View
          style={{
            width: w / 2,
            height: w / 2,
            paddingTop: imgPad * imgPadMod,
            paddingBottom: imgPad / imgPadMod,
            paddingLeft: imgPad * imgPadMod,
            paddingRight: imgPad / imgPadMod
          }}
        >
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
              source={require("./assets/images/scripture-icon.png")}
            />
          </View>
        </View>
        <View
          style={{
            width: w / 2,
            height: w / 2,
            paddingTop: imgPad * imgPadMod,
            paddingBottom: imgPad / imgPadMod,
            paddingLeft: imgPad / imgPadMod,
            paddingRight: imgPad * imgPadMod
          }}
        >
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
              source={require("./assets/images/observation-icon.png")}
            />
          </View>
        </View>
      </View>
      <View style={{ width: w, height: w / 2, flexDirection: "row" }}>
        <View
          style={{
            width: w / 2,
            height: w / 2,
            paddingTop: imgPad / imgPadMod,
            paddingBottom: imgPad * imgPadMod,
            paddingLeft: imgPad * imgPadMod,
            paddingRight: imgPad / imgPadMod
          }}
        >
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
              source={require("./assets/images/prayer-icon.png")}
            />
          </View>
        </View>
        <View
          style={{
            width: w / 2,
            height: w / 2,
            paddingTop: imgPad / imgPadMod,
            paddingBottom: imgPad * imgPadMod,
            paddingLeft: imgPad / imgPadMod,
            paddingRight: imgPad * imgPadMod
          }}
        >
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
              source={require("./assets/images/application-icon.png")}
            />
          </View>
        </View>
      </View>
      {/*<Image
          style={[styles.layer, { left: 0, top: 0, flex: 1, alignSelf: 'stretch', width: undefined, height: undefined }]}
          resizeMode="contain"
          source={require("./assets/images/prayer-icon.png")}
        />
      
      <PrayerIcon style={[styles.layer, { left: margin + ww / 2, top: margin + h / 2 - ww / 2 }]} width={w / 4} height={h / 4} viewBox={`0 0 ${296} ${344}`} />
      <ObservationIcon style={[styles.layer, { left: (w / 2  + ww / 2) / 1, top: margin }]} width={w / 4} height={h / 4} viewBox={`0 0 ${296} ${344}`} />
      <ApplicationIcon style={[styles.layer, { left: (w / 2  + ww / 2) / 1, top: margin + h / 2 - ww / 2 }]} width={w / 4} height={h / 4} viewBox={`0 0 ${296} ${344}`} />
      <ScriptureIcon style={[styles.layer, { left: margin + ww / 2, top: margin }]} width={w / 4} height={h / 4} viewBox={`0 0 ${296} ${344}`} /> */}
    </View>
  );
};

export default class App extends React.Component {
  state = {
    fabExpanded: false
  };

  render() {
    return (
      <PaperProvider theme={theme}>
        <NativeRouter>
          <View style={[styles.background, styles.centered, styles.container]}>
            {/* <Titlebar /> */}
            <Background />
            <Wheel />
            {/* <Route exact path="/" component={Home} /> */}
            <BottomFab />
          </View>
        </NativeRouter>
      </PaperProvider>
    );
  }
}
