import React, {FunctionComponent} from 'react';

//screens
import Welcome from './../screens/Welcome';
import Settings from '../screens/Settings';
import DrawerNav from './DrawerNav';
import { DeviceProps } from '../components/Devices/types';

//custom components
import {colors} from "../components/colors";

// react navigation
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Greeting from '../components/Header/Greeting';
import Profile from '../components/Header/Profile';
import avatar from "../assets/avi/avatar.png";
import boy from "../assets/avi/boy.png";
import man from "../assets/avi/man.png";
import woman from "../assets/avi/woman.png";

import { Ionicons } from "@expo/vector-icons";
import { useAppSelector } from '../components/State/hooks';
import { RootState } from '../components/State/store';

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
    Settings: DeviceProps;
    TriaConnect: undefined;
    DrawerNav: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const RootStack: FunctionComponent = () => {
    const sList = useAppSelector((state: RootState) => state.setting.settingList); 
    const sv = sList.find((o: { id: number; }) => o.id == 2).subTitle;
    return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.graylite,
                borderColor: colors.accent,
                borderBottomWidth: 0,
                shadowColor: "transparent",
                shadowOpacity: 0,
                elevation: 0,
                height: 120,
            },
            headerTintColor: colors.secondary,
            headerRightContainerStyle: {
                paddingRight: 20,
            },
            headerLeftContainerStyle:{
                paddingLeft: 7,
            },
            headerRight: () => (
               <Profile 
                img= {man}
                imgContainerStyle={{
                    backgroundColor: colors.accent,
                }} />
            ),
            }}
             initialRouteName='Welcome'>
            {/* inital web=lcome screen    */}
                <Stack.Screen  
                  name='Welcome'
                  component={Welcome}
                  options={{headerShown: false}}
                />

             {/* Home stack screen */}
                <Stack.Screen 
                  name='DrawerNav' 
                  component={DrawerNav} 
                  options={{
                  headerTitle: (props) => (
                    <Greeting
                    mainText='Hey'
                    subText='Welcome Back...'
                    {...props}
                    />
                   ),
                  headerLeft: ( ) => <></>,
                }}/>

            {/* Settings stack screen */}
                <Stack.Screen
                 name='Settings'
                 component={Settings}
                 options={({route}) => ({
                   headerTitle: route?.params?.alias,
                   headerTitleAlign: 'center',
                   headerTintColor: colors.graylite,
                   headerBackImage: (props) => (
                      <Ionicons   
                        {...props}
                        name='chevron-back'
                        size={30}
                        color={colors.secondary}
                       />
                   ),
                   headerLeftContainerStyle: {
                   paddingLeft: 0,
                   },
                })}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default RootStack;