import React, {FunctionComponent} from 'react';

//screens
import Welcome from './../screens/Welcome';
import Home from './../screens/Home';
import Settings from '../screens/Settings';


import { DeviceProps } from '../components/Devices/types';

//custom components
import {colors} from "../components/colors";

// react navigation
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Greeting from '../components/Header/Greeting';
import Profile from '../components/Header/Profile';
import TriaConnect from '../screens/TriaConnect';
import Avi from "../assets/avi/avatar.png";

import { Ionicons } from "@expo/vector-icons";
import DrawerNavigator from './DrawerNavigator';


export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
    Settings: DeviceProps;
    TriaConnect: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();




const RootStack: FunctionComponent = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.graylite,
                borderBottomWidth: 0,
                shadowColor: "transparent",
                shadowOpacity: 0,
                elevation: 0,
                height: 120,
            },
            headerTintColor: colors.secondary,
            headerRightContainerStyle: {
                paddingRight: 25,
            },
            headerLeftContainerStyle:{
                paddingLeft: 10,
            },
            headerRight: () => (
                <Profile 
                img={Avi}
                imgContainerStyle={{
                    backgroundColor: colors.tertiary,
                }} />
            ),
            }}
             
             initialRouteName='Welcome'
            >
            {/* inital web=lcome screen    */}
            <Stack.Screen  
            name='Welcome'
            component={Welcome}
            options={{headerShown: false}}
            />
             {/* Home stack screen */}
            <Stack.Screen 
                name='Home' 
                component={DrawerNavigator} 
                options={{
                  headerTitle: (props) => (
                    <Greeting
                    mainText='Hey Bhal!'
                    subText='Welcome Back...'
                    {...props}
                    />
                   ),
                headerLeft: () => <></>,
            }}/>

            {/* Settings stack screen */}
            <Stack.Screen
            name='Settings'
            component={Settings}
            options={({route}) => ({
                headerTitle: route?.params?.alias,
                headerTitleAlign: 'center',
                headerBackImage: (props) => (
                    <Ionicons
                    {...props}
                    name='chevron-back'
                    size={25}
                    color={colors.secondary}
                    />
                ),
                headerLeftContainerStyle: {
                    paddingLeft: 0,
                },
            })}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default RootStack;