import React,{FunctionComponent, useState, useEffect, useReducer, useContext} from 'react';
import { View, StyleSheet, Dimensions, Alert, ImageBackground, TouchableHighlight, Image} from 'react-native';
import { Text, TextInput, Provider as PaperProvider, Card, Button, DarkTheme } from 'react-native-paper';
import styled from 'styled-components';
import { colors } from '../colors';
import { ScreenWidth } from '../shared';
import { useBetween } from 'use-between';
import { TriaSettings } from '../Connection/TriaState';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {props as HomeProps} from '../../screens/Home';

const DeviceValueSectionBackground = styled(View)` 
width: 100%;
padding-top: 5px;
align-items: center;
flex: 1;
`;

const DeviceBackground = styled(ImageBackground)`
  height: 86%;
  width: ${ScreenWidth * 0.850}px;
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

//type
import DeviceValueProps from './types';
// images
import device_bg from  '../../assets/bgs/bg_image1.png';
import MaskInput from 'react-native-mask-input';


const DeviceValueSection: FunctionComponent<DeviceValueProps> = (props) => {
  
    const [id, setId] = useState(props.id);
    const [deviceNo, setDeviceNo] = useState(props.deviceNo);
    const [alias, setAlias] = useState(props.alias);
    const [highValue, setHighValue] = useState(props.highValue);
    const [lowValue, setLowValue] = useState(props.lowValue);
    const [accuracy, setAccuracy] = useState(props.accuracy);

    const useSharedTriaSettings = () => useBetween(TriaSettings);

    const navigation = useNavigation<HomeProps['navigation']>();

    const {
      triaAqHiChange,
      setTriaAqHiChange,
      triaAqLoChange,
      setTriaAqLoChange,
      triaHumHiChange,
      setTriaHumHiChange,
      triaHumLoChange, 
      setTriaHumLoChange,
      triaTempHiChange,
      setTriaTempHiChange,
      triaTempLoChange,
      setTriaTempLoChange,
    } = useSharedTriaSettings();

    useEffect(() => 
    {
      if(props.id === 0){
        setTriaTempHiChange(highValue); 
      } else if(props.id === 1){
        setTriaHumHiChange(highValue); 
      } else if(props.id === 2){
        setTriaAqHiChange(highValue);
      }
    }, [highValue]);

    useEffect(() => {
      if(props.id === 0){
        setTriaTempLoChange(lowValue); 
      } else if(props.id === 1){
        setTriaHumLoChange(lowValue); 
      } else if(props.id === 2){
        setTriaAqLoChange(lowValue);
      }
    }, [lowValue]);


  return (

    <DeviceBackground source = {device_bg}>
      <DeviceTouchable underlayColor= {colors.secondary}>
        <TouchableView>
              <Text style={{color: colors.black, padding: 5 , backgroundColor: colors.accent ,borderRadius: 10}}>
                  Device ID:  {props.id}
              </Text>
        <DeviceRow> 
           <View style={{flexDirection: 'column' ,flex: 4, justifyContent: 'space-between', paddingBottom: 15}} >
    <TextInput
                style={{ margin: 1, borderColor: colors.graydark, fontSize: 12, backgroundColor: colors.accent}}
                onChangeText={text => setDeviceNo(text)}
                value={deviceNo}
                placeholder = {deviceNo}
                maxLength={9}
                autoCapitalize='none'
                label= 'Device Number' 
                 />
     <TextInput
                style={{ margin: 1, borderColor: colors.graydark, fontSize: 12, backgroundColor: colors.accent}}
                label= 'Alias'
                onChangeText={text => setAlias(text)}
                value={alias}
                placeholder = {alias}
                maxLength={9}
                autoCapitalize='none'
                 />
<View style={{ margin: 1 ,padding: 10, backgroundColor: colors.accent }}>
  <Text style={{ color: colors.graydark, fontSize: 12}}>High Value</Text>
    <MaskInput style={{padding: 8}}
       placeholder={highValue}
       value={highValue}
       mask={[/\d/, /\d/,".",/\d/, /\d/]}
       onChangeText={txt => setHighValue(txt)}
    /> 
</View>
<View style={{ margin: 1, padding: 10, backgroundColor: colors.accent}}>
  <Text style={{ color: colors.graydark, borderColor: colors.graydark, fontSize: 12}}>Low Value</Text>
    <MaskInput style={{padding: 8}}
       placeholder={highValue}
       value={lowValue}
       mask={[/\d/, /\d/,".",/\d/, /\d/]}
       onChangeText={txt => setLowValue(txt)}
    /> 
</View>

<View style={{ margin: 1, padding: 10, backgroundColor: colors.accent }}>
  <Text style={{ color: colors.graydark, borderColor: colors.graydark, fontSize: 12}}>Accuracy</Text>
    <MaskInput style={{padding: 8, shadowColor: colors.accent}}
       placeholder={accuracy}
       value={accuracy}
       mask={[/\d/,".",/\d/, /\d/]}
       onChangeText={txt => setAccuracy(txt)}
    /> 
</View>      
  </View>
</DeviceRow>  
     <DeviceRow>
        <Button onPress={() => navigation.goBack()} style={{backgroundColor: colors.graydark}} mode='contained' uppercase={false}>Save</Button>   
        <Button onPress={()=> handleSubmit()} style={{backgroundColor: colors.graydark}} mode='contained' uppercase={false}>Cancel</Button>     
     </DeviceRow> 
</TouchableView>
</DeviceTouchable>
</DeviceBackground>
  );
}


export default DeviceValueSection;



function handleSubmit(): void {
  throw new Error('Function not implemented.');
}

