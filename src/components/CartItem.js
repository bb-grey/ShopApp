import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import ShopCounterButton from './ShopCounterButton';
import {
  DEFAULT_PADDING,
  DEFAULT_MARGIN,
  DEFAULT_BORDER_RADIUS,
} from '../constants/numbers';
import {lightGreyColor} from '../constants/strings';
import PRODUCTS from '../data/dummy-data';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../store/features/cart/cartSlice';

const CartItem = ({productId}) => {
  console.log('Cart Item rendered');
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const getProductName = () => {
    return PRODUCTS.find(item => item.id === productId)?.title;
  };

  const getQuantity = () => {
    return cartItems.find(item => item.productId === productId).quantity;
  };

  const incrementProductQuantity = () => {
    dispatch(incrementQuantity({productId: productId, quantity: 1}));
  };

  const decrementProductQuantity = () => {
    if (getQuantity() > 1) {
      dispatch(decrementQuantity({productId: productId, quantity: 1}));
    }
  };

  const removeProductFromCart = () => {
    dispatch(removeFromCart({productId: productId}));
  };
  return (
    <View style={styles.cartItemContainer}>
      <View style={styles.cartItem}>
        <View style={styles.cartItemDetails}>
          <Text style={styles.title}>{getProductName()}</Text>
          <Text style={styles.quantity}>Quantity: {getQuantity()}</Text>
        </View>
        <View style={styles.counterContainer}>
          <ShopCounterButton
            icon={<Icon name="add" size={24} />}
            onPress={incrementProductQuantity}
          />
          <View style={styles.divider} />
          <Text>{getQuantity()}</Text>
          <View style={styles.divider} />
          <ShopCounterButton
            icon={
              <Icon
                name="remove-outline"
                size={24}
                onPress={decrementProductQuantity}
              />
            }
          />
        </View>
        <View>
          <Icon
            name="trash-outline"
            color="red"
            size={24}
            onPress={removeProductFromCart}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    width: '100%',
    padding: DEFAULT_PADDING,
    borderRadius: DEFAULT_BORDER_RADIUS,
    marginVertical: DEFAULT_MARGIN,
    borderColor: lightGreyColor,
    borderWidth: 1,
  },
  cartItem: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cartItemDetails: {},
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  quantity: {
    fontSize: 12,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    marginHorizontal: DEFAULT_MARGIN / 2,
  },
});

export default CartItem;
