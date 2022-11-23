import React, { FunctionComponent} from "react";
import { View, Image } from 'react-native';
import { StatusBar } from "expo-status-bar";
import styled from 'styled-components';
// custom component
import { colors } from "../components/colors";
import { Container } from "../components/shared";

const WelcomeContainer = styled(Container)`
background-color: ${colors.accent};
justify-content: space-between;
width:100%;
height: 100%;
`;

const TopSection = styled(View)`
width: 100%;
flex: 1;
max-height: 100%
`;

const BottomSection = styled(View)`
  width: 100%;
  padding: 20px;
  flex: .2;
  justify-content: flex-end;
`;

const TopImage =  styled(Image)`
width: 100%
height: 100%
resize-mode: cover;
`;
// image 
import background from "./../assets/bgs/stream-stones-trees.png";

//types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, 'Welcome'>;

//Text fonts
import BigText from "../components/Texts/BigText";
import RegularText from "../components/Texts/RegularText";
import SmallText from "../components/Texts/SmallText";
import RegularButton from "../components/Buttons/RegularButton";



const Welcome : FunctionComponent<Props> = ({navigation}) => {
    return (
        <>
          <StatusBar style="light" /> 
          <WelcomeContainer>
            <TopSection>
                <TopImage source={background} />
            </TopSection>
            <BottomSection>
                <BigText textStyles= {{width: "90%", marginBottom: 20,fontWeight: 'bold', color: colors.black }}>
                  Tria: Room climate controller
                </BigText>
                <SmallText textStyles= {{width: "90%", marginBottom: 30, color: colors.black, fontWeight: 'bold'}}>
              Best climet control for good night sleep.  
                </SmallText>
                <RegularButton textStyles={{color: colors.black, marginTop: 8}} onPress={() => {navigation.navigate('Home')}}>
                    Get Started...
                </RegularButton>
            </BottomSection>
          </WelcomeContainer>
        </>
    );
};
export default Welcome;