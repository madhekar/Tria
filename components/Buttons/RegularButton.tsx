import React, {FunctionComponent} from 'react';
import { Image, TouchableOpacity } from 'react-native'
import styled from "styled-components";
import {
    GestureResponderEvent,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';
//
import { colors } from '../colors';
import  RegularText from "./../Texts/RegularText";

const ButtonView = styled(TouchableOpacity)`
   align-items: center;
   justify-content: 'center';
   background-color: ${colors.yellowdark};
   width: 100%;
   height: 45px;
   border-radius: 15px;

`;
// types
interface ButtonProps{
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
    return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
        <RegularText textStyles= {props.textStyles}> {props.children}</RegularText>
    </ButtonView>
    ) ;
};

export default RegularButton;
