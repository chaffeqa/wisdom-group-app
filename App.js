import React from "react"
import { Constants, KeepAwake } from "expo"
import {
  Provider as PaperProvider,
  DefaultTheme,
} from "react-native-paper"

import AppRN from "./src/client/AppRN"
// import AppRR from "./src/client/AppRR"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "white"
    // accent: 'yellow',
  }
}


class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <AppRN />
        <KeepAwake />
      </PaperProvider>
    )
  }
}

export default App
