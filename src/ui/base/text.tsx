import * as React from "react";
import { Text as RNText, TextProperties } from "react-native";
import { styles } from "./styles";

interface HeadlineProps extends TextProperties {
  children: string;
}

export const Headline = (props: HeadlineProps) => (
  <RNText
    style={[
      {
        fontFamily: "montserrat",
        fontSize: 36,
        color: "#333"
      },
      {
        paddingBottom: styles.gutter,
        paddingLeft: styles.gutter * 2,
        color: "#fff"
      },
      props.style
    ]}
  >
    {props.children}
  </RNText>
);

interface TextProps extends TextProperties {
  children: string | (string | JSX.Element)[];
}

export const Text = (props: TextProps) => (
  <RNText style={[{ fontFamily: "noto" }, props.style]}>
    {props.children}
  </RNText>
);
export const BoldText = (props: TextProps) => (
  <RNText style={[{ fontFamily: "noto-bold" }, props.style]}>
    {props.children}
  </RNText>
);
