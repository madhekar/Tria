import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { colors } from '../components/colors';
import GAppSetting from '../screens/GAppSetting';
import Home from '../screens/Home';

const DrawerNav = () => {

  const Drawer = createDrawerNavigator();

  return (
        <Drawer.Navigator>
            <Drawer.Screen  name="Home" component={Home} options={{headerShown: true, headerTitle : '', headerStyle: 
              {backgroundColor: colors.graylite} }} /> 
            <Drawer.Screen name="AppSettings" component={GAppSetting} options={{headerShown: true, headerTitle : '', headerStyle: 
              {backgroundColor: colors.graylite}}} />
        </Drawer.Navigator>
  )
}

export default DrawerNav;
