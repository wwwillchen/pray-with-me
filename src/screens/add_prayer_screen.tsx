import * as React from "react";

import * as ui from "../ui/";

const themeColor = ui.colors.lightBlue;

export class AddPrayerScreen extends React.Component {
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
      </ui.View>
    );
  }

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
    //
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

{
  /* <ui.AnimatedTextInput
autoCapitalize={"none"}
autoCorrect={false}
onChangeText={this.setTarget}
label={"Pray for who..."}
style={{
  marginHorizontal: ui.styles.gutter * 2,
  marginTop: ui.styles.gutter
}}
borderColor={themeColor}
labelStyle={{ color: themeColor, fontFamily: "noto" }}
inputStyle={{ color: themeColor }}
/> */
}
