import React, { FunctionComponent , type PropsWithChildren, useState, useEffect, createContext, useImperativeHandle, Ref, RefObject, forwardRef} from 'react'
import styled from 'styled-components';
import { useBetween } from 'use-between';
import DeviceModal from  '../components/Connection/DeviceConnectionModel';
import UseBLE from '../components/Connection/UseBLE';
import {Device} from 'react-native-ble-plx';
import { ScreenWidth, ScreenHeight } from '../components/shared';
import { TriaState, TriaSettings } from '../components/Connection/TriaState';

import { useAppDispatch, useAppSelector  } from '../components/State/hooks';
import { addMessage, updateMessage } from '../components/State/triaSlice/messageSlice';

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
import { Message } from '../components/State/types';

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
const mList = useAppSelector((state: RootState) => state.message.messageList);
//Alert.alert(mList.map(v => Object.values(v).join(':')).join('\n'));
//const useSharedTriaSettings = () => useBetween(TriaSettings);

const {
  triaDeviceData,
  setTriaDeviceData,
  triaDeviceTimestamp,
  setTriaDeviceTimestamp,
  triaDeviceStatus,
  setTriaDeviceStatus,
} = useSharedTriaState();


useEffect(() => { setTriaDeviceData(triaData.trim());       }, [triaData]);
useEffect(() => { setTriaDeviceTimestamp(timestamp.trim()); }, [timestamp]);
useEffect(() => { setTriaDeviceStatus(triaStatus.trim());   }, [triaStatus]);


useEffect(() => sendStatus(mList), [mList]);

const sendStatus = (mList : Message[]) => {
  if (mList.map(md => Object.values(md).some(d => false))) {
     const writeTria = mList.filter((md) => md.sent == false).map(({id,msg,sent}) => ({id, msg,sent}));
     if (writeTria.length > 0){
      writeTria.map((d)=>{
          writeSettingsToTria(d.msg);
          dispatch(updateMessage( {id: d.id , msg: d.msg, sent: true}))
         });
     }
  }
}

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
