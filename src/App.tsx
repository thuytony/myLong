/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@redux';
import { StatusBar, LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { RootNavigator } from '@navigation';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const App: React.FC = () => {

  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
        <StatusBar translucent backgroundColor='transparent' />
        <RootNavigator />
    </Provider>
  );
};

export default App;
