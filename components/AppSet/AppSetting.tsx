import React, { FunctionComponent } from 'react'
import { ScreenWidth } from '../shared';
import GAppSetting from '../../screens/GAppSetting';
import { SettingPropsList } from './types';
import { colors } from '../colors';
import styled from 'styled-components';
import { FlatList, View ,ImageBackground, Text} from 'react-native';
import AppSettingItem from './AppSettingItem';
import device_bg from  '../../assets/bgs/bg_image1.png';

const DeviceBackground = styled(ImageBackground)`
  height: 90%;
  width: ${ScreenWidth * 0.850}px;
  resize-mode: cover;
  background-color: ${colors.accent};
  border-radius: 5px;
  margin-left: 20px;
  margin-right:5px;
  overflow:hidden;
`;

const TouchableView = styled(View)`
  justify-content: space-between;
  align-items: center;  
  padding: 30px;
  flex:1;
`;

const SettingPropsBackground = styled(View)`
  padding-horizontal: 5px;
  width: ${ScreenWidth* .80}px;
  flex: 1;

`;

const SettingList = styled(FlatList)`
width: 100%;
flex: 1;
padding-left: 37px;
padding-bottom: 37px;
`;


const AppSetting: FunctionComponent<SettingPropsList> = (props) => {
  return (
  <DeviceBackground source = {device_bg}>  
  
  <SettingPropsBackground>
    <Text style={{ fontWeight: 'bold',  fontSize:16,  color: colors.accent, padding: 5 ,borderRadius: 10, marginTop:10, marginBottom: 10, marginLeft:110}}>
        Tria Setting
    </Text>
    <SettingList 
       data={props.data}
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{
       paddingTop: 3,
       paddingRight: 5,
       alignItems: "center"
    }}
    keyExtractor={({id}: any) => id.toString()}
    renderItem={({item}: any) => <AppSettingItem {...item} />} />
  </SettingPropsBackground>
  </DeviceBackground>
  );
};

export default AppSetting;
