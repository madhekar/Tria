import React,{FunctionComponent} from 'react'
import styled from 'styled-components';
import {Alert, View} from 'react-native';
import { useBetween } from 'use-between';
import { TriaState } from '../Connection/TriaState';
import {useAppSelector} from '../State/hooks';
import { Tdata } from '../State/types';

//colors
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import InputAvi from './InputAvi';

const InputRow = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 10px;
`;

const LeftView = styled(View)`
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
    align-items: center;
    flex: 1;
`;

const RightView = styled(View)`
    flex: 1;
`;

//types
import {InputProps} from './types';
import UseBLE from '../Connection/UseBLE';
import { RingBuffer } from '../Custom/RingBuffer';
import { RootState } from '../State/store';
import getStorage from 'redux-persist/es/storage/getStorage';
import { tdataSlice } from '../State/triaSlice/tdataSlice';


const InputItem:FunctionComponent<InputProps> = (props) => {


  const useSharedTriaState = () => useBetween(TriaState);  
  const {triaDeviceData, triaDeviceTimestamp } = useSharedTriaState();  

/*         const mapStateToProps = (state: { get: (arg0: string) => any; }) => ({
         triaData: state.get('triadata')
       });      
*/ 
  //const sz =  useAppSelector((state: RootState) =>  state.triadata.tdataList);    
 // Alert.alert(sz.getFirst().ts);
 
  return (
    <InputRow>
    <LeftView>
        <InputAvi
        background={props.art.background}
        icon={props.art.icon}
        />
        <View style={{ marginLeft: 2}}>
            <RegularText
             textStyles={{
                color: colors.secondary,
                textAlign: 'left',
                marginBottom: 2,
             }}>
                {props.title}
            </RegularText>
            <SmallText 
              textStyles={{
                textAlign: 'left',
                color: colors.graydark,
              }}>
                {props.deviceid}
            </SmallText>
        </View>
    </LeftView>
    <RightView>
            <RegularText
             textStyles={{
                color: colors.graydark,
                textAlign: 'left',
                marginBottom: 2,
            }}>
                {triaDeviceData.split(':')[props.id - 1]} {props.unit} 
            </RegularText>
            <SmallText 
              textStyles={{
                textAlign: 'left',
                color: colors.graydark,
              }}>
                {triaDeviceTimestamp}
            </SmallText>      
    </RightView>
    </InputRow>
  );
};

export default InputItem; 
