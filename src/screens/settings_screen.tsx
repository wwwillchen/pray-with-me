import * as React from "react";

import * as ui from "../ui/";
import * as d from "../domain";

const themeColor = ui.colors.darkGray;

interface SettingsScreenProps extends d.NavigationProps {}

export class SettingsScreen extends React.Component<SettingsScreenProps, {}> {
  constructor(props: SettingsScreenProps) {
    super(props);
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
          <ui.Header title={"Settings"} themeColor={themeColor} />
          <ui.View
            style={{
              padding: ui.styles.gutter,
              backgroundColor: "white",
              minHeight:
                ui.layout.window.height -
                ui.styles.headerSpacerHeight +
                ui.styles.headerContentHeight,
            }}
          >
            <ui.Text>User: willchen@praywithme</ui.Text>
            <ui.TouchableOpacity>
              <ui.Text>Sign out</ui.Text>
            </ui.TouchableOpacity>
          </ui.View>
        </ui.ScrollView>
      </ui.View>
    );
  }
}

const styles = ui.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor,
  },
});
