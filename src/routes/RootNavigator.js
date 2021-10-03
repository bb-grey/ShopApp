import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  MANAGE_PRODUCTS_NAVIGATION,
  MANAGE_PRODUCTS_NAVIGATION_TITLE,
  ORDERS_NAVIGATION,
  ORDERS_NAVIGATION_TITLE,
  primaryColor,
  secondaryColor,
  SHOP_NAVIGATION,
  SHOP_NAVIGATION_TITLE,
  whiteColor,
} from '../constants/strings';
import ShopNavigator from './ShopNavigator';
import OrdersNavigator from './OrdersNavigator';
import ManageProductsNavigator from './ManageProductsNavigator';
import {AppTheme} from '../theme/theme';
import {StatusBar} from 'react-native';

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer theme={AppTheme}>
      <StatusBar backgroundColor={primaryColor} />
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: primaryColor},
          headerTintColor: whiteColor,
          drawerActiveTintColor: secondaryColor,
        }}>
        <Drawer.Screen
          name={SHOP_NAVIGATION}
          component={ShopNavigator}
          options={{title: SHOP_NAVIGATION_TITLE}}
        />
        <Drawer.Screen
          name={ORDERS_NAVIGATION}
          component={OrdersNavigator}
          options={{title: ORDERS_NAVIGATION_TITLE}}
        />
        <Drawer.Screen
          name={MANAGE_PRODUCTS_NAVIGATION}
          component={ManageProductsNavigator}
          options={{title: MANAGE_PRODUCTS_NAVIGATION_TITLE}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
