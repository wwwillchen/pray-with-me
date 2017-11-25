import * as React from "react";

import * as ui from "../ui/";
import * as d from "../domain";

const themeColor = ui.colors.lightBlue;

interface AddPrayerTargetScreenProps extends d.NavigationProps {}

export class AddPrayerTargetScreen extends React.Component<
  AddPrayerTargetScreenProps,
  {
    showNextBar: boolean;
    fadeAnimatedValue: ui.Animated.Value;
    yAnimatedValue: ui.Animated.Value;
  }
> {
  constructor(props: AddPrayerTargetScreenProps) {
    super(props);
    this.state = {
      showNextBar: true,
      fadeAnimatedValue: new ui.Animated.Value(0),
      yAnimatedValue: new ui.Animated.Value(-50)
    };
    this.next();
  }
  render() {
    ui.StatusBar.setBarStyle("light-content");
    return (
      <ui.View style={styles.container}>
        <ui.ThemedStatusBar themeColor={themeColor} />

        <ui.FlatList
          renderItem={this.renderItem}
          ListHeaderComponent={this.renderHeader}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={this.keyExtractor}
          contentContainerStyle={{ backgroundColor: themeColor }}
          contentInset={{ top: -ui.styles.headerSpacerHeight }}
          contentOffset={{ y: ui.styles.headerSpacerHeight, x: 0 }}
          style={{ backgroundColor: ui.colors.lightGray }}
          data={[
            "Stephanie Allo",
            "Willard Vaudeville",
            "Abraham Lincoln",
            "Stephanie Allo",
            "Willard Vaudeville",
            "Abraham Lincoln",
            "Stephanie Allo",
            "Willard Vaudeville",
            "Abraham Lincoln",
            "George Washington"
          ]}
        />
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
              Sidhant Kanplease
            </ui.BoldText>
            <ui.Icon name={"arrow-right"} size={32} color={"white"} />
          </ui.Animated.View>
        </ui.TouchableOpacity>
      </ui.View>
    );
  }

  next = () => {
    this.props.navigation.navigate("AddPrayerText");
  };

  renderHeader = () => (
    <ui.Header title={"Pray for..."} themeColor={themeColor} />
  );
  renderSeparator = () => (
    <ui.View
      style={{
        height: 1.5,
        backgroundColor: ui.colors.lightGray
      }}
    />
  );
  renderItem = ({ item }: any) => (
    <FriendRow name={item} handleFriendClick={this.handleFriendClick} />
  );
  keyExtractor = (item: any) => item + Math.random();
  handleFriendClick = () => {
    this.setState({
      showNextBar: !this.state.showNextBar
    });
    ui.Animated.timing(
      // Animate over time
      this.state.yAnimatedValue, // The animated value to drive
      {
        toValue: this.state.showNextBar ? -50 : 0, // Animate to opacity: 1 (opaque)
        duration: 300 // Make it take a while
      }
    ).start();
    ui.Animated.timing(
      // Animate over time
      this.state.fadeAnimatedValue, // The animated value to drive
      {
        toValue: this.state.showNextBar ? 0 : 1, // Animate to opacity: 1 (opaque)
        duration: 300 // Make it take a while
      }
    ).start();
  };
}

interface FriendProps {
  name: string;
  handleFriendClick: any;
}

const FriendRow = (props: FriendProps) => (
  <ui.View
    style={{
      padding: ui.styles.gutter,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "white"
    }}
  >
    <ui.CheckBox
      style={{ flex: 1, padding: ui.styles.gutter / 2 }}
      leftTextStyle={{ fontFamily: "noto" }}
      leftText={props.name}
      onClick={props.handleFriendClick}
      checkBoxColor={themeColor}
    />
  </ui.View>
);

const styles = ui.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor
  }
});
