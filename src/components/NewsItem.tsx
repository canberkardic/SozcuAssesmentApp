import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { TagsKey, WebviewKey } from '../navigation/navigationKeys';

const NewsItem = (props) => {

    const { componentId, item } = props;

    const onTagPressed = (item) => {
        Navigation.push(componentId, {
            component: {
                name: TagsKey,
                passProps: {
                    componentId: componentId,
                    item : item,
                },
            }
        })
    };

    return (

        <View style={styles.listItem}>
            <TouchableOpacity
                onPress={() => {
                    Navigation.push(componentId, {
                        component: {
                            name: WebviewKey,
                            passProps: {
                                url: item.url,
                            },
                        }
                    })
                }}>
                <View style={styles.container}>
                    <Image source={{ uri: item.media }}
                        style={styles.tinyImage} />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.tagsContainer}>
                {
                    item.tags?.map((t, i) =>
                        <View key={i}>
                            <TouchableOpacity
                                onPress={() => onTagPressed(t)}
                                style={styles.tagItem}>
                                <Text>
                                    {t}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        </View>
    )
};
export default NewsItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#ecf0f1',
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItem: {
        flex: 1,
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    tinyImage: {
        width: 50,
        height: 50,
    },
    title: {
        width: Dimensions.get('screen').width * 0.7
    },

    tagsContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 5,
        marginTop: 10,
        flexWrap: 'wrap',
    },
    tagItem: {
        backgroundColor: '#d5f6d3',
        marginLeft: 3,
        padding: 2,
        borderRadius: 5,
        marginTop:2
    }
})

