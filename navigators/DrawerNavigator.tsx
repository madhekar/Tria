import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import Home from '../screens/Home';
import TriaConnect from '../screens/TriaConnect';

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator()

  return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Drawer.Screen name="TriaConnect" component={TriaConnect} options={{headerShown: false}} />
        </Drawer.Navigator>
  )
}

export default DrawerNavigator
