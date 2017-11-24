import * as React from "react";

import * as ui from "../base";

export const PrayerCard = () => (
  <ui.View
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
  </ui.View>
);

export const PrayerCardSeparator = () => (
  <ui.View
    style={{
      height: ui.styles.gutter * 1.5,
      backgroundColor: ui.colors.lightGray
    }}
  />
);

interface ThemedStatusBarProps {
  themeColor: string;
}

export const ThemedStatusBar = (props: ThemedStatusBarProps) => (
  <ui.View>
    <ui.StatusBar barStyle="light-content" />
    <ui.View
      style={{
        backgroundColor: props.themeColor,
        paddingTop: ui.styles.gutter * 2
      }}
    />
  </ui.View>
);
