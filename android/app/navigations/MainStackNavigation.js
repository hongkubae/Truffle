import Main from "../Screens/Main";
import AddModifyView from "../Screens/AddModifyView";
import AlarmView from "../Screens/AlarmView";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainStack" component={Main} />
      <Stack.Screen name="AddModifyView" component={AddModifyView} />
      <Stack.Screen name="AlarmView" component={AlarmView} />
    </Stack.Navigator>
  )
};

export default MainStackNavigation
