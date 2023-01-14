import React, {FunctionComponent} from 'react';
import { StyleProp, TextStyle, View } from 'react-native';
import styled from 'styled-components';


//custom components
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import { colors } from '../colors';
import { useAppSelector } from '../State/hooks';
import { RootState } from '../State/store';

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

  const sList = useAppSelector((state: RootState) => state.setting.settingList);  
  
  return (
    <StyledView>
        <RegularText
           textStyles={[ { color: colors.secondary, fontSize: 16,textAlign: 'left'} , props.mainTextStyles ]} >
           {props.mainText} {sList.find((o: { id: number; }) => o.id == 1).subTitle}
        </RegularText>
        <SmallText
            textStyles ={ [{ color: colors.graydark, textAlign: 'left'} ,props.subTextStyles ]} >
            {props.subText} 
        </SmallText>
    </StyledView>
  );
};

export default Greeting


