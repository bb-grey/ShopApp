import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import {whiteColor, secondaryColor} from '../../../../constants/strings';
import {DEFAULT_MARGIN} from '../../../../constants/numbers';

const CartButton = ({onPress}) => {
  console.log('Cart Button rendered');
  const cartLength = useSelector(state => state.cart.cartItems.length);
  return (
    <View style={styles.headerRightContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cartLength}</Text>
        </View>
        <Icon name="cart-outline" size={28} color={whiteColor} />
      </TouchableOpacity>
    </View>
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

export default CartButton;
