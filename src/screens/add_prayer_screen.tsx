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
          <ui.Header title={"Add Prayer"} themeColor={themeColor} />
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
            <ui.Text>Add Prayer</ui.Text>
          </ui.View>
        </ui.ScrollView>
      </ui.View>
    );
  }
}

const styles = ui.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor
  }
});

// import * as React from "react";
// import { StyleSheet } from "react-native";
// import * as ui from "../ui/";

// export class AddPrayerScreen extends React.Component {
//   render() {
//     return (
//       <ui.View style={styles.container}>
//         <ui.View
//           style={{
//             backgroundColor: ui.colors.lightBlue,
//             paddingTop: ui.styles.gutter * 2
//           }}
//         />
//         <ui.FlatList
//           data={[1, 2, 3, 4, 5]}
//           renderItem={this.renderItem}
//           keyExtractor={this.keyExtractor}
//           ItemSeparatorComponent={this.renderSeparator}
//           ListHeaderComponent={this.renderHeader}
//         />
//       </ui.View>
//     );
//   }

//   renderItem = ({  }: any) => <ui.PrayerCard />;
//   keyExtractor = (item: any) => item.toString();
//   renderSeparator = () => (
//     <ui.View
//       style={{
//         height: ui.styles.gutter * 1.5,
//         backgroundColor: "#eee"
//       }}
//     />
//   );
//   renderHeader = () => (
//     <ui.Headline
//       style={{
//         paddingLeft: ui.styles.gutter * 2,
//         backgroundColor: ui.colors.lightBlue
//       }}
//     >
//       Add Prayer
//     </ui.Headline>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });
