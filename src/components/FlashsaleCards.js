import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import React from 'react';
import Like from '../assets/like-y.svg';
import Heart from '../assets/Like-b.svg';
import {Flashsaleitems} from '../js/Flashsaleitems';

const Flashsaleitemcards = ({item}) => (
  <View>
    <TouchableOpacity style={styles.flashsaleproducts}>
      <View style={[styles.productimagebox, {backgroundColor: item.bg_color}]}>
        <Text style={styles.discounttext}>{item.discount} % off</Text>
        {item.favourite ? (
          <Like style={styles.love} />
        ) : (
          <Heart style={styles.love} />
        )}
        <Image style={styles.flashsaleproductimage} source={item.image} />
      </View>
      <Text style={styles.productname}>{item.item_name}</Text>
      <View style={styles.productpricedetails}>
        <Text style={styles.productprice}>$ {item.item_pricenew}</Text>
        <Text style={styles.productprice2}>${item.item_priceold}</Text>
        <Text style={styles.productsold}>{item.item_sold} sold</Text>
      </View>
    </TouchableOpacity>
  </View>
);
const FlashsaleCards = () => {
  return (
    <View>
      <FlatList
        data={Flashsaleitems}
        renderItem={Flashsaleitemcards}
        ListEmptyComponent={<Text>Empty</Text>}
        keyboardDismissMode="on-drag"
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FlashsaleCards;

const styles = StyleSheet.create({
  productimagebox: {
    backgroundColor: '#FBE8E7',
    borderRadius: 12,
    margin: 10,
  },
  productimagebox2: {
    backgroundColor: '#E7DDFF',
    borderRadius: 12,
    margin: 10,
  },
  discounttext: {
    backgroundColor: 'orange',
    color: 'black',
    position: 'absolute',
    top: 8,
    left: 10,
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 12,
    fontSize: 10,
  },
  love: {
    width: 22,
    height: 22,
    position: 'absolute',
    top: 8,
    right: 10,
    padding: 4,
  },
  flashsaleproductimage: {
    borderRadius: 12,
    margin: 45,
    height: 130,
    width: 130,
  },
  flashsaleproducts: {
    margin: 5,
    padding: 5,
  },
  productname: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    margin: 3,
    color: 'black',
  },
  productpricedetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 5,
  },
  productprice: {
    fontSize: 23,
    flex: 1,
    color: 'black',
  },
  productprice2: {
    fontSize: 14,
    margin: 2,
    flex: 4,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  productsold: {
    fontSize: 14,
    flex: 1,
  },
});
