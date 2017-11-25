import * as React from "react";

import * as ui from "../base/";
import CheckBox from "react-native-check-box";

interface CheckboxFriendRowProps {
  name: string;
  handleFriendClick: any;
  themeColor: string;
}

export const CheckboxFriendRow = (props: CheckboxFriendRowProps) => (
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

interface BasicFriendRowProps {
  name: string;
  handleFriendClick: any;
}

export const BasicFriendRow = (props: BasicFriendRowProps) => (
  <ui.TouchableOpacity
    activeOpacity={0.8}
    onPress={props.handleFriendClick}
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "white",
      padding: ui.styles.gutter / 3,
    }}
  >
    <ui.Text style={{ flex: 1, padding: ui.styles.gutter }}>
      {props.name}
    </ui.Text>
  </ui.TouchableOpacity>
);
