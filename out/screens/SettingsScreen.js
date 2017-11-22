import React from 'react';
import { ExpoConfigView } from '@expo/samples';
export default class SettingsScreen extends React.Component {
    render() {
        /* Go ahead and delete ExpoConfigView and replace it with your
         * content, we just wanted to give you a quick view of your config */
        return React.createElement(ExpoConfigView, null);
    }
}
SettingsScreen.navigationOptions = {
    title: 'app.json',
};
//# sourceMappingURL=SettingsScreen.js.map