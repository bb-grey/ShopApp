import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import AddToCartButton from '../components/AddToCartButton';
import {
  DEFAULT_BORDER_RADIUS,
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
} from '../constants/numbers';
import {lightGreyColor, secondaryColor} from '../constants/strings';
import PRODUCTS from '../data/dummy-data';

const ProductDetailScreen = ({route, navigation}) => {
  console.log('Product Detail Screen rendered');
  const product = PRODUCTS.find(pr => pr?.id === route?.params?.productId);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: product?.imageUrl}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product?.title}</Text>
        <Text style={styles.description}>{product?.description}</Text>
        <View style={styles.cartButtonContainer}>
          <AddToCartButton
            title="Add To Cart"
            style={{
              paddingVertical: DEFAULT_PADDING,
              borderRadius: DEFAULT_BORDER_RADIUS * 8,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: DEFAULT_PADDING,
  },
  imageContainer: {
    backgroundColor: secondaryColor,
    width: '100%',
    height: 300,
    marginTop: DEFAULT_MARGIN * 2,
    borderRadius: DEFAULT_BORDER_RADIUS * 4,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: lightGreyColor,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    width: '100%',
    marginTop: DEFAULT_MARGIN * 3,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginTop: DEFAULT_MARGIN,
    textAlign: 'center',
  },
  cartButtonContainer: {
    marginVertical: DEFAULT_MARGIN * 2,
  },
});

export default ProductDetailScreen;
