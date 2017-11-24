import * as React from "react";

import * as ui from "../ui/";

const themeColor = ui.colors.orange;

export class MyPrayersScreen extends React.Component {
  render() {
    ui.StatusBar.setBarStyle("light-content");
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
      </ui.View>
    );
  }
  renderItem = ({  }: any) => <ui.PrayerCard />;
  keyExtractor = (item: any) => item.toString();
  renderSeparator = () => <ui.PrayerCardSeparator />;
  renderHeader = () => (
    <ui.Header title={"My Prayers"} themeColor={themeColor} />
  );
}

const styles = ui.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor
  }
});
