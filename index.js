/**
 * @format
 */

import {AppRegistry, LogBox } from 'react-native';
import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load REAModule']);

AppRegistry.registerComponent(appName, () => App);
