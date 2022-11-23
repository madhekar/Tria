import React, {FunctionComponent} from 'react';
import { TouchableHighlight, Alert } from 'react-native';
import styled from 'styled-components';
import { useBetween } from 'use-between';
import { TriaState } from '../Connection/TriaState';

import { colors } from "../colors";
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import { ScreenWidth } from '../shared';


const OutputContainer = styled(TouchableHighlight)`
   height: 90px;
   width: ${ScreenWidth * 0.27}px;
   padding: 5px;
   border-radius: 10px;
   justify-content: space-around;
   margin: 0px 10px 10px 0px; 
`;

//type
import { OutputProps } from './types';
import Profile from '../Header/Profile';
import OutputAvi from './OutputAvi';
import { useScrollViewOffset } from 'react-native-reanimated';

const OutputItem: FunctionComponent<OutputProps> = (props) => {

   let activationApplianceMap = ['1111', '0111' , '1011' , '0011', '1110', '1101', '1100', '1000', '0001', '1010', '1001', '0101'];

   const useSharedTriaState = () => useBetween(TriaState);  
   const {triaDeviceStatus, 
         } = useSharedTriaState();

   const tactivationCd = triaDeviceStatus.split(':')[3];  
   var entry = activationApplianceMap[parseInt(tactivationCd, 10)];
   const value = entry?.charAt(props.id - 1) === '1' ? 'off' : 'on';
   let colorVal = value === 'on' ? colors.redlite : colors.gray;

  return (
    <OutputContainer
    underlayColor={colors.graylite}
    style={{ backgroundColor: colors.accent, alignItems: 'center'}}
    
    onPress={() =>{
        Alert.alert("Appliance Status :" + triaDeviceStatus );
    }}>
   <>     
      <OutputAvi
        background={colorVal}
        icon={props.art.icon} 
      />

      <RegularText textStyles={{
         color: colors.black,
         textAlign: 'center',
         fontSize: 13,
      }}>
       {props.name} : {value}
     </RegularText>
   </>
 </OutputContainer>
    );
};

export default OutputItem
