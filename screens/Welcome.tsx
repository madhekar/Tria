import React, { FunctionComponent, useState} from "react";
// import {useTimeout} from 'usehooks-ts';
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
height: 80%;
`;

const TopSection = styled(View)`
width: 100%;
flex: 1;
max-height: 80%
`;

const BottomSection = styled(View)`
  width: 100%;
  padding: 20px;
  flex: .2;
  justify-content: flex-end;
`;

const TopImage =  styled(Image)`
width: 100%;
height: 100%;
resize: cover;
border-bottom-right-radius: 75px
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
import { updateMessage } from "../components/State/triaSlice/messageSlice";
import { useAppDispatch, useAppSelector  } from '../components/State/hooks';


const Welcome : FunctionComponent<Props> = ({navigation}) => {

  const dispatch = useAppDispatch();

    return (
        <>
          <StatusBar style="light" /> 
          <WelcomeContainer>
            <TopSection>
                <TopImage source={background} />
            </TopSection>
            <BottomSection>
                <BigText textStyles= {{width: "90%", marginBottom: 20, fontWeight: 'bold', color: colors.black }}>
                  Tria: Space climate controller
                </BigText>
                <SmallText textStyles= {{width: "90%", marginBottom: 30, color: colors.black, fontWeight: 'bold'}}>
                  Best tool for space climet control to maintain best quality indoor _environment.  
                </SmallText>
                <RegularButton textStyles={{  color: colors.black, 
                fontWeight:'bold', marginTop: 8}} onPress={() => { 
                  navigation.navigate('DrawerNav');   
                  setTimeout(() => { 
                    dispatch(updateMessage({id: 7, msg: "C:GS:0", sent: false}));
                  }, 10000); 
                 }}>
                    Get started..
                </RegularButton>
            </BottomSection>
          </WelcomeContainer>
        </>
    );
};
export default Welcome;