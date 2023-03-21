import React, { FunctionComponent , type PropsWithChildren, useState, useEffect, createContext, useImperativeHandle, Ref, RefObject, forwardRef} from 'react'
import styled from 'styled-components';
import { useBetween } from 'use-between';
import {useTimeout} from 'usehooks-ts';
import DeviceModal from  '../components/Connection/DeviceConnectionModel';
import UseBLE from '../components/Connection/UseBLE';
import { ScreenWidth} from '../components/shared';
import { TriaState } from '../components/Connection/TriaState';

import { useAppDispatch, useAppSelector  } from '../components/State/hooks';
import { updateMessage } from '../components/State/triaSlice/messageSlice';
import { updateDevice } from '../components/State/triaSlice/deviceSlice';
import { addTdata } from '../components/State/triaSlice/tdataSlice';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Alert
} from 'react-native';


import { colors } from '../components/colors';
import { RootState } from '../components/State/store';
import { Message } from '../components/State/types';
import moment from 'moment';

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
    triaSetting
  } = UseBLE();

const useSharedTriaState = () => useBetween(TriaState);  
// redux dispatch
const dispatch = useAppDispatch();
const mList = useAppSelector((state: RootState) => state.message.messageList);
const dList = useAppSelector((state: RootState) => state.device.deviceList);


const {
  triaDeviceData,
  setTriaDeviceData,
  triaDeviceSetting,
  setTriaDeviceSetting,
  triaDeviceStatus,
  setTriaDeviceStatus,
} = useSharedTriaState();

useEffect(() => { setTriaDeviceData(triaData.trim());  
                  dispatch(addTdata({txValue: triaData.trim(), timeStamp: moment().format("MM/DD/YYYY HH:mm:ss")}));
                  }, [triaData]);
useEffect(() => { setTriaDeviceSetting(triaSetting.trim()); /* Alert.alert(triaSetting.trim(), triaSetting.trim().split(':')[0]);*/ triaSetting ? dispatch(updateDevice({ 
                                                                                   id: parseInt(triaSetting.trim().split(':')[0]), 
                                                                                   deviceNo: dList[parseInt(triaSetting.trim().split(':')[0])-1].deviceNo,
                                                                                   alias:  dList[parseInt(triaSetting.trim().split(':')[0])-1].alias,
                                                                                   highValue: parseFloat(triaSetting.trim().split(':')[2]).toFixed(1),
                                                                                   lowValue: parseFloat(triaSetting.trim().split(':')[3]).toFixed(1),
                                                                                   accuracy: dList[parseInt(triaSetting.trim().split(':')[0])-1].accuracy,
                                                                                   art: { icon: '', background: '' }
                                                                                   })) : NaN}, [triaSetting]);
useEffect(() => { setTriaDeviceStatus(triaStatus.trim()); /* dispatch(addTstatus({tsv: triaStatus.trim()})) */  }, [triaStatus]); 


useEffect(() => sendStatus(mList), [mList]);

// time delay after bluetooth is active
const [sendDisp, setSendDisp] = useState(true);
const send = () => setSendDisp(false)
useTimeout(send, 10000)

const sendStatus = (mList : Message[]) => {
  if (mList.map(md => Object.values(md).some(d => false))) {
     //Alert.alert(mList.map(v => Object.values(v).join(':')).join('\n'));
     const writeTria = mList.filter((md) => md.sent == false).map(({id,msg,sent}) => ({id, msg,sent}));
     if (writeTria.length > 0){
      writeTria.map((d)=>{
        //Alert.alert(d.msg);
          console.log(d.msg);
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
      useTimeout(send, 10000)
      send ? console.log("waiting..") : dispatch(updateMessage({id: 7, msg: "C:GS:0", sent: false}));
      /*dispatch(updateMessage( {id: 7, msg: "C:GS:0", sent: false})); */
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
              thumbColor={connectedDevice ? colors.yellowdark : colors.graydark}
              trackColor={{true: colors.gray, false: colors.graylite}}
              ios_backgroundColor={colors.graylite}
              style={{transform:[{ scaleX: .5 }, { scaleY: .5 }] }}
              >
        </Switch>
    </TouchableOpacity>

{/*         <TouchableOpacity onPress={openModal}
          style={styles.ctaButton}>
            
        <Text style={styles.ctaButtonText}>
            {connectedDevice ? 'Disconnect' : 'Connect'} 
          </Text> 
        </TouchableOpacity> */}
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
