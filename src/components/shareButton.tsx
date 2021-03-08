
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Share from 'react-native-share';



export class ShareButton extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    

    render(): JSX.Element {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={{ flex: 1, backgroundColor: 'black' }}>
                <Text>
                    Share
                </Text>
            </TouchableOpacity>
        )
    }


}