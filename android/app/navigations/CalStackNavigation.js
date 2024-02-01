import CalendarView from "../Screens/CalendarView";
import WeekCalView from "../Screens/WeekCalView";

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CalStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CalStack" component={CalendarView} />
      <Stack.Screen name="WeekCalView" component={WeekCalView} />
    </Stack.Navigator>
  )
};

export default CalStackNavigator