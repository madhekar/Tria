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

import { addDevice, updateDevice } from '../components/State/triaSlice/deviceSlice';
import { useAppDispatch, useAppSelector  } from '../components/State/hooks';

const HomeContainer = styled(Container)`
    background-color: ${colors.graylite};
    width: 100%;
    flex:2;
`;

//types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import TriaConnect from './TriaConnect';
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
    
   // var data = LoadDefault.prepareDeviceSettings();
   var deviceList = useAppSelector((state) => state.device.deviceList);

    // deviceData current
    const inputData = [
        {
            id: 1,
            deviceid: "Thermometer",
            title: "TRIA#1",
            unit: " F",
            value:  67.89,
            timestamp: dt,
            art: {
                icon: "thermometer",
                background: colors.accent,
            },
        },        
        {
            id: 2,
            deviceid: "Humidiy",
            title: "TRIA#1",
            unit: " %rh",
            value: 66.98,
            timestamp: dt,
            art: {
                icon: "drop",
                background: colors.accent,
            },
        },
        {
            id: 3,
            deviceid: "AirQuality",
            title: "TRIA#1",
            unit: " ppm",
            value:  230,
            timestamp: dt,
            art: {
                icon: "air",
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
       value: 'off',
       art: {
        icon: "fan",
        background: colors.accent,
        },
      },
      {
        id: 5,
        name: 'de-humidifier',
        unit: 'boolean',
        value: 'off',
        art: {
            icon: 'air-humidifier-off',
            background: colors.accent
        }
      }
    ];

  return (
  <HomeContainer>
      <StatusBar style='dark'/>
      <TriaConnect /> 
      <DeviceSection data={deviceList}  />
      <InputSection data={inputData} />
      <OutputSection data={outputData} />
  </HomeContainer>
  )
};
export default Home;



