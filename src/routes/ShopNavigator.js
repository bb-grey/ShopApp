import React, {useLayoutEffect} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopScreen from '../screens/ShopScreen';
import CartScreen from '../screens/CartScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  CART_SCREEN,
  CART_TITLE,
  PRODUCT_DETAIL_SCREEN,
  PRODUCT_DETAIL_TITLE,
  secondaryColor,
  SHOP_SCREEN,
  SHOP_TITLE,
  whiteColor,
} from '../constants/strings';
import {DEFAULT_MARGIN} from '../constants/numbers';

const Stack = createNativeStackNavigator();

const ShopNavigator = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: props => {
        return (
          <View style={styles.headerRightContainer}>
            <TouchableOpacity onPress={() => navigation.navigate(CART_SCREEN)}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>1</Text>
              </View>
              <Icon name="cart-outline" size={28} color={whiteColor} />
            </TouchableOpacity>
          </View>
        );
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

const styles = StyleSheet.create({
  headerRightContainer: {
    marginRight: DEFAULT_MARGIN * 2,
  },
  badge: {
    width: 16,
    height: 16,
    position: 'absolute',
    right: -2,
    top: -8,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: secondaryColor,
    alignItems: 'center',
  },
  badgeText: {
    color: whiteColor,
    fontSize: 10,
    textAlign: 'center',
  },
});

export default ShopNavigator;
