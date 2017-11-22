var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Constants, Permissions, Notifications } from 'expo';
// Example server, implemented in Rails: https://git.io/vKHKv
const PUSH_ENDPOINT = 'https://expo-push-server.herokuapp.com/tokens';
export default (function registerForPushNotificationsAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        // Remote notifications do not work in simulators, only on device
        if (!Constants.isDevice) {
            return;
        }
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        let { status } = yield Permissions.askAsync(Permissions.NOTIFICATIONS);
        // Stop here if the user did not grant permissions
        if (status !== 'granted') {
            return;
        }
        // Get the token that uniquely identifies this device
        let token = yield Notifications.getExpoPushTokenAsync();
        // POST the token to our backend so we can use it to send pushes from there
        return fetch(PUSH_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: {
                    value: token,
                },
            }),
        });
    });
});
//# sourceMappingURL=registerForPushNotificationsAsync.js.map