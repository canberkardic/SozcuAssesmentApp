import { Navigation } from 'react-native-navigation';


/**
 * Keys
 */

import { ListScreenKey, TopbarKey, WebviewKey } from './navigationKeys';

/**
 * Screens
 */

import ListScreen from '../screens/ListScreen';
import { Topbar } from '../components/topbar';
import { WebviewScreen } from '../screens/WebviewScreen';

export const registerScreens: Function = (): void => {
    Navigation.registerComponent(ListScreenKey, () => ListScreen);
    Navigation.registerComponent(WebviewKey, () => WebviewScreen);
    
    Navigation.registerComponent(TopbarKey, () => Topbar);
};





export const setRoot: Function = (): void => {
    Navigation.setRoot({
        root: {
            stack: {
                id: 'RootStackId',
                children: [
                    {
                        component: {
                            name: ListScreenKey,
                        }, 
                    },
                ],
            },
        },
    });
};