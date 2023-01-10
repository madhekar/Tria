import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
//components
import  DeviceItem from '../Devices/DeviceItem';
//types
import { DeviceSectionProps } from './types';

const DeviceList = styled(FlatList)`
width: 100%;
flex: 1;
padding-left: 37px;
padding-bottom: 37px;
`;



const DeviceSection: FunctionComponent<DeviceSectionProps> = (props) => {
  return (
    <DeviceList
       data={props.data}
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{
          paddingTop: 10,
          paddingRight: 25,
          alignItems: "center",
       }}
       keyExtractor={({id}: any) => id.toString()}
       renderItem={({item}: any) => <DeviceItem {...item}/>}
    />

  );
};

export default DeviceSection;