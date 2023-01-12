import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import YClock from '../assets/clock-y.svg';

const Time = () => {
  return (
    <View>
      <View style={styles.flashsaletimer}>
        <YClock style={styles.clock} />
        <Text style={styles.flashsaletimertext}>02:04:56</Text>
      </View>
    </View>
  );
};

export default Time;

const styles = StyleSheet.create({
  flashsaletimer: {
    backgroundColor: 'black',
    // width: 110,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  flashsaletimertext: {
    color: 'orange',
    textAlign: 'center',
    fontSize: 13,
    marginHorizontal: 5,
  },
  clock: {
    height: 15,
    width: 15,
  },
});
