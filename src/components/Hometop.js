import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import MessageIcon from '../assets/message-not-b.svg';
import BellIcon from '../assets/bell-b.svg';

const Hometop = () => {
  return (
    <View>
      <View style={styles.tophead}>
        <View style={styles.smallheadbox}>
          <Text style={styles.smallhead}>Shopline</Text>
        </View>
        <View style={styles.topheadrightbox}>
          <MessageIcon />
          <BellIcon />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tophead: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 14,
    paddingRight: 14,
  },
  topheadrightbox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallheadbox: {
    flex: 4,
    flexDirection: 'row',
  },
  smallhead: {
    fontSize: 33,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default Hometop;