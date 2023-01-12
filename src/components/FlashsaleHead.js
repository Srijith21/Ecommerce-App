import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

// import YClock from '../assets/clock-y.svg';
import Time from './Time';

const FlashsaleHead = ({navigation}) => {
  return (
    <View>
      <View style={styles.flashsale}>
        <Pressable
          style={styles.flashsaleleft}
          onPress={() => navigation.navigate('FlashSaleScreen')}>
          <Text style={styles.flashsalehead}>Flash Sale</Text>
          <Time />
          <TouchableOpacity
            style={styles.Seeall}
            onPress={() => navigation.navigate('FlashSaleScreen')}>
            <Text style={styles.linkText}>See All</Text>
          </TouchableOpacity>
        </Pressable>
      </View>
    </View>
  );
};

export default FlashsaleHead;

const styles = StyleSheet.create({
  flashsale: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
  },
  flashsaleleft: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flashsalehead: {
    flex: 1,
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    padding: 7,
    textAlign: 'center',
  },
  Seeall: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'orange',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  linktext: {
    fontSize: 16,
  },
});
