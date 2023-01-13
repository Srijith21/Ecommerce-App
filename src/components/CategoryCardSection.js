import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import {Category} from '../js/Category';

const categoryitem = ({item}) => (
  <View>
    <TouchableOpacity style={styles.items}>
      <Image style={styles.itemimage} source={item.image} />
      <Text style={styles.category}>{item.category_name}</Text>
    </TouchableOpacity>
  </View>
);

const CategoryCardSection = () => {
  return (
    <View>
      <View style={styles.cards}>
        <FlatList
          data={Category.slice(0, 4)}
          renderItem={categoryitem}
          ListEmptyComponent={<Text>Empty</Text>}
          keyboardDismissMode="on-drag"
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    fontFamily: 'Gordita Regular italic',
    color: 'black',
  },
  cards: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    margin: 10,
  },
  items: {
    padding: 5,
    margin: 10,
  },
  itemimage: {
    width: 70,
    height: 70,
    borderRadius: 120,
  },
});
export default CategoryCardSection;
