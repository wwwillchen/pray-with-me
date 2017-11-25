import * as React from "react";

import * as ui from "../base/";

export const RowSeparator = () => (
  <ui.View
    style={{
      height: 1.5,
      backgroundColor: ui.colors.lightGray,
    }}
  />
);

interface RowProps {
  children: JSX.Element | JSX.Element[];
}

export const Row = (props: RowProps) => (
  <ui.View style={{ padding: ui.styles.gutter, flexDirection: "row" }}>
    {props.children}
  </ui.View>
);
