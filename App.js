import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PaymentScreen from './screens/PaymentScreen';
import SuccessScreen from './screens/SuccessScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Payment">
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ title: 'Checkout' }}
        />
        <Stack.Screen
          name="Success"
          component={SuccessScreen}
          options={{ title: 'Payment Success' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;