import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, FABGroup, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: 'tomato',
    // accent: 'yellow',
  },
};

export default class App extends React.Component {
  state = {
    open: false,
  };
  render() {
    return (
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app (FAB!)!</Text>
          <FABGroup
            open={this.state.open}
            icon={this.state.open ? 'today' : 'add'}
            actions={[
              { icon: 'add', onPress: () => {} },
              { icon: 'star', label: 'Star', onPress: () => {} },
              { icon: 'email', label: 'Email', onPress: () => {} },
              { icon: 'notifications', label: 'Remind', onPress: () => {} },
            ]}
            onStateChange={({ open }) => this.setState({ open })}
            onPress={() => {
              if (this.state.open) {
                // do something if the speed dial is open
              }
            }}
          />
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
