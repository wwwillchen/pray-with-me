import * as React from "react";
import { TabNavigator, TabBarBottom } from "react-navigation";

import * as ui from "../ui/";

import { HomeScreen } from "../screens/home_screen";
import { MyPrayersScreen } from "../screens/my_prayers_screen";
import { AddPrayerScreen } from "../screens/add_prayer_screen";
import SettingsScreen from "../screens/SettingsScreen";

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    MyPrayers: {
      screen: MyPrayersScreen
    },
    Add: {
      screen: AddPrayerScreen
    },
    Friends: {
      screen: AddPrayerScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    // initialRouteName: "MyPrayers",
    navigationOptions: ({ navigation }: any) => ({
      tabBarIcon: ({ focused }: any) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case "Home":
            iconName = "home";
            break;
          case "MyPrayers":
            iconName = "list";
            break;
          case "Add":
            iconName = "plus";
            break;
          case "Friends":
            iconName = "users";
            break;
          case "Settings":
            iconName = "settings";
            break;
        }
        return (
          <ui.Icon
            name={iconName}
            size={32}
            style={{ marginBottom: -5 }}
            color={
              focused ? ui.styles.tabIconSelected : ui.styles.tabIconDefault
            }
          />
        );
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "#fafafa",
        marginBottom: 4,
        borderTopColor: "#fff"
      }
    }
  } as any
);
