import React,{FunctionComponent} from 'react'
import styled from 'styled-components';
import {View} from 'react-native';
import { useBetween } from 'use-between';
import { TriaState } from '../Connection/TriaState';

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

const InputItem:FunctionComponent<InputProps> = (props) => {

  const useSharedTriaState = () => useBetween(TriaState);  
  const {triaDeviceData, 
        triaDeviceTimestamp,
        } = useSharedTriaState();

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