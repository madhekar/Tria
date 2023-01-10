import React, { FunctionComponent } from 'react'
import { ScreenWidth } from '../shared';
import GAppSetting from '../../screens/GAppSetting';
import { SettingPropsList } from './types';
import { colors } from '../colors';
import styled from 'styled-components';
import { FlatList, View } from 'react-native';
import AppSettingItem from './AppSettingItem';

const SettingPropsBackground = styled(View)`
  padding-horizontal: 25px;
  width: ${ScreenWidth* .99}px;
  flex: 2;

`;

const SettingList = styled(FlatList)`
width: 100%;
flex: 1;
padding-left: 37px;
padding-bottom: 37px;
`;


const AppSetting: FunctionComponent<SettingPropsList> = (props) => {
  return (
    <SettingPropsBackground>

    <SettingList 
    data={props.data}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
       paddingTop: 10,
       paddingRight: 25,
       alignItems: "center"
    }}
    keyExtractor={({id}: any) => id.toString()}
    renderItem={({item}: any) => <AppSettingItem {...item} />}
    />

  </SettingPropsBackground>
  );
};

export default AppSetting;
