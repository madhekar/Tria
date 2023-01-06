import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { SettingProps } from '../../settings/types';

const SetingRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;
const LeftView = styled(View)`
flex-direction: row;
justify-content: flex-start;
height: 100%;
align-items: center;
flex: 1;
`;

const RightView = styled(View)`
  flex:1;
`;

const AppSettingItem: FunctionComponent<SettingProps>  = (props) => {
  return (
    <SetingRow>
      <LeftView>

      </LeftView>
      <RightView>
        
      </RightView>
    </SetingRow>
  )
};

export default AppSettingItem;
