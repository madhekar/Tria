import React, { FunctionComponent } from "react";
import { Text } from 'react-native';
import styled from "styled-components";
//colors
import  { colors } from "../colors"

const StyledText = styled(Text)`
   font-size: 12px;
   color: ${colors.black};
   text-align: left;
   font-family: Lato-Regular;
`;

//types
import { TextProps } from "./types";


const SmallText : FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.textStyles}> { props.children }</StyledText>;
};

export default SmallText;