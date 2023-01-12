import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import FlashSale from './src/screens/FlashSale';

import ProfileScreen from './src/screens/ProfileScreen';
import SearchScreen from './src/screens/SearchScreen';
import WishlistScreen from './src/screens/WishlistScreen';
import BagScreen from './src/screens/BagScreen';

import HomeBlack from './src/assets/home-fill-black.svg';
import HomeGrey from './src/assets/home-fill-grey.svg';
import SearchGrey from './src/assets/Search-g.svg';
import SearchBlack from './src/assets/Search-b.svg';
import LikeBlack from './src/assets/Like-b.svg';
import LikeGrey from './src/assets/Like-g.svg';
import BagBlack from './src/assets/Bag-b.svg';
import BagGrey from './src/assets/Bag-g.svg';
import ProfileBlack from './src/assets/profile-b.svg';
import ProfileGrey from './src/assets/profile-g.svg';

const App = () => {
  const Tab = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();

  const HomeTabs = () => (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#A6A6A6',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: 'transparent',
          height: 70,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconPath;
          if (route.name === 'Home') {
            iconPath = focused ? (
              <HomeBlack width={28} height={28} />
            ) : (
              <HomeGrey width={28} height={28} />
            );
          } else if (route.name === 'Search') {
            iconPath = focused ? (
              <SearchBlack width={28} height={28} />
            ) : (
              <SearchGrey width={28} height={28} />
            );
          } else if (route.name === 'Wishlist') {
            iconPath = focused ? (
              <LikeBlack width={28} height={28} />
            ) : (
              <LikeGrey width={28} height={28} />
            );
          } else if (route.name === 'Bag') {
            iconPath = focused ? (
              <BagBlack width={28} height={28} />
            ) : (
              <BagGrey width={28} height={28} />
            );
          } else {
            iconPath = focused ? (
              <ProfileBlack width={28} height={28} />
            ) : (
              <ProfileGrey width={28} height={28} />
            );
          }
          return iconPath;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Bag" component={BagScreen} options={{tabBarBadge: 3}} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="HomeScreen"
          component={HomeTabs}
          options={{headerShown: false}}
        />
        <HomeStack.Screen
          name="FlashSaleScreen"
          component={FlashSale}
          options={{headerShown: false}}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
