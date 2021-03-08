import { Navigation } from 'react-native-navigation';
import {TopbarKey} from './navigationKeys';

export const setDefaultOptions = () =>
    Navigation.setDefaultOptions({
        topBar: {
            visible: true,
            drawBehind: false,
            animate: false,
            hideOnScroll: false,
            noBorder: false,
            borderHeight: 0,
            backButton: {
                visible: true,
                showTitle:false
            },
            title: {
                fontSize: 25,
                fontWeight: 'bold',
                component : {
                    name : TopbarKey
                },
                alignment: 'center',
            },
        },
        statusBar: {
            style: 'dark',
            drawBehind: false,
            visible: true,
        },
    });