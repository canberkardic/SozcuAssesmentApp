import { Navigation } from 'react-native-navigation';


/**
 * Keys
 */

import { ListScreenKey, ShareKey, TopbarKey, WebviewKey } from './navigationKeys';

/**
 * Screens
 */

import ListScreen from '../screens/ListScreen';
import { Topbar } from '../components/topbar';
import { WebviewScreen } from '../screens/WebviewScreen';
import { ShareButton } from '../components/shareButton';

export const registerScreens: Function = (): void => {
    Navigation.registerComponent(ListScreenKey, () => ListScreen);
    Navigation.registerComponent(WebviewKey, () => WebviewScreen);

    Navigation.registerComponent(TopbarKey, () => Topbar);
    Navigation.registerComponent(ShareKey, () => ShareButton);
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