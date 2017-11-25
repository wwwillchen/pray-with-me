// import * as React from "react";
import { StackNavigator } from "react-navigation";

import { AddPrayerTargetScreen } from "./add_prayer_target_screen";
import { AddPrayerTextScreen } from "./add_prayer_text_screen";
// // import * as ui from "../ui/";

export const AddPrayerNavigation = StackNavigator(
  {
    AddPrayerTarget: {
      screen: AddPrayerTargetScreen
    },
    AddPrayerText: {
      screen: AddPrayerTextScreen
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);
