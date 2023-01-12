// import * as React from 'react';
// import {StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import ProfileScreen from './src/screens/ProfileScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import SearchScreen from './src/screens/SearchScreen';
// import WishlistScreen from './src/screens/WishlistScreen';
// import BagScreen from './src/screens/BagScreen';
// import FlashSale from './src/screens/FlashSale';

// import HomeBlack from './src/assets/home-fill-black.svg';
// import HomeGrey from './src/assets/home-fill-grey.svg';
// import SearchGrey from './src/assets/Search-g.svg';
// import SearchBlack from './src/assets/Search-b.svg';
// import LikeBlack from './src/assets/Like-b.svg';
// import LikeGrey from './src/assets/Like-g.svg';
// import BagBlack from './src/assets/Bag-b.svg';
// import BagGrey from './src/assets/Bag-g.svg';
// import ProfileBlack from './src/assets/profile-b.svg';
// import ProfileGrey from './src/assets/profile-g.svg';

// const Tab = createBottomTabNavigator();
// function App() {
//   const HomeStack = createNativeStackNavigator();
//   const HomeStackScreen = () => (
//     <HomeStack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
//       <HomeStack.Screen name="FlashSale" component={FlashSale} />
//     </HomeStack.Navigator>
//   );
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Home"
//         screenOptions={({route}) => ({
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'black',
//           headerShown: false,
//           tabBarIcon: ({focused}) => {
//             let iconPath;
//             if (route.name === 'Home') {
//               iconPath = focused ? (
//                 <HomeBlack width="100%" height="90%" />
//               ) : (
//                 <HomeGrey width="100%" height="90%" />
//               );
//             } else if (route.name === 'Search') {
//               iconPath = focused ? (
//                 <SearchBlack width="100%" height="90%" />
//               ) : (
//                 <SearchGrey width="100%" height="90%" />
//               );
//             } else if (route.name === 'Wishlist') {
//               iconPath = focused ? (
//                 <LikeBlack width="100%" height="90%" />
//               ) : (
//                 <LikeGrey width="100%" height="90%" />
//               );
//             } else if (route.name === 'Bag') {
//               iconPath = focused ? (
//                 <BagBlack width="100%" height="90%" />
//               ) : (
//                 <BagGrey width="100%" height="90%" />
//               );
//             } else {
//               iconPath = focused ? (
//                 <ProfileBlack width="100%" height="90%" />
//               ) : (
//                 <ProfileGrey width="100%" height="90%" />
//               );
//             }
//             return iconPath;
//           },
//         })}>
//         <Tab.Screen name="Home" component={HomeStackScreen} />
//         <Tab.Screen
//           name="Search"
//           component={SearchScreen}
//           options={{
//             headerShown: false,
//           }}
//         />
//         <Tab.Screen name="Wishlist" component={WishlistScreen} />
//         <Tab.Screen
//           name="Bag"
//           component={BagScreen}
//           options={{
//             headerShown: false,
//             tabBarBadge: '3',
//           }}
//         />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
//   // return (
//   //   <NavigationContainer>
//   //     <HomeStack.Navigator>
//   //       <HomeStack.Screen
//   //         name="HomeScreen"
//   //         component={HomeTabs}
//   //         options={{headerShown: false}}
//   //       />
//   //       <HomeStack.Screen
//   //         name="FlashSaleScreen"
//   //         component={FlashSale}
//   //         options={{headerShown: false}}
//   //       />
//   //     </HomeStack.Navigator>
//   //   </NavigationContainer>
//   // );
// }
// const styles = StyleSheet.create({
//   image: {
//     height: 22,
//     width: 22,
//   },
// });

// export default App;
