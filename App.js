import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './Screen/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import MealsOverview from './Screen/MealsOverview';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <>
    <StatusBar style='black' />
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  name='Categories' component={CategoriesScreen} />
      <Stack.Screen  name='Meals Overview' component={MealsOverview} />

    </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}


