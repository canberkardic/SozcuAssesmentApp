import * as React from 'react';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import WebView from 'react-native-webview';
import { ShareButton } from '../components/shareButton';
import { ShareKey, TopbarKey } from '../navigation/navigationKeys';
import Share from 'react-native-share';


export class WebviewScreen extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        Navigation.events().bindComponent(this);

    }

    static get options() {
        return {
            topBar: {
                visible: true,
                drawBehind: false,
                animate: false,
                hideOnScroll: false,
                noBorder: false,
                borderHeight: 0,
                backButton: {
                    visible: true,
                    showTitle: false
                },
                title: {
                    fontSize: 25,
                    fontWeight: 'bold',
                    component: {
                        name: TopbarKey,
                    },
                    alignment: 'center',
                },
                rightButtons: [
                    {
                        id: ShareKey,
                        text: 'Share',
                    }
                ]
            },
        }

    }

    navigationButtonPressed({ buttonId }) {
        try {
            if (buttonId == "ShareKey") {
                const options = {
                    title: 'Share file',
                    failOnCancel: false,
                    url: this.props.url
                };
                Share.open(options)
                    .then((res) => { console.log(res) })
                    .catch((err) => { err && alert("An Error Occured"); });
            }
        } catch (error) {
            //
        }
    }


    render(): JSX.Element {
        return (
            <View style={{ flex: 1 }}>
                <WebView
                    originWhitelist={['https://*', 'http://*']}
                    mediaPlaybackRequiresUserAction={true}
                    source={{ uri: `${this.props.url}?amp` }}
                />
            </View>
        )
    }
}