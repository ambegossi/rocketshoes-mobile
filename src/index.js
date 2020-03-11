import React from 'react';
import { Provider } from 'react-redux';
import { useKeepAwake } from 'expo-keep-awake';
import { StatusBar } from 'react-native';

import 'react-native-gesture-handler';

import './config/ReactotronConfig';
import Routes from './routes';
import NavigationService from './services/navigation';
import colors from './styles/colors';
import store from './store';

export default function App() {
  useKeepAwake();
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}
