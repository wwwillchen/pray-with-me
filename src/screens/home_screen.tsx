import * as React from "react";
import { StyleSheet } from "react-native";
import * as ui from "../ui/";

ui.StatusBar.setBarStyle("light-content");

const themeColor = ui.styles.primaryColor;

export class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ui.View style={styles.container}>
        <ui.ThemedStatusBar themeColor={themeColor} />
        <ui.FlatList
          data={[1, 2, 3]}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          contentContainerStyle={{ backgroundColor: themeColor }}
          contentInset={{ top: -ui.styles.headerHeight }}
          contentOffset={{ y: ui.styles.headerHeight, x: 0 }}
          style={{ backgroundColor: ui.colors.lightGray }}
        />
        <ui.View
          style={{
            backgroundColor: ui.colors.lightGray,
            bottom: 0,
            height: 200,
            position: "absolute",
            zIndex: 9
          }}
        />
      </ui.View>
    );
  }
  renderItem = ({  }: any) => <ui.PrayerCard />;
  keyExtractor = (item: any) => item.toString();
  renderSeparator = () => <ui.PrayerCardSeparator />;
  renderHeader = () => (
    <ui.Header title={"Pray With Me"} themeColor={themeColor} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor
  }
});
