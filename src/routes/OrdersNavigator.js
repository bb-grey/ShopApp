import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrdersScreen from '../screens/OrdersScreen';
import {ORDERS_SCREEN, ORDERS_TITLE} from '../constants/strings';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ORDERS_SCREEN}
        component={OrdersScreen}
        options={{title: ORDERS_TITLE}}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
