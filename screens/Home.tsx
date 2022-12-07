import React, {FunctionComponent, useCallback, useEffect, useRef, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import moment from 'moment';

//custom components
import { Container } from '../components/shared';
import { colors } from '../components/colors';
import DeviceSection from '../components/Devices/DeviceSection';
import InputSection  from '../components/Inputs/InputSection';
import OutputSection from '../components/Outputs/OutputSection';

const HomeContainer = styled(Container)`
    background-color: ${colors.graylite};
    width: 100%;
    flex:2;
`;

//types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import TriaConnect from './TriaConnect';
import LoadDefault from '../components/Custom/LoadDefault';
export type props = StackScreenProps<RootStackParamList, 'Home'>;


const Home: FunctionComponent = () => {

    var dt = moment().format("MM/DD/YYYY HH:mm:ss");
/*  const useSharedTriaState = () => useBetween(TriaState);  
    const {triaDeviceData, 
       triaDeviceStatus, 
       triaDeviceTimestamp,
       setTriaDeviceData,
       setTriaDeviceStatus,
       setTriaDeviceTimestamp } = useSharedTriaState(); */
    
   var data = LoadDefault.prepareDeviceSettings();
             
    const deviceData = [
        {
            id: 1,
            deviceNo: "Tria9X99",
            alias: "Temperature",
            highValue: '80',
            lowValue: '75',
            accuracy: '0.01',
            art: {
                icon: "thermometer",
                background: colors.accent,
            },
        },       
        {
            id: 2,
            deviceNo: 'Tria10X01',
            alias: 'Humidity',
            highValue: '65',
            lowValue: '45',
            accuracy: '0.01',
            art: {
                icon: "droplet",
                background: colors.accent,
            },
        },
        {
            id: 3,
            deviceNo: "Tria9X98",
            alias: "Air Quality",
            highValue: '3000',
            lowValue: '0',
            accuracy: '0.01',
            art: {
                icon: "wind",
                background: colors.accent,
            },
        },
        {
            id: 4,
            deviceNo: "Tria10X08",
            alias: "Hazard Gases",
            highValue: '300',
            lowValue: '0',
            accuracy: '0.01',
            art: {
                icon: "wind",
                background: colors.accent,
            },
        },
    ];

    // deviceData
    const inputData =[
        {
            id: 1,
            deviceid: "Tria-Temperature",
            title: "EshaRoom",
            unit: "F",
            value:  67.89,
            timestamp: dt,
            art: {
                icon: "thermometer",
                background: colors.accent,
            },
        },        
        {
            id: 2,
            deviceid: "Tria-Humidity",
            title: "EshaRoom",
            unit: "%rh",
            value: 66.98,
            timestamp: dt,
            art: {
                icon: "droplet",
                background: colors.accent,
            },
        },
        {
            id: 3,
            deviceid: "Tria-AirQuality",
            title: "EshaRoom",
            unit: "ppm",
            value:  230,
            timestamp: dt,
            art: {
                icon: "wind",
                background: colors.accent,
            },
        },
    ];

    // applianceData
    const outputData = [  
        {
        id: 1,
        name: 'Heater',
        unit: 'boolean',
        value: 'on',
        art: {
            icon: "car-defrost-front",
            background: colors.accent,
        },
      },
      {
        id: 2,
        name: 'Humidifier',
        unit: 'boolean',
        value: 'off',
        art: {
            icon: "air-humidifier",
            background: colors.accent,
        },
      },
      {
        id: 3,
        name: 'Air Purifier',
        unit: 'boolean',
        value: 'off',
        art: {
            icon: "air-purifier",
            background: colors.accent,
        },
      },    
      {
       id: 4,
       name: 'Fan',
       unit: 'boolean',
       value: 'on',
       art: {
        icon: "fan",
        background: colors.accent,
        },
      }
    ];

  return (
  <HomeContainer>
      <StatusBar style='dark'/>
      <TriaConnect /> 
      <DeviceSection data={deviceData}  />
      <InputSection data={inputData} />
      <OutputSection data={outputData} />
  </HomeContainer>
  )
};
export default Home;



