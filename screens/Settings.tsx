import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';

// components
import { colors } from '../components/colors';
import {Container} from '../components/shared';
import DeviceValueSection from '../components/Settings/DeviceValueSection';

const SettingsContainer = styled(Container)`
background-color: ${colors.graylite};
width: 100%;
padding 25px;
flex: 1;
`;

//types
import { RootStackParamList } from '../navigators/RootStack';
import { StackScreenProps } from '@react-navigation/stack';
type props = StackScreenProps<RootStackParamList, "Settings">;

const Settings: FunctionComponent<props> = ({ route })=> {

    return (
      <SettingsContainer>
        <StatusBar style="dark" />
        <DeviceValueSection 
          id={route.params.id}
          deviceNo={route.params.deviceNo}
          alias={route.params.alias}
          highValue={route.params.highValue}
          lowValue={route.params.lowValue}
          accuracy={route.params.accuracy} 
            />
      </SettingsContainer>
    )
  }


export default Settings;
