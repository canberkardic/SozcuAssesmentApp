/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

// In index.js of a new project
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/screens/ListScreen';
import ListScreen from './src/screens/ListScreen';
import { registerScreens, setRoot } from './src/navigation';
import { setDefaultOptions } from './src/navigation/defaultNaviOptions';



AppRegistry.registerComponent(appName, () => ListScreen);


registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    //setDefaultOptions();
    setRoot();
});

