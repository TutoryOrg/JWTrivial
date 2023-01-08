import 'react-native-gesture-handler';
import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import './i18n';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Require cycle:']);
AppRegistry.registerComponent(appName, () => App);
