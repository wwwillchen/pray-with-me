var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font } from "expo";
import { Ionicons } from "@expo/vector-icons";
import RootNavigation from "./navigation/RootNavigation";
export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isLoadingComplete: false
        };
        this._loadResourcesAsync = () => __awaiter(this, void 0, void 0, function* () {
            yield Promise.all([
                Asset.loadAsync([
                    require("./assets/images/robot-dev.png"),
                    require("./assets/images/robot-prod.png")
                ]),
                Font.loadAsync(Object.assign({}, Ionicons.font, { 
                    // We include SpaceMono because we use it in HomeScreen.js. Feel free
                    // to remove this if you are not using it in your app
                    "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf") }))
            ]);
        });
        this._handleLoadingError = (error) => {
            // In this case, you might want to report the error to your error
            // reporting service, for example Sentry
            console.warn(error);
        };
        this._handleFinishLoading = () => {
            this.setState({ isLoadingComplete: true });
        };
    }
    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (React.createElement(AppLoading, { startAsync: this._loadResourcesAsync, onError: this._handleLoadingError, onFinish: this._handleFinishLoading }));
        }
        else {
            return (React.createElement(View, { style: styles.container },
                Platform.OS === "ios" && React.createElement(StatusBar, { barStyle: "default" }),
                Platform.OS === "android" && (React.createElement(View, { style: styles.statusBarUnderlay })),
                React.createElement(RootNavigation, null)));
        }
    }
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
//# sourceMappingURL=index.js.map