import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ShopCounterButton from './ShopCounterButton';
import {
  DEFAULT_PADDING,
  DEFAULT_MARGIN,
  DEFAULT_BORDER_RADIUS,
} from '../constants/numbers';
import {lightGreyColor} from '../constants/strings';

const CartItem = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(q => q + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(q => q - 1);
    }
  };
  return (
    <View style={styles.cartItemContainer}>
      <View style={styles.cartItem}>
        <View style={styles.cartItemDetails}>
          <Text style={styles.title}>Product Name</Text>
          <Text style={styles.quantity}>Quantity</Text>
        </View>
        <View style={styles.counterContainer}>
          <ShopCounterButton
            icon={<Icon name="add" size={24} />}
            onPress={incrementQuantity}
          />
          <View style={styles.divider} />
          <Text>{quantity}</Text>
          <View style={styles.divider} />
          <ShopCounterButton
            icon={
              <Icon
                name="remove-outline"
                size={24}
                onPress={decrementQuantity}
              />
            }
          />
        </View>
        <View>
          <Icon name="trash-outline" color="red" size={24} />
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
