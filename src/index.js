import { useKeepAwake } from 'expo-keep-awake';
import React from 'react';
import { StatusBar } from 'react-native';

import 'react-native-gesture-handler';

import './config/ReactotronConfig';
import Routes from './routes';
import NavigationService from './services/navigation';
import colors from './styles/colors';

export default function App() {
  useKeepAwake();
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </>
  );
}
