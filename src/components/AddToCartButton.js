import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {secondaryColor} from '../constants/strings';
import {
  DEFAULT_BORDER_RADIUS,
  DEFAULT_MARGIN,
  DEFAULT_PADDING,
} from '../constants/numbers';

const AddToCartButton = ({title = 'ADD', ...props}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, props.style]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.divider} />
      <Icon name="cart-outline" size={22} color={secondaryColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: DEFAULT_PADDING * 2,
    paddingVertical: DEFAULT_PADDING / 2,
    borderColor: secondaryColor,
    borderWidth: 2,
    borderRadius: DEFAULT_BORDER_RADIUS * 5,
  },
  title: {
    fontWeight: 'bold',
    color: secondaryColor,
  },
  divider: {
    marginHorizontal: DEFAULT_MARGIN / 2,
  },
});

export default AddToCartButton;
