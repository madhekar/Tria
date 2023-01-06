import React, { FunctionComponent } from 'react'
import GAppSetting from '../../screens/GAppSetting';
import { SettingPropsList } from './types';
import { colors } from '../colors';
import styled from 'styled-components';
import {FlatList} from 'react-native';


const SettingList = styled(FlatList)`
width: 100%;
flex: 1;
padding-left: 37px;
padding-bottom: 37px;
`;


const AppSetting: FunctionComponent<SettingPropsList> = (props) => {
  return (
    <SettingList 
    data={props.data}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
       paddingTop: 10,
       paddingRight: 25,
       alignItems: "center",
    }}
    keyExtractor={({id}: any) => id.toString()}
    renderItem={({item}: any) => <AppSettingItem {...item} />}
  />
  );
};

export default AppSetting;
