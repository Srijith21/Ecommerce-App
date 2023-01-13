import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {FlashCategories} from '../js/FlashCategories';

const FlashCategoriesitems = ({item}) => (
  <View style={styles.category}>
    <TouchableOpacity style={styles.categories}>
      <Text style={styles.categorytext}>{item.name}</Text>
    </TouchableOpacity>
  </View>
);
const FlashCat = () => {
  return (
    <View>
      <FlatList
        data={FlashCategories}
        renderItem={FlashCategoriesitems}
        ListEmptyComponent={<Text>Empty</Text>}
        keyboardDismissMode="on-drag"
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default FlashCat;

const styles = StyleSheet.create({
  category: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  categories: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'grey',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  categorytext: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Gordita Bold italic',
  },
});
