import * as React from 'react';
import { Text, View } from 'react-native';
import WebView from 'react-native-webview';


export class WebviewScreen extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        console.log(props);
    }

    render(): JSX.Element {
        return (
            <View style={{ flex: 1 }}>
                <WebView source={{ uri: `${this.props.url}?amp` }} />
            </View>
        )
    }
}