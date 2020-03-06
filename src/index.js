import { useKeepAwake } from 'expo-keep-awake';
import React from 'react';
import { StatusBar } from 'react-native';

import 'react-native-gesture-handler';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  useKeepAwake();
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes />
    </>
  );
}
