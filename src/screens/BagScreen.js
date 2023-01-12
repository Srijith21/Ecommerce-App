import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const BagScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.contentbox}>
        <Text style={styles.messagetext}>CART BAG</Text>
      </View>
    </>
  );
};

export default BagScreen;
const styles = StyleSheet.create({
  messagetext: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: '50%',
  },
  contentbox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
