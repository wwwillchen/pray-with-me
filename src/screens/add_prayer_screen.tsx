import * as React from "react";
import { StyleSheet } from "react-native";
import * as ui from "../ui/";

export class AddPrayerScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ui.View style={styles.container}>
        <ui.View
          style={{
            backgroundColor: ui.colors.lightBlue,
            paddingTop: ui.styles.gutter * 2
          }}
        />
        <ui.FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </ui.View>
    );
  }

  renderItem = ({  }: any) => <ui.PrayerCard />;
  keyExtractor = (item: any) => item.toString();
  renderSeparator = () => (
    <ui.View
      style={{
        height: ui.styles.gutter * 1.5,
        backgroundColor: "#eee"
      }}
    />
  );
  renderHeader = () => (
    <ui.Headline
      style={{
        paddingLeft: ui.styles.gutter * 2,
        backgroundColor: ui.colors.lightBlue
      }}
    >
      Add Prayer
    </ui.Headline>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
