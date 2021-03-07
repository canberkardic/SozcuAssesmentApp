import React, { useEffect } from 'react';


import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { ListScreenKey } from '../navigation/navigationKeys';
import { FeedElement, FeedResponse, getAllData } from '../services/getData';

type Props = {
    componentId : string
}

type State = {
    data?: Array<FeedElement>;
    error?: string
};

export default class ListScreen extends React.Component<any, any> {
    isMounted?: boolean;

    constructor(props: any) {
        super(props);
        this.state = {
            feedData: undefined
        }
        
        Navigation.events().bindComponent(this, ListScreenKey);
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
                    error: result.success
                })
            })

    }

    render(): JSX.Element {
        if (this.state.error !== undefined) {
            return (
                <View>
                    <Text>
                        Problem
                    </Text>
                </View>
            )
        }

        if (this.state.feedData == undefined) {
            <SafeAreaView style={{ flex: 1 }}>
                <ActivityIndicator color="blue"></ActivityIndicator>
            </SafeAreaView>
        }


        return (
            <SafeAreaView style={styles.safeArea} >

                <View style={styles.body}>
                    <Text style={styles.heading}>
                        List Items
                        </Text>
                    <FlatList
                        style={styles.listStyle}
                        data={this.state.feedData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                style={styles.listItem}
                                onPress={() => {
                                    console.log("Bana basıldı");
                                }}>
                                <Text>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
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
    heading: {
        fontSize: 20,
        textAlign: 'center'
    },
    listItem: {
        flex: 1,
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    listStyle: {
        flex: 1,
    }
})