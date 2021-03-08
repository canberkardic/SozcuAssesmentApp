import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Navigation } from 'react-native-navigation';
import ErrorComponent from '../components/ErrorComponent';
import NewsList from '../components/NewsList';
import { TopbarKey } from '../navigation/navigationKeys';

export default class TagsScreen extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            feedData: undefined
        }
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
                title: {
                    fontSize: 25,
                    fontWeight: 'bold',
                    component: {
                        name: TopbarKey,
                    },
                    alignment: 'center',
                },
            },
        }
    }

    componentDidMount() {
        AsyncStorage.getItem(this.props.item).then((result) => {
            let parsedData = JSON.parse(result);
            let feedData = parsedData[this.props.item];

            this.setState({
                feedData: feedData,
                error: undefined
            })
        }).catch((e) => {
            this.setState({
                feedData : undefined,
                error : true
            })
        })
    }

    render(): JSX.Element {
        if (this.state.error) {
            return (
                <ErrorComponent />
            )
        }


        return (
            <NewsList
                componentId={this.props.componentId}
                feedData={this.state.feedData}
            />
        )
    }
}

