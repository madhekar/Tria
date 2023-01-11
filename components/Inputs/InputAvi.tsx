import React,{FunctionComponent} from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

// custom components
import {colors} from '../colors';

// icons
import { Feather } from '@expo/vector-icons';

const StyledView = styled(View)`
    height: 45px;
    width: 45px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

// types
import { InputAviProps } from './types';

const InputAvi: FunctionComponent<InputAviProps> = (props) => {
  return (
   <StyledView style={{ backgroundColor: props.background}}>
        <Feather name={props.icon} size={25} color={colors.graydark}/>
   </StyledView>
  );
};

export default InputAvi;
