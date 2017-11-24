import * as React from "react";

import * as ui from "../base";

interface HeaderProps {
  themeColor: string;
  title: string;
}

export const Header = (props: HeaderProps) => (
  <ui.View
    style={{
      backgroundColor: props.themeColor,
      height: ui.styles.headerSpacerHeight + ui.styles.headerContentHeight,
      flex: 1,
      justifyContent: "flex-end"
    }}
  >
    <ui.Headline>{props.title}</ui.Headline>
  </ui.View>
);
