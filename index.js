/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import RNBootSplash from "react-native-bootsplash";
RNBootSplash.show();
AppRegistry.registerComponent(appName, () => App);
