import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import AddDeviceScreen from './AddDeviceScreen';
import Header from '../../components/Headers/MainHeader';
import GoBackHeader from '../../components/Headers/GoBackHeader'

const HomeNav = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:({navigaton}) => ({
      header: <Header />// Your custom header
    })
  },
  AddDevice: {
    screen: AddDeviceScreen,
    navigationOptions:{
      header: <GoBackHeader />
    }
  }
}, {
  initialRouteName: "AddDevice",
})

export default HomeNav;