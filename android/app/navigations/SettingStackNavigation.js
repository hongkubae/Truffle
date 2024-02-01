import SettingsView from "../Screens/SettingsView";
import MonthlyModifyView from "../Screens/MonthlyModifyView";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const SettingStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SetView" component={SettingsView} />
      <Stack.Screen name="MonthlyModifyView" component={MonthlyModifyView} />
    </Stack.Navigator>
  )
};

export default SettingStackNavigation
