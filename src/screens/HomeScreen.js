import {ScrollView, StyleSheet, Pressable, Text, View} from 'react-native';
import React, {Fragment} from 'react';
import Hometop from '../components/Hometop';
import CategoryCardSection from '../components/CategoryCardSection';
import FlashsaleHead from '../components/FlashsaleHead';
import FlashsaleCards from '../components/FlashsaleCards';
import HomeBottom from '../components/HomeBottom';

const HomeScreen = ({navigation}) => (
  <Fragment>
    <ScrollView>
      <Hometop navigation={navigation} />
      <CategoryCardSection />
      <FlashsaleHead navigation={navigation} />
      <FlashsaleCards />
      <HomeBottom />
    </ScrollView>
  </Fragment>
);
const styles = StyleSheet.create({});

export default HomeScreen;
