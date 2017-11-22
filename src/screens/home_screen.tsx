import * as React from "react";
import { Platform, StyleSheet, View } from "react-native";
import * as ui from "../ui/";

const PrayerCard = () => (
  <View
    style={{
      backgroundColor: "#fff",
      padding: ui.styles.gutter * 2,
      borderRadius: 4
    }}
  >
    <ui.Text style={{ paddingBottom: 4 }}>
      Pray for <ui.BoldText>Timothy Keller</ui.BoldText> to be comforted as he
      undergoes uncertainty at work with regards to the future.
    </ui.Text>
    <ui.Text style={{ paddingBottom: 4 }}>
      31 prayers from <ui.BoldText>you</ui.BoldText>,{" "}
      <ui.BoldText>Jean Jacques</ui.BoldText>,{" "}
      <ui.BoldText>Andy Lang</ui.BoldText>, and{" "}
      <ui.BoldText>10 others</ui.BoldText>
    </ui.Text>
    <ui.Text style={{ fontSize: 11 }}>Mary Magdalene wrote 9 days ago</ui.Text>
    <ui.View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: ui.styles.gutter
      }}
    >
      <ui.View style={{ flexDirection: "row" }}>
        <ui.Icon name={"upload-cloud"} size={24} style={{ paddingRight: 9 }} />
        <ui.Text>Pray</ui.Text>
      </ui.View>
      <ui.View style={{ flexDirection: "row" }}>
        <ui.Icon
          name={"message-square"}
          size={24}
          style={{ paddingRight: 9 }}
        />
        <ui.Text>7 Comments</ui.Text>
      </ui.View>
    </ui.View>
  </View>
);

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ui.FlatList
          data={[1, 2, 3]}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }

  renderItem = ({  }: any) => <PrayerCard />;
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
        paddingLeft: ui.styles.gutter * 2
      }}
    >
      Pray With Me
    </ui.Headline>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    paddingTop: 30
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      } as any
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
