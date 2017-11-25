import * as React from "react";

import * as ui from "../base/";
import CheckBox from "react-native-check-box";

interface FriendProps {
  name: string;
  handleFriendClick: any;
  themeColor: string;
}

export const FriendRow = (props: FriendProps) => (
  <ui.View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "white",
      padding: ui.styles.gutter / 3,
    }}
  >
    <CheckBox
      style={{ flex: 1, padding: ui.styles.gutter }}
      leftTextStyle={{ fontFamily: "noto" }}
      leftText={props.name}
      onClick={props.handleFriendClick}
      checkBoxColor={props.themeColor}
    />
  </ui.View>
);
