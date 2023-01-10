import React, { FunctionComponent, useState } from 'react';
import { View, TouchableHighlight , ViewPagerAndroidOnPageScrollEventData, Keyboard, TextInput} from 'react-native';
import styled from 'styled-components';
import { SettingProps } from './types';
import { colors } from '../colors';
import BigText from '../Texts/BigText';
import RegularText from '../Texts/SmallText';
import { updateSetting } from '../State/triaSlice/settingsSlice';
import { useAppDispatch, useAppSelector  } from '../State/hooks';


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

  const dispatch = useAppDispatch();
  const [subTitle, setSubTitle] = useState(props.subTitle );


  function handleSubmit(arg0: {}) {
    throw new Error('Function not implemented.');
  }

  return (
    <SettingRow>
      <LeftView>
        <View style={{ marginLeft: 2 }}>
          <RegularText textStyles={{ color: colors.secondary, textAlign: 'left', fontSize: 14 }}>
            {props.title}
          </RegularText>
          <TextInput
            style={{ margin: 1, borderColor: colors.graydark, fontSize: 12,fontWeight: '300', backgroundColor: colors.accent }}
            onChangeText={text => {setSubTitle(text); dispatch(updateSetting({id: props.id, title: props.title, subTitle: subTitle}))}}
            multiline={false}
            onEndEditing={(e) => setSubTitle(e.nativeEvent.text)}
            onBlur={Keyboard.dismiss}
            value={subTitle}
            placeholder={props.subTitle}
            maxLength={30}
            autoCapitalize='none'
            autoFocus />
        </View>
      </LeftView>
    </SettingRow>
    
  )
};

export default AppSettingItem;
