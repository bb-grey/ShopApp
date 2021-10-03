import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const YourProductsScreen = () => {
  console.log('Your Prodcts Screen rendered');

  return (
    <View style={styles.container}>
      <Text>Your Products Screen</Text>
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

export default YourProductsScreen;
