import RecipeTab from "../Screens/RecipeTab";
import RecipeDetail from "../Screens/RecipeDetail";
import AddRecipeMain from "../Screens/AddRecipeMain";
import AddRecipeIngredients from "../Screens/AddRecipeIngredients";
import AddProgress from "../Screens/AddProgress";

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RecipeDetailStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RecipeTab" component={RecipeTab} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
      <Stack.Screen name="AddRecipeMain" component={AddRecipeMain} />
      <Stack.Screen name="AddRecipeIngredients" component={AddRecipeIngredients} />
      <Stack.Screen name="AddProgress" component={AddProgress} />
    </Stack.Navigator>
  )
};

export default RecipeDetailStackNavigation;