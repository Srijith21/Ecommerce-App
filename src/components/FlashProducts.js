import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import WhiteBag from '../assets/bag-y.svg';

const FlashProducts = ({item}) => (
  <View style={styles.productbox}>
    <View style={styles.imagebox}>
      <View style={styles.discount}>
        <Text style={styles.discountText}>{item.discount}% off</Text>
      </View>
      <Image style={styles.productimage} source={item.image} />
    </View>
    <TouchableOpacity style={styles.product}>
      <View style={styles.detailContainer}>
        <Text style={styles.productname}>{item.item_name}</Text>
        <Text style={styles.priceold}>$ {item.item_priceold}</Text>
        <Text style={styles.pricenew}>$ {item.item_pricenew}</Text>
        <View style={styles.itemStockContainer}>
          <View
            style={[
              styles.itemSoldContainer,
              {width: `${(item.item_sold / item.stock) * 100}%`},
            ]}
          />
          <Text style={styles.itemSold}>{item.item_sold} Sold</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <WhiteBag style={styles.bag} />
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  </View>
);

export default FlashProducts;

const styles = StyleSheet.create({
  productbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 130,
    marginVertical: 40,
    marginHorizontal: 10,
  },
  product: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productimage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  discount: {
    backgroundColor: '#EBA352',
    width: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    position: 'absolute',
    left: 6,
    top: 8,
    zIndex: 1,
  },
  discountText: {
    fontSize: 10,
    color: '#fff',
    fontFamily: 'Gordita Regular',
  },
  imagebox: {
    width: '22%',
  },
  detailContainer: {
    width: '48%',
  },
  productname: {
    fontFamily: 'Gordita Regular',
    fontSize: 14,
    color: '#000000',
  },
  pricenew: {
    fontSize: 22,
    fontFamily: 'Gordita Bold',
    color: '#EBA352',
  },
  priceold: {
    marginTop: 20,
    fontSize: 12,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
  itemStockContainer: {
    backgroundColor: 'grey',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    marginTop: 10,
  },

  itemSoldContainer: {
    backgroundColor: '#000',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    height: '100%',
    width: '30%',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
  },
  itemSold: {
    color: '#EBA352',
    fontSize: 12,
    fontFamily: 'Gordita Regular italic',
  },
  buttonContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#000',
    width: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 5,
  },

  buttonText: {
    color: '#fff',
  },

  bag: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
});
