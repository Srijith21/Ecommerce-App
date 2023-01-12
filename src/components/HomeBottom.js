import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const HomeBottom = () => {
  return (
    <View>
      <View style={styles.adsection}>
        <View style={styles.ad_textbox}>
          <Text style={styles.ad_text}>Full Color Hoodie</Text>
          <Text style={styles.ad_text2}>Sale up to 40%</Text>
        </View>
        <View style={styles.ad_imagebox}>
          <Image
            style={styles.ad_image}
            source={require('../assets/Frame3466085.jpg')}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeBottom;

const styles = StyleSheet.create({
  adsection: {
    backgroundColor: '#FBE8E7',
    borderRadius: 15,
    flex: 1,
    flexDirection: 'row',
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
    fontSize: 20,
    color: 'black',
    padding: 10,
    fontWeight: 'bold',
  },
  ad_text2: {
    fontSize: 15,
    padding: 10,
    color: '#EBA352',
    fontWeight: 'bold',
  },
  ad_imagebox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ad_image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
});
