import { StackNavigator } from "react-navigation";

import { ManageFriendsScreen } from "../screens/manage_friends_screen";

export const FriendsNavigation = StackNavigator(
  {
    ManageFriends: {
      screen: ManageFriendsScreen,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);
