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
      yAnimatedValue: new ui.Animated.Value(-50),
    };
    // this.next();
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
            "George Washington",
            "Willard Vaudeville",
            "Abraham Lincoln",
            "Stephanie Allo",
            "Willard Vaudeville",
            "Abraham Lincoln",
            "Stephanie Allo",
            "Willard Vaudeville",
            "Abraham Lincoln",
            "George Washington",
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
              opacity: this.state.fadeAnimatedValue,
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
    <ui.Header title={"Pray For..."} themeColor={themeColor} />
  );
  renderSeparator = () => (
    <ui.View
      style={{
        height: 1.5,
        backgroundColor: ui.colors.lightGray,
      }}
    />
  );
  renderItem = ({ item }: any) => (
    <ui.CheckboxFriendRow
      themeColor={themeColor}
      name={item}
      handleFriendClick={this.handleFriendClick}
    />
  );
  keyExtractor = (item: any) => item + Math.random();
  handleFriendClick = () => {
    this.setState({
      showNextBar: !this.state.showNextBar,
    });
    ui.Animated.timing(this.state.yAnimatedValue, {
      toValue: this.state.showNextBar ? -50 : 0,
      duration: 300,
    }).start();
    ui.Animated.timing(this.state.fadeAnimatedValue, {
      toValue: this.state.showNextBar ? 0 : 1,
      duration: 300,
    }).start();
  };
}

const styles = ui.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor,
  },
});
