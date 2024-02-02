import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Button, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BookmarkTab from "../Screens/BookmarkTab";
import RecipeTab from "../Screens/RecipeTab";
import RefTab from "../Screens/RefTab";

const Tab = createMaterialTopTabNavigator();

function RecipeTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="RefTab" screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="RefTab"
        component={RefTab}
      />
      <Tab.Screen
        name="RecipeTab"
        component={RecipeTab}
      />
      <Tab.Screen
        name="BookmarkTab"
        component={BookmarkTab}
      />
    </Tab.Navigator>
  );
}
export default RecipeTabNavigator;