import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './Screen/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <>
    <StatusBar style='black' />
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  name='Meals Categories' component={CategoriesScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  </>
  );
}


