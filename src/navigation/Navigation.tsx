import { createStackNavigator } from '@react-navigation/stack';
import { Movie } from '../interfaces/movieInterface';
import { Detail } from '../screens/Detail';
import { Home } from '../screens/Home';

export type RootStackParams = {
  Home: undefined, 
  Details: Movie,
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Detail} />
    </Stack.Navigator>
  );
}