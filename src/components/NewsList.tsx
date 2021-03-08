import * as React from 'react';
import { View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { FeedElement } from '../services/getData';
import NewsItem from './NewsItem';


type Props = {
    componentId: string,
    feedData: Array<FeedElement>
}

const NewsList = (props) => {
    const { componentId, feedData } = props;


    return (

        <SafeAreaView style={styles.safeArea} >

            <View style={styles.body}>
                <FlatList
                    data={feedData}
                    keyExtractor={(item, index) => (item.title + index).toString()}
                    renderItem={({ item, index }) => (
                        <NewsItem item={item} componentId={componentId} />
                    )}
                />
            </View>
        </SafeAreaView>
    )
};
export default NewsList;

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

