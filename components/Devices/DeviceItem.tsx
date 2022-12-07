import React, { createContext, FunctionComponent , useState} from 'react'
import styled from 'styled-components';
import {View, ImageBackground, TouchableHighlight, Image, Alert, ViewPagerAndroidOnPageScrollEventData} from 'react-native';

//components
import { ScreenWidth } from '../shared';
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import BigText from '../Texts/BigText';
import SmallText from '../Texts/SmallText';
import DeviceAvi from './DeviceAvi';

import { useNavigation } from '@react-navigation/native';
import {props as HomeProps} from '../../screens/Home';
import Settings from '../../screens/Settings';

import { useBetween } from 'use-between';
import { TriaSettings } from '../Connection/TriaState';


const DeviceBackground = styled(ImageBackground)`
  height: 95%;
  width: ${ScreenWidth* 0.70}px;
  resize-mode: cover;
  background-color: ${colors.accent};
  border-radius: 25px;
  margin-right:25px;
  overflow:hidden;
`;

const DeviceTouchable = styled(TouchableHighlight)`
  height: 100%;
  border-radius: 20px;
`;

const TouchableView = styled(View)`
  justify-content: space-between;
  align-items: center;  
  padding: 30px;
  flex:1;
`;

const DeviceRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled(Image)`
  width: 100%;
  height:100%;
  resize-mode: contain;
  flex: 1;
`;

// images
import device_bg from  '../../assets/bgs/bg_image1.png';

// types
import { DeviceProps } from './types';
import { useAppSelector } from '../State/hooks';

const DeviceItem: FunctionComponent<DeviceProps> = (props) => {

  const device = useAppSelector((state) => state.device.deviceList[props.id]);
  //console.log(device.accuracy);
  const navigation = useNavigation<HomeProps['navigation']>();

   // move to device setting page
   const handleImgPress = () =>{
    navigation.navigate("Settings",
      props,    
    );
   };


  return (
    <DeviceBackground source = {device_bg}>

      <DeviceTouchable underlayColor= {colors.secondary} onPress={handleImgPress}>
        <TouchableView>
          <DeviceRow> 
          <View style={{flex: 2}}>
            <BigText textStyles={{ marginBottom: 1, color: colors.accent}}>
              {props.alias}
            </BigText>
            <SmallText textStyles={{ marginBottom: 10, color: colors.accent}}>
              Device Type: {props.deviceNo}
            </SmallText>
           </View>
          </DeviceRow>
          <DeviceRow>
            <View style={{flex: 3}}>
              <SmallText 
              textStyles={{marginBottom: 0, color: colors.accent}} >
                High: {props.highValue}
              </SmallText>
              <SmallText 
              textStyles={{marginBottom: 0, color: colors.accent}} >
                Low: {props.lowValue}
              </SmallText>
              <SmallText
              textStyles={{marginBottom: 0, color: colors.accent}} >
                Accuracy: {props.accuracy}
              </SmallText>
            </View>
            <DeviceAvi
                background={props.art.background}
                icon={props.art.icon}
        />
          </DeviceRow>
        </TouchableView>
      </DeviceTouchable>
    </DeviceBackground>
  );
};

export default DeviceItem;