import React, {FunctionComponent} from 'react';
import { StyleProp, TextStyle, View } from 'react-native';
import styled from 'styled-components';


//custom components
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import { colors } from '../colors';

const StyledView = styled(View)`
    flex-direction: column;
    flex: 1;
    justify-content: center;
`;

interface GreetingProps {
    mainText: string;
    subText: string;
    mainTextStyles?: StyleProp<TextStyle>;
    subTextStyles?: StyleProp<TextStyle>;
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
  return (
    <StyledView>
        <RegularText
        textStyles={[
            {
                color: colors.secondary,
                fontSize: 15,
                textAlign: 'left',
            },
            props.mainTextStyles,    
        ]}
        >
        {props.mainText}
        </RegularText>
        <SmallText
        textStyles ={[
            {
                color: colors.graydark,
                textAlign: 'left',
            },
            props.subTextStyles,
        ]}
        >
            {props.subText}
        </SmallText>
    </StyledView>
  );
};

export default Greeting


