/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, LogBox } from 'react-native';
import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load REAModule', 'This API will be removed in SDK 45.']);


AppRegistry.registerComponent(appName, () => App);
