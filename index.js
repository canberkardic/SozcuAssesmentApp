/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// In index.js of a new project
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/screens/ListScreen';
import ListScreen from './src/screens/ListScreen';



AppRegistry.registerComponent(appName, () => ListScreen);

Navigation.registerComponent('Home', () => ListScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home'
            }
          }
        ]
      }
    }
  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});