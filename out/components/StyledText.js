import React from 'react';
import { Text } from 'react-native';
export class MonoText extends React.Component {
    render() {
        return React.createElement(Text, Object.assign({}, this.props, { style: [this.props.style, { fontFamily: 'space-mono' }] }));
    }
}
//# sourceMappingURL=StyledText.js.map