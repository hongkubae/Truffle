import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './android/app/navigations/TabNavigation';
import LoginStackNavigator from './android/app/navigations/LoginStackNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App () {
  const isLogin = true; 
  return (
    <NavigationContainer independent = {true}>
      <Stack.Navigator
		    screenOptions = {({ route }) => ({ headerShown: false })}
		    initialRouteName = {LoginStackNavigator}
      >
      {
    	  isLogin ? (
        	<>
            <Stack.Screen name = 'TabNavigator' component = {TabNavigator} /> 
            </>   
		        ) : (
            <>
            <Stack.Screen name = 'LoginStackNavigator' component = {LoginStackNavigator} />
            <Stack.Screen name = 'TabNavigator' component = {TabNavigator} />
            </>
		        )
	      }
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;