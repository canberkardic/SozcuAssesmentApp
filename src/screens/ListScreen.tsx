import React, { useEffect } from 'react';


import {
    View,
    StyleSheet,
    SafeAreaView,
    ActivityIndicator,
    FlatList
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import ErrorComponent from '../components/ErrorComponent';
import NewsItem from '../components/NewsItem';
import { TopbarKey } from '../navigation/navigationKeys';
import { FeedElement, FeedResponse, getAllData } from '../services/getData';

type Props = {
    componentId: string
}

type State = {
    feedData?: Array<FeedElement>;
    error?: boolean
};

export default class ListScreen extends React.Component<Props, State> {

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

                ]

            },
        }

    }


    componentDidMount(): void {
        getAllData()
            .then((res: FeedResponse) => {
                let data: Array<FeedElement> = res.data;

                this.setState({
                    feedData: data
                });

            })
            .catch((result: FeedResponse) => {
                this.setState({
                    feedData: undefined,
                    error: result.success
                })
            })

    }

    render(): JSX.Element {
        if (this.state.error !== undefined) {
            return (
                <ErrorComponent />
            )
        }

        if (this.state.feedData == undefined) {
            return (
                <SafeAreaView style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ActivityIndicator color="green"></ActivityIndicator>
                </SafeAreaView>
            )
        }


        return (
            <SafeAreaView style={styles.safeArea} >

                <View style={styles.body}>
                    <FlatList
                        data={this.state.feedData}
                        keyExtractor={(item, index) => (item.title + index).toString()}
                        renderItem={({ item, index }) => (
                            <NewsItem item={item} componentId={this.props.componentId} />
                        )}
                    />
                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white'
    },
    body: {
        flex: 1,
        backgroundColor: 'white'
    },
})