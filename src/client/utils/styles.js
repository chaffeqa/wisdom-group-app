import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff"
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  container: {
    flex: 1,
    width: "100%"
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
  },
  h2: {
    width: "100%",
    paddingBottom: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,0.6)"
  },
  h2Text: {
    fontSize: 17,
    fontWeight: "bold"
  },
  bgClear: {
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 3,
    marginTop: 8,
    padding: 10
  }
});

export default styles;
