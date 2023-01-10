import React, { FunctionComponent } from 'react';
import { View, TouchableHighlight , ViewPagerAndroidOnPageScrollEventData} from 'react-native';
import styled from 'styled-components';
import { SettingProps } from './types';
import { colors } from '../colors';
import BigText from '../Texts/BigText';
import RegularText from '../Texts/SmallText';


const SettingTouchable = styled(TouchableHighlight)`
  height: 100%;
  border-radius: 20px;
`;  

const TouchableView = styled(View)`
  flex-direction: row;
  justify_content: space-between;
  align-items: center;
  width: 100%;
`;

const SettingRow = styled(View)`
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
    <SettingRow>
      <LeftView>
        <View style={{marginLeft: 2}}> 
          <BigText textStyles={{
             color: colors.secondary,
             textAlign: 'left'
            }}>
            {props.title}
          </BigText>
          <RegularText textStyles={{
            color: colors.graydark,
            textAlign: 'left',
            }}>
            {props.subTitle}
          </RegularText>
        </View>
      </LeftView>
    </SettingRow>
  )
};

export default AppSettingItem;
