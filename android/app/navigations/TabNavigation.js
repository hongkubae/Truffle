import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import MainStackNavigation from "./MainStackNavigation";
import SettingStackNavigation from "./SettingStackNavigation";
import { NavigationContainer } from '@react-navigation/native';
import CalendarView from "../Screens/CalendarView";
import RecipeView from "../Screens/RecipeView";
import { StyleSheet, Dimensions } from 'react-native'; 
import CalStackNavigator from "./CalStackNavigation";

import OnHomeIcon from "../assets/icons/onHomeIcon";
import OnCalIcon from "../assets/icons/onCalIcon";
import OnRecipeIcon from "../assets/icons/onRecipeIcon";
import OnSettingIcon from "../assets/icons/onSettingIcon";

import OffHomeIcon from "../assets/icons/offHomeIcon";
import OffCalIcon from "../assets/icons/offCalIcon";
import OffRecipeIcon from "../assets/icons/offRecipeIcon";
import OffSettingIcon from "../assets/icons/offSettingIcon";

const Tab = createBottomTabNavigator();

const TabNavigator = ()=>{
  return (
    <NavigationContainer
	  independent = {true}>

    <Tab.Navigator
    initialRouteName="Main"
    screenOptions={{
      headerShown: false,
      tabBarStyle: { height: 60, borderTopLeftRadius:15, borderTopRightRadius:15, },
    }}
    tabBarOptions={{labelPosition: 'beside-icon',}}
    >
    
    <Tab.Screen
    name="Main"
    component={MainStackNavigation}
    options={({ route }) => ({
      tabBarLabel: '', 
      tabBarIcon: ({ focused, size }) => {
        if(focused){
          return (
            <OnHomeIcon/>
          );
        }else{
          return (
            <OffHomeIcon/>
          );
        }
      },
    })}
    />

    <Tab.Screen
    name="CalendarView"
    component={CalStackNavigator}
    options={({ route }) => ({
      tabBarLabel: '', 
      tabBarIcon: ({ focused, size }) => {
        if(focused){
          return (
            <OnCalIcon/>
          );
        }else{
          return (
            <OffCalIcon/>
          );
        }
      },
    })}/>

    <Tab.Screen
    name="RecipeView"
    component={RecipeView}
    options={({ route }) => ({
      tabBarLabel: '', 
      tabBarIcon: ({ focused, size }) => {
        if(focused){
          return (
            <OnRecipeIcon/>
          );
        }else{
          return (
            <OffRecipeIcon/>
          );
        }
      },
    })}
    />
    <Tab.Screen
    name="SettingsView"
    component={SettingStackNavigation}
    options={({ route }) => ({
      tabBarLabel: '', 
      tabBarIcon: ({ focused, size }) => {
        if(focused){
          return (
            <OnSettingIcon/>
          );
        }else{
          return (
            <OffSettingIcon/>
          );
        }
      },
    })}
    />
  </Tab.Navigator>
  </NavigationContainer>
  );
};


export default TabNavigator;