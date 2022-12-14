import React, { FunctionComponent , type PropsWithChildren, useState, useEffect, createContext, useImperativeHandle, Ref, RefObject, forwardRef} from 'react'
import styled from 'styled-components';
import { useBetween } from 'use-between';
import DeviceModal from  '../components/Connection/DeviceConnectionModel';
import UseBLE from '../components/Connection/UseBLE';
import {Device} from 'react-native-ble-plx';
import { ScreenWidth, ScreenHeight } from '../components/shared';
import { TriaState, TriaSettings } from '../components/Connection/TriaState';

import { useAppDispatch, useAppSelector  } from '../components/State/hooks';
import { addMessage } from '../components/State/triaSlice/messageSlice';

import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';


import { colors } from '../components/colors';
import { Value } from 'react-native-reanimated';
import { RootState } from '../components/State/store';

const InputSectionBackground = styled(View)`
   padding-horizontal: 20px;
   width: ${ScreenWidth*.99}px;
   flex: .1;
`;

const ButtonWeapper = styled(View)`
padding-horizontal: px,
width: ${ScreenWidth*.99}px;
flex: .5;
`;

const TriaConnect: FunctionComponent = () => {

  const {
    requestPermissions,
    scanForDevices,
    allDevices,
    connectToDevice,
    connectedDevice,
    disconnectFromDevice,
    writeSettingsToTria,
    triaData,
    triaStatus,
    timestamp,
  } = UseBLE();

const useSharedTriaState = () => useBetween(TriaState);  
// redux dispatch
const dispatch = useAppDispatch();
const mList = useAppSelector((state: RootState) => state.message.messageList );
//const useSharedTriaSettings = () => useBetween(TriaSettings);

const {
  triaDeviceData,
  setTriaDeviceData,
  triaDeviceTimestamp,
  setTriaDeviceTimestamp,
  triaDeviceStatus,
  setTriaDeviceStatus,
} = useSharedTriaState();

/* const {
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
} = useSharedTriaSettings(); */

useEffect(() => { setTriaDeviceData(triaData.trim());       }, [triaData]);
useEffect(() => { setTriaDeviceTimestamp(timestamp.trim()); }, [timestamp]);
useEffect(() => { setTriaDeviceStatus(triaStatus.trim());   }, [triaStatus]);

  //setTriaDeviceData(triaData.trim);
 //const [tData, setTData] = useState<String>("");

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const hideModal = () => {
    setIsModalVisible(false);
  }

const openModal = async () => {
  requestPermissions((isGranted: boolean) => {
    if(isGranted) {
      scanForDevices();
      setIsModalVisible(true);
    }
  })
}

  /* const updateTriaSettings = () => {
    useEffect(() => {processSettingsData(triaTempHiChange); }, [triaTempHiChange]);
    useEffect(() => {processSettingsData(triaTempLoChange); }, [triaTempLoChange]);
    useEffect(() => {processSettingsData(triaTempHiChange); }, [triaHumHiChange]);
    useEffect(() => {processSettingsData(triaTempLoChange); }, [triaHumLoChange]);
    useEffect(() => {processSettingsData(triaAqHiChange); }, [triaAqHiChange]);
    useEffect(() => {processSettingsData(triaAqLoChange); }, [triaAqLoChange]);
  } */

  const processSettingsData = (sData: string) =>{
    writeSettingsToTria(sData.toString());
  }

  return (
      <InputSectionBackground>
        <TouchableOpacity onPress={openModal}
          style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>
            {connectedDevice ? 'Disconnect' : 'Connect'} 
          </Text>
        </TouchableOpacity>
        <DeviceModal
          closeModal={hideModal}
          visible={isModalVisible}
          connectToPeripheral={connectToDevice}
          devices={allDevices} />
         <TouchableOpacity>
          <Text style={styles.ctaButtonText}>
          </Text>
          </TouchableOpacity> 
      </InputSectionBackground>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  triaTitleWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roomAttributesTitleText: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 10,
    color: colors.black,
  },
  roomAttributesText: {
    fontSize: 10,
    marginTop: 1,
  },
  ctaButton: {
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    height: 15,
    marginHorizontal: 140,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.black,
  },
 }
);

export default TriaConnect ;
