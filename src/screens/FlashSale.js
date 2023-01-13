import {StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import React from 'react';

import FlashTop from '../components/FlashTop';
import Time from '../components/Time';
import FlashCat from '../components/FlashCat';
import FlashProducts from '../components/FlashProducts';
import {Flashsaleitems} from '../js/Flashsaleitems';

const FlashSale = ({navigation}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={Flashsaleitems}
        keyExtractor={item => item.id.toString()}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <FlashTop navigation={navigation} />

            <View style={styles.endsIn}>
              <Text style={styles.endsInText}>Ends In</Text>
              <Time style={styles.time} />
            </View>
            <FlashCat />
          </>
        }
        renderItem={({item}) => {
          return <FlashProducts item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  endsIn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginHorizontal: 50,
    marginVertical: 10,
    width: '80%',
  },
  endsInText: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Gordita Bold italic',
  },
  time: {
    flex: 2,
  },
});
export default FlashSale;
