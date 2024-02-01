import Loginpg from "../Screens/Loginpg";
import SignupPg from "../Screens/SignupPg";
import ForgotPW from "../Screens/ForgotPW";
import SuccessPW from "../Screens/SuccessPW";
import SuccessLogin from "../Screens/SuccessLogin";
import Budgetpg from "../Screens/Budgetpg";

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginpgStack" component={Loginpg} />
      <Stack.Screen name="SignupPg" component={SignupPg} />
      <Stack.Screen name="ForgotPW" component={ForgotPW} />
      <Stack.Screen name="SuccessPW" component={SuccessPW} />
      <Stack.Screen name="SuccessLogin" component={SuccessLogin} />
      <Stack.Screen name="Budgetpg" component={Budgetpg} />
    </Stack.Navigator>
  )
};

export default LoginStackNavigator;