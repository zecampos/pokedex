import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Details from '../pages/Details';

const Stack = createStackNavigator();

const StackRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#FFFFFF' },
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

export default StackRoutes;
