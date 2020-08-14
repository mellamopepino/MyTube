/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';

axios.defaults.baseURL =
  'http://api-editoriales.clarin.com/api/mobile/v2/oletv/';

AppRegistry.registerComponent(appName, () => App);
