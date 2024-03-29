import * as React from "react";
import { Platform, StatusBar, StyleSheet } from "react-native";
import { AppLoading, Asset, Font } from "expo";
import { MaterialIcons } from "@expo/vector-icons";

import * as ui from "./ui";

import RootNavigation from "./navigation/root_navigation";

const unsafeConsole = console as any;
unsafeConsole.ignoredYellowBox = [
  "Warning: Can only update a mounted or mounting component."
];
export default class App extends React.Component<any, any> {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <ui.View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          {Platform.OS === "android" && (
            <ui.View style={styles.statusBarUnderlay} />
          )}
          <RootNavigation />
        </ui.View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([
        require("../assets/images/robot-dev.png"),
        require("../assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...MaterialIcons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        montserrat: require("../assets/fonts/Montserrat-Medium.ttf"),
        noto: require("../assets/fonts/NotoSans-Regular.ttf"),
        "noto-bold": require("../assets/fonts/NotoSans-Bold.ttf")
      })
    ]);
  };

  _handleLoadingError = (error: Error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: "rgba(0,0,0,0.2)"
  }
});
