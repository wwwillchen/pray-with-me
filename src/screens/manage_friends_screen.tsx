import * as React from "react";

import * as ui from "../ui/";
import * as d from "../domain";

const themeColor = ui.colors.yellow;

interface ManageFriendsScreenProps extends d.NavigationProps {}

export class ManageFriendsScreen extends React.Component<
  ManageFriendsScreenProps,
  {
    showNextBar: boolean;
    fadeAnimatedValue: ui.Animated.Value;
    yAnimatedValue: ui.Animated.Value;
    showModal: boolean;
  }
> {
  constructor(props: ManageFriendsScreenProps) {
    super(props);
    this.state = {
      showNextBar: false,
      fadeAnimatedValue: new ui.Animated.Value(0),
      yAnimatedValue: new ui.Animated.Value(-50),
      showModal: false,
    };
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
          ]}
        />
      </ui.View>
    );
  }

  next = () => {};

  renderHeader = () => <ui.Header title={"Friends"} themeColor={themeColor} />;
  renderSeparator = () => (
    <ui.View
      style={{
        height: 1.5,
        backgroundColor: ui.colors.lightGray,
      }}
    />
  );
  renderItem = ({ item }: any) => (
    <ui.BasicFriendRow name={item} handleFriendClick={this.handleFriendClick} />
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
