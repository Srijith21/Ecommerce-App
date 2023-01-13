import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

import BackArrow from '../assets/leftarrow-b.svg';
import Adjust from '../assets/adjust-b.svg';
import Calendor from '../assets/calender-b.svg';

const FlashTop = ({navigation}) => {
  return (
    <View>
      <View style={styles.flashsale}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow style={styles.backarrow} />
        </TouchableOpacity>
        <Text style={styles.flashsalehead}>Flash Sale</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Adjust')}>
          <Adjust style={styles.adjust} />
        </TouchableOpacity>
      </View>
      <View style={styles.adsection}>
        <View style={styles.ad_textbox}>
          <Text style={styles.ad_text}>Flash Sale</Text>
          <Text style={styles.ad_text2}>Sale Upto 60% off</Text>
          <View style={styles.flashsaletimer}>
            <Calendor style={styles.calendor} />
            <Text style={styles.flashsaletimertext}>25-30 june</Text>
          </View>
        </View>
        <View style={styles.ad_imagebox}>
          <Image
            style={styles.ad_image}
            source={require('../assets/Frame3466075.jpg')}
          />
        </View>
      </View>
    </View>
  );
};

export default FlashTop;

const styles = StyleSheet.create({
  flashsale: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 13,
  },
  backarrow: {
    flex: 1,
  },
  flashsalehead: {
    flex: 4,
    fontFamily: 'Gordita Bold',
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
  },
  adjust: {
    flex: 1,
  },
  adsection: {
    backgroundColor: '#E7DDFF',
    borderRadius: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  ad_textbox: {
    flex: 2,
    width: '70%',
    padding: 10,
  },
  ad_text: {
    fontSize: 23,
    color: 'black',
    padding: 10,
    fontWeight: 'bold',
  },
  ad_text2: {
    fontSize: 15,
    padding: 10,
    color: '#9747FF',
    fontFamily: 'Gordita Bold italic',
  },
  ad_image: {
    width: 150,
    height: 150,
    borderRadius: 15,
    margin: 10,
  },
  flashsaletimer: {
    width: 110,
    borderRadius: 15,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  calendor: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  flashsaletimertext: {
    color: 'black',
    textAlign: 'center',
    padding: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
