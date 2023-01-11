import React, { FunctionComponent , type PropsWithChildren, useState, useEffect, createContext, useImperativeHandle, Ref, RefObject, forwardRef} from 'react'
import styled from 'styled-components';
import { useBetween } from 'use-between';
import DeviceModal from  '../components/Connection/DeviceConnectionModel';
import UseBLE from '../components/Connection/UseBLE';
import { ScreenWidth, ScreenHeight } from '../components/shared';
import { TriaState } from '../components/Connection/TriaState';

import { useAppDispatch, useAppSelector  } from '../components/State/hooks';
import { addMessage, updateMessage } from '../components/State/triaSlice/messageSlice';
import { Tdata, Tstatus} from '../components/State/types';

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
  Switch
} from 'react-native';


import { colors } from '../components/colors';
import { Value } from 'react-native-reanimated';
import { RootState } from '../components/State/store';
import { Message } from '../components/State/types';
import { addTdata } from '../components/State/triaSlice/tdataSlice';
import { addTstatus } from '../components/State/triaSlice/tstatusSlice';
import { transformer } from '../metro.config';

const InputSectionBackground = styled(View)`
   padding-horizontal: 20px;
   width: ${ScreenWidth*.99}px;
   flex: .1;
`;

const ButtonWeapper = styled(View)`
padding-horizontal: .5px,
width: ${ScreenWidth*.1}px;
flex: .4;
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

/* useEffect(() => { dispatch(addTdata({tv: triaData.trim(), ts: timestamp.trim()}))},[triaData]);
   useEffect(() => { dispatch(addTstatus({tsv: triaStatus.trim()}))},[triaStatus]); 
*/
useEffect(() => sendStatus(mList), [mList]);

const sendStatus = (mList : Message[]) => {
  if (mList.map(md => Object.values(md).some(d => false))) {
     //Alert.alert(mList.map(v => Object.values(v).join(':')).join('\n'));
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

const hideModal = () => { setIsModalVisible(false); }

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
      <TouchableOpacity style={styles.ctaButton}>
        <Switch 
              onValueChange={openModal}
              onTintColor={colors.black}
              value={connectedDevice ? true : false} 
              thumbColor={connectedDevice ? colors.accent : colors.graydark}
              trackColor={{true: colors.gray, false: colors.gray}}
              ios_backgroundColor={colors.gray}
              style={{transform:[{ scaleX: .5 }, { scaleY: .5 }] }}
              >
        </Switch>
    </TouchableOpacity>

        <TouchableOpacity onPress={openModal}
          style={styles.ctaButton}>
            
{/*           <Text style={styles.ctaButtonText}>
            {connectedDevice ? 'Disconnect' : 'Connect'} 
          </Text> */}
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
    backgroundColor: colors.graylite,
    justifyContent: 'center',
    alignItems: 'center',
    size: .5,
    height: 25,
    marginHorizontal: 0,
    marginBottom: 1,
    borderRadius: 1,
  },
  ctaButtonText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.black,
  },
 }
);

export default TriaConnect ;
