import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ShopScreen = ({navigation}) => {
  console.log('Shop Screen rendered');
  return (
    <View style={styles.container}>
      <Text>Shop Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ShopScreen;
