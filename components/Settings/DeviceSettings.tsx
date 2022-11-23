import React, {FunctionComponent} from 'react';
import { ImageBackground, TouchableHighlight, View } from 'react-native';
import styled from 'styled-components';


//components
import { ScreenWidth } from '../shared';
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';


const DeviceBackground = styled(ImageBackground)`
  height: 90%;
  width: ${ScreenWidth * 0.70}px;
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
// images
import device_bg from  '../../assets/bgs/bg_image1.png';
//types
import DeviceValueProps  from './types';

const DeviceSettings:FunctionComponent<DeviceValueProps> = (props) => {
  const handlePress = () => {};
  return (
    <DeviceBackground source={device_bg}>
        <DeviceTouchable underlayColor={colors.secondary} onPress={handlePress}>
            <TouchableView>
                <DeviceRow>
                  <RegularText textStyles={{color: colors.white, marginTop: 10}} >
                        {props.deviceNo} : {props.lowValue}
                    </RegularText>
                    <RegularText textStyles={{color: colors.white, marginTop: 10}} >
                        {props.highValue} : {props.lowValue}
                    </RegularText>
                </DeviceRow>
            </TouchableView>
        </DeviceTouchable>
    </DeviceBackground>
  )
}

export default DeviceSettings;
