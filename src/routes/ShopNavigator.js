import React, {useLayoutEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopScreen from '../screens/ShopScreen';
import CartScreen from '../screens/CartScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

import {
  CART_SCREEN,
  CART_TITLE,
  PRODUCT_DETAIL_SCREEN,
  PRODUCT_DETAIL_TITLE,
  SHOP_SCREEN,
  SHOP_TITLE,
} from '../constants/strings';
import CartButton from '../store/features/cart/components/CartButton';

const Stack = createNativeStackNavigator();

const ShopNavigator = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: props => {
        return <CartButton onPress={() => navigation.navigate(CART_SCREEN)} />;
      },
    });
  }, [navigation]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={SHOP_SCREEN}
        component={ShopScreen}
        options={{title: SHOP_TITLE}}
      />
      <Stack.Screen
        name={CART_SCREEN}
        component={CartScreen}
        options={{title: CART_TITLE}}
      />
      <Stack.Screen
        name={PRODUCT_DETAIL_SCREEN}
        component={ProductDetailScreen}
        options={{title: PRODUCT_DETAIL_TITLE}}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
