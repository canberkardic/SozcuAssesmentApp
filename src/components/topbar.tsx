import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';


export const Topbar = ({ title }) => {
    return (
        <View>
            <Text style={{ fontSize: 24, fontWeight: "700" }}>
                News App
            </Text>
        </View>
    );
};