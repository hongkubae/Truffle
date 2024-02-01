import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './android/app/navigations/TabNavigation';

export default function App () {
  return (
    <NavigationContainer independent = {true}>
     <TabNavigator/>
    </NavigationContainer>
  );
}

export default App;