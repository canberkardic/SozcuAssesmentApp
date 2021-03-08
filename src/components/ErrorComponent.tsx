import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorComponent = (props) => {
    return (
        <View style={styles.container}>
            <Text>
                An Error Occured!
            </Text>
        </View>
    )
};
export default ErrorComponent;

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

