import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LeftArrow from '../assets/leftarrow-b.svg';

const Notification = ({navigation}) => {
  return (
    <>
      <View style={styles.contentbox}>
        <Text style={styles.messagetext}>Notification</Text>
      </View>
      <View style={styles.backbutton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrow width={30} height={30} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Notification;

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
  backbutton: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
