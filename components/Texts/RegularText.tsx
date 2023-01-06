import React, { FunctionComponent } from "react";
import { Text } from 'react-native';
import styled from "styled-components";
//colors
import  { colors } from "../colors"

const StyledText = styled(Text)`
   font-size: 14px;
   color: ${colors.black};
   text-align: left;
   font-family: Lato-Bold;
`;

//types
import { TextProps } from "./types";


const RegularText : FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.textStyles}> { props.children }</StyledText>;
};

export default RegularText;