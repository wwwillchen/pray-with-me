import { StackNavigator } from "react-navigation";

import { AddPrayerTargetScreen } from "../screens/add_prayer_target_screen";
import { AddPrayerTextScreen } from "../screens/add_prayer_text_screen";
import { AddPrayerShareScreen } from "../screens/add_prayer_share_screen";

export const AddPrayerNavigation = StackNavigator(
  {
    AddPrayerShare: {
      screen: AddPrayerShareScreen,
    },
    AddPrayerTarget: {
      screen: AddPrayerTargetScreen,
    },
    AddPrayerText: {
      screen: AddPrayerTextScreen,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);
