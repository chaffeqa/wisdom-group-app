module.exports = {
  "extends": "react-app",
  env: {
    "react-native/react-native": true
  },
  plugins: [
    "react-native"
  ],
  rules: {
    "no-unused-vars":["off", {"args": "all"}],
    "jsx-a11y/href-no-hash": 0
  }
};
