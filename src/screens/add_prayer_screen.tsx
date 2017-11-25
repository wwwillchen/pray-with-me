import * as React from "react";

import * as ui from "../ui/";

const themeColor = ui.colors.lightBlue;

export class AddPrayerScreen extends React.Component {
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
          <ui.Header title={"Pray for..."} themeColor={themeColor} />
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
            <ui.FlatList
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
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
        </ui.ScrollView>
      </ui.View>
    );
  }

  renderItem = ({ item }: any) => <FriendRow name={item} />;
  keyExtractor = (item: any) => item + Math.random();
}

interface FriendProps {
  name: string;
}

const FriendRow = (props: FriendProps) => (
  <ui.View style={{ padding: ui.styles.gutter }}>
    <ui.Text>{props.name}</ui.Text>
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
