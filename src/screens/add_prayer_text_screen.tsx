import * as React from "react";

import * as ui from "../ui/";
import * as d from "../domain";

const themeColor = ui.colors.lightBlue;

interface AddPrayerTextScreenProps extends d.NavigationProps {}

export class AddPrayerTextScreen extends React.Component<
  AddPrayerTextScreenProps,
  {
    showNextBar: boolean;
    fadeAnimatedValue: ui.Animated.Value;
    yAnimatedValue: ui.Animated.Value;
  }
> {
  constructor(props: AddPrayerTextScreenProps) {
    super(props);
    this.state = {
      showNextBar: false,
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
            <ui.FloatingLabelTextInput
              noBorder
              themeColor={themeColor}
              placeholder={"Pray for Billy that..."}
              onChangeTextValue={this.setText}
              // onFocus={@myFocusFunction}
              // onBlur={@onBlurFunction}
            />
          </ui.View>

          <ui.TouchableOpacity onPress={this.next}>
            <ui.Animated.View
              style={{
                position: "absolute",
                bottom: this.state.yAnimatedValue,
                height: 50,
                width: ui.layout.window.width,
                backgroundColor: themeColor,
                padding: ui.styles.gutter,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                opacity: this.state.fadeAnimatedValue
              }}
            >
              <ui.BoldText style={{ color: "white", fontSize: 14 }}>
                Next
              </ui.BoldText>
              <ui.Icon name={"arrow-right"} size={32} color={"white"} />
            </ui.Animated.View>
          </ui.TouchableOpacity>
        </ui.ScrollView>
      </ui.View>
    );
  }

  setText = (text: string) => {
    if (text.length > 3 && !this.state.showNextBar) {
      this.setState({
        showNextBar: true
      });
      ui.Animated.timing(this.state.yAnimatedValue, {
        toValue: 0,
        duration: 300
      }).start();
      ui.Animated.timing(this.state.fadeAnimatedValue, {
        toValue: 1,
        duration: 300
      }).start();
    }
    if (text.length === 0 && this.state.showNextBar) {
      this.setState({
        showNextBar: false
      });
      ui.Animated.timing(this.state.yAnimatedValue, {
        toValue: -50,
        duration: 300
      }).start();
      ui.Animated.timing(this.state.fadeAnimatedValue, {
        toValue: 0,
        duration: 300
      }).start();
    }
  };
  next = () => {
    this.props.navigation.navigate("AddPrayerShare");
  };
}

const styles = ui.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor
  }
});
