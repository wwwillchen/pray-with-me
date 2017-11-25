import * as React from "react";

import * as ui from "../ui/";

import { FontAwesome } from "@expo/vector-icons";

const themeColor = ui.colors.lightBlue;

interface AddPrayerTextScreenProps {}

export class AddPrayerTextScreen extends React.Component<
  {},
  {
    showNextBar: boolean;
    fadeAnimatedValue: ui.Animated.Value;
    yAnimatedValue: ui.Animated.Value;
  }
> {
  constructor(props: AddPrayerTextScreenProps) {
    super(props);
    this.state = {
      showNextBar: true,
      fadeAnimatedValue: new ui.Animated.Value(0),
      yAnimatedValue: new ui.Animated.Value(-50)
    };
  }
  render() {
    ui.StatusBar.setBarStyle("light-content");
    return (
      <ui.View style={styles.container}>
        <ui.ThemedStatusBar themeColor={themeColor} />
        <ui.ScrollView
          contentContainerStyle={{ backgroundColor: themeColor }}
          contentInset={{ top: -ui.styles.headerSpacerHeight }}
          contentOffset={{ y: ui.styles.headerSpacerHeight, x: 0 }}
          style={{ backgroundColor: ui.colors.lightGray }}
        >
          <ui.Header title={"Write Prayer"} themeColor={themeColor} />
          <ui.View
            style={{
              padding: ui.styles.gutter,
              backgroundColor: "white",
              height:
                ui.layout.window.height -
                ui.styles.headerSpacerHeight +
                ui.styles.headerContentHeight
            }}
          >
            <ui.AnimatedTextInput
              autoCapitalize={"none"}
              autoCorrect={false}
              onChangeText={this.setText}
              label={"Pray for Billy that..."}
              style={{
                marginHorizontal: ui.styles.gutter,
                marginTop: ui.styles.gutter
              }}
              borderColor={themeColor}
              labelStyle={{ color: themeColor, fontFamily: "noto" }}
              inputStyle={{
                color: ui.styles.text,
                fontSize: 16,
                fontWeight: "normal"
              }}
              multiline={true}
              height={ui.layout.window.height * 3 / 5}
            />
          </ui.View>
        </ui.ScrollView>
      </ui.View>
    );
  }

  setText = () => {};
}

const styles = ui.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor
  }
});
