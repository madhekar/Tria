import React,{FunctionComponent} from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

// custom components
import {colors} from '../colors';

// icons
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const StyledView = styled(View)`
    height: 45px;
    width: 45px;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
`;

// types
import { OutputAviProps } from './types';

const OutputAvi: FunctionComponent<OutputAviProps> = (props) => {
  return (
   <StyledView style={{ backgroundColor: props.background}}>
        <MaterialCommunityIcons name={props.icon} size={25} color={colors.black}/>
   </StyledView>
  );
};

export default OutputAvi;