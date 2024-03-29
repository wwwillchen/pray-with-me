import { Notifications } from "expo";
import * as React from "react";
import { StackNavigator } from "react-navigation";

import MainTabNavigator from "./main_tab_navigator";
import registerForPushNotificationsAsync from "../native/register_for_push_notifications_async";

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator
    }
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: "normal"
      }
    })
  } as any
);

export default class RootNavigator extends React.Component {
  _notificationSubscription: any;
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = ({ origin, data }: any) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`
    );
  };
}
