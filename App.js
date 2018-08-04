import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
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
  withTheme
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

import { NativeRouter, Route, Link } from "react-router-native";

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

export default class App extends React.Component {
  state = {
    fabExpanded: false
  };

  render() {
    return (
      <PaperProvider theme={theme}>
        <NativeRouter>
          <SafeAreaView style={styles.background}>
            <View style={[styles.background, styles.centered]}>
              <Route exact Path="/" component={Home} />
              <BottomFab />
            </View>
          </SafeAreaView>
        </NativeRouter>
      </PaperProvider>
    );
  }
}
