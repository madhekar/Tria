import React, { FunctionComponent } from 'react';
import { Alert, FlatList } from 'react-native';
import styled from 'styled-components';

const DeviceList = styled(FlatList)`
width: 100%;
flex: 1;
padding-left: 37px;
padding-bottom: 37px;
`;

//components
import  DeviceItem from '../Devices/DeviceItem';


//types
import { DeviceSectionProps } from './types';

const DeviceSection: FunctionComponent<DeviceSectionProps> = (props) => {

  function updateSettings(id: number, alias: string, nhigh: string, nlow: string ){
    props.data[id].alias = alias;
    props.data[id].highValue = nhigh;

    Alert.alert('updating with new values ' + id.toString() +' :' + alias +' :' + nhigh +' :' + nlow);
}
  return (
    <DeviceList
       data={props.data}
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{
          paddingRight: 25,
          alignItems: "center",
       }}
       keyExtractor={({id}: any) => id.toString()}
       renderItem={({item}: any) => <DeviceItem {...item} updateDevice= {updateSettings}/>}
    />

  );
};

export default DeviceSection;