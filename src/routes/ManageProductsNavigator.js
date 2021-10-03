import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import YourProductsScreen from '../screens/YourProductsScreen';
import EditProductScreen from '../screens/EditProductScreen';
import {
  EDIT_PRODUCT_SCREEN,
  EDIT_PRODUCT_TITLE,
  YOUR_PRODUCTS_SCREEN,
  YOUR_PRODUCTS_TITLE,
} from '../constants/strings';

const Stack = createNativeStackNavigator();

const ManageProductsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={YOUR_PRODUCTS_SCREEN}
        component={YourProductsScreen}
        options={{title: YOUR_PRODUCTS_TITLE}}
      />
      <Stack.Screen
        name={EDIT_PRODUCT_SCREEN}
        component={EditProductScreen}
        options={{title: EDIT_PRODUCT_TITLE}}
      />
    </Stack.Navigator>
  );
};

export default ManageProductsNavigator;
