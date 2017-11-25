// MIT License

// Copyright (c) 2016 Halil Bilir

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import React from "react";
import PropTypes from "prop-types";
import {
  Animated,
  TextInput,
  TouchableWithoutFeedback,
  View,
  StyleSheet
} from "react-native";

import BaseInput from "./BaseInput";

const LABEL_HEIGHT = 24;
const PADDING = 16;

export default class Madoka extends BaseInput {
  static propTypes = {
    /*
     * this is applied as active border and label color
     */
    borderColor: PropTypes.string,
    height: PropTypes.number
  };

  static defaultProps = {
    borderColor: "#7A7593",
    animationDuration: 250,
    height: 48
  };

  render() {
    const {
      label,
      style: containerStyle,
      height: inputHeight,
      inputStyle,
      labelStyle,
      borderColor
    } = this.props;
    const { width, focusedAnim, value } = this.state;

    return (
      <View
        style={[containerStyle, { height: inputHeight + LABEL_HEIGHT + 8 }]}
        onLayout={this._onLayout}
      >
        <View
          style={[styles.inputContainer, { borderBottomColor: borderColor }]}
        >
          <TextInput
            ref="input"
            {...this.props}
            style={[
              styles.textInput,
              inputStyle,
              {
                width,
                height: inputHeight
              }
            ]}
            value={value}
            onBlur={this._onBlur}
            onChange={this._onChange}
            onFocus={this._onFocus}
            underlineColorAndroid={"transparent"}
          />
          {/* right border */}
          <Animated.View
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: 2,
              height: focusedAnim.interpolate({
                inputRange: [0, 0.2, 1],
                outputRange: [0, inputHeight, inputHeight]
              }),
              backgroundColor: borderColor
            }}
          />
          {/* top border */}
          <Animated.View
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              height: 2,
              width: focusedAnim.interpolate({
                inputRange: [0, 0.2, 0.8, 1],
                outputRange: [0, 0, width, width]
              }),
              backgroundColor: borderColor
            }}
          />
          {/* left border */}
          <Animated.View
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 2,
              height: focusedAnim.interpolate({
                inputRange: [0, 0.8, 1],
                outputRange: [0, 0, inputHeight]
              }),
              backgroundColor: borderColor
            }}
          />
        </View>
        <TouchableWithoutFeedback onPress={this.focus}>
          <Animated.View
            style={[
              styles.labelContainer,
              {
                width,
                height: LABEL_HEIGHT,
                bottom: focusedAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [LABEL_HEIGHT + PADDING, 0]
                })
              }
            ]}
          >
            <Animated.Text
              style={[
                styles.label,
                labelStyle,
                {
                  fontSize: focusedAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [18, 14]
                  })
                }
              ]}
            >
              {label}
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 2
  },
  labelContainer: {
    position: "absolute",
    left: PADDING
  },
  label: {
    backgroundColor: "transparent",
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "#6a7989"
  },
  textInput: {
    paddingHorizontal: PADDING,
    paddingVertical: 0,
    color: "black",
    fontSize: 18,
    fontWeight: "bold"
  }
});
