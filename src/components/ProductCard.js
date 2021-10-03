import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
  DEFAULT_BORDER_RADIUS,
} from '../constants/numbers';
import {lightGreyColor} from '../constants/strings';
import AddToCartButton from './AddToCartButton';
import ShopCounterButton from './ShopCounterButton';

const ProductCard = ({product, onSelectProduct}) => {
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
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.productCard}
      onPress={() => onSelectProduct(product?.id)}>
      <View style={styles.imageContainer}>
        <Image source={{uri: product.imageUrl}} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {product?.title?.length < 16
            ? product?.title
            : `${product?.title?.substring(0, 12)}...`}
        </Text>

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
          <AddToCartButton />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productCard: {
    width: '100%',
    height: 240,
    marginVertical: DEFAULT_MARGIN,
    borderRadius: DEFAULT_BORDER_RADIUS * 2,
    borderColor: lightGreyColor,
    borderWidth: 1,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: DEFAULT_PADDING,
    paddingVertical: DEFAULT_PADDING,
    borderTopWidth: 1,
    borderTopColor: lightGreyColor,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
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

export default ProductCard;
