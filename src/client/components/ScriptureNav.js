import React from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native"

import MaterialIcons from "react-native-vector-icons/MaterialIcons"


class ScriptureNav extends React.PureComponent {
  render() {
    const { currentCategory } = this.props
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
                color: "rgba(255,255,255, 0.8)",
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
    )
  }
}

export default ScriptureNav
