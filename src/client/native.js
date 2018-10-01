import React from 'react';
import T from 'prop-types';
import { AppLoading, Permissions, Constants, KeepAwake } from 'expo';
import { BackHandler, View, UIManager } from 'react-native';
import {
  compose,
  withState,
  withHandlers,
  lifecycle,
} from 'recompose';
import { NavigationActions } from 'react-navigation';
import { globalStyles } from './styles';
// import Navigator from './navigation';
import {
  Provider as PaperProvider,
  DefaultTheme,
} from "react-native-paper"

// import App from "./src/client"
// import AppRR from "./src/client/AppRR"
import Navigator from "./AppRN"

const navigationPersistenceKey = __DEV__ ? "NavigationStateDEV1" : null

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "white"
    // accent: 'yellow',
  }
}

UIManager.setLayoutAnimationEnabledExperimental &&   //eslint-disable-line
  UIManager.setLayoutAnimationEnabledExperimental(true);

const App = ({
  showLoading,
  setLoadingStatus,
  asyncJob,
}) => {
  if (showLoading) {
    return (
      <AppLoading
        startAsync={asyncJob}
        onFinish={() => setLoadingStatus(false)}
        onError={console.warn} // eslint-disable-line
      />
    );
  }

  return (
    <PaperProvider theme={theme}>
      <View style={globalStyles.fillAll}>
        <Navigator persistenceKey={navigationPersistenceKey} />
      </View>
    </PaperProvider>
  );
};

App.propTypes = {
  showLoading: T.bool,
  setLoadingStatus: T.func,
  asyncJob: T.func,
};


const enhance = compose(
  withState('showLoading', 'setLoadingStatus', true),
  withHandlers({
    asyncJob: () => async () => {
      await Permissions.askAsync(Permissions.AUDIO_RECORDING);
      await Permissions.askAsync(Permissions.CAMERA);
    },
  }),
);

export default enhance(App);
