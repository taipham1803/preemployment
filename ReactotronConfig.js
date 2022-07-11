import {NativeModules} from 'react-native';
import Reactotron from 'reactotron-react-native';

const host = NativeModules?.SourceCode?.scriptURL.split('://')[1].split(':')[0];

const tron = Reactotron
  // .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  // .configure() // controls connection & communication settings
  .configure({host, name: 'React Native', port: 9090})
  .useReactNative() // add all built-in react native plugins
  .connect();

console.log = tron.log;
