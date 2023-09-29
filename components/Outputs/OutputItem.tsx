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
   height: 85px;
   width: ${ScreenWidth * 0.28}px;
   padding: 10px;
   border-radius: 2px;
   justify-content: space-around;
   margin: 0px 7px 7px 0px; 
`;

//type
import { OutputProps } from './types';
import Profile from '../Header/Profile';
import OutputAvi from './OutputAvi';
import { useScrollViewOffset } from 'react-native-reanimated';

const OutputItem: FunctionComponent<OutputProps> = (props) => {

   let activationApplianceMap = ['11111', '01111' , '10111' , '00111', '11101', 
                                 '11011', '11001', '10001', '00011', '10101', 
                                 '10011', '01011','01110','11110','11100',
                                 '11010','01010','11000'];

   const useSharedTriaState = () => useBetween(TriaState);  
   const {triaDeviceStatus, 
         } = useSharedTriaState();

   const tactivationCd = triaDeviceStatus.split(':')[3];  
   var entry = activationApplianceMap[parseInt(tactivationCd, 10)];
   const value = entry?.charAt(props.id - 1) === '1' ? 'off' : 'on';
   let colorVal = value === 'on' ? colors.redlite : colors.accent;

  return (
    <OutputContainer
    underlayColor={colors.graylite}
    style={{ backgroundColor: colors.accent, alignItems: 'center'}}
    
    onPress={() =>{
        Alert.alert("Appliance Id: (" +props.id+ ") status: " + triaDeviceStatus);
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
