import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProfileScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.contentbox}>
        <Text style={styles.messagetext}>PROFILE</Text>
      </View>
    </>
  );
};

export default ProfileScreen;
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
