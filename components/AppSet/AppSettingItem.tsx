import React, { FunctionComponent, useState } from 'react';
import { View, TouchableHighlight, Keyboard, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-paper';
import styled from 'styled-components';
import { SettingProps } from './types';
import { colors } from '../colors';
import { updateSetting } from '../State/triaSlice/settingsSlice';
import { useAppDispatch } from '../State/hooks';
import { ScreenWidth } from '../shared';
import { updateMessage } from '../State/triaSlice/messageSlice';


const DeviceBackground = styled(ImageBackground)`
  height: 85%;
  width: ${ScreenWidth * 0.850}px;
  resize: cover; // resize-mode
  background-color: ${colors.accent};
  border-radius: 5px;
  margin-right: 5px;
  overflow:hidden;
`;

const SettingTouchable = styled(TouchableHighlight)`
  height: 100%;
  border-radius: 5px;
`;  

const TouchableView = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SettingRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2px;
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
        <View style={{ marginLeft: 2 ,flexDirection: 'column' ,flex: 4, justifyContent: 'space-between', paddingBottom: 1}}>
          <TextInput
            mode='flat'
            style={{  borderColor: colors.black, width:'100%', fontSize: 12, backgroundColor: colors.accent , height: 50 }}
            onChangeText={text => {setSubTitle(text); 
                                   dispatch(updateSetting({id: props.id, title: props.title, subTitle: text, type: props.type}));
                                   if(props.id === 4){
                                    (subTitle === "on") ? dispatch(updateMessage({id: props.id, msg: 'C:OP:1', sent: false})) :
                                    dispatch(updateMessage({id: props.id, msg: 'C:OP:0', sent: false}))
                                   } else if(props.id === 5){
                                    (subTitle === "on") ? dispatch(updateMessage({id: props.id, msg: 'C:AI:1', sent: false})) :
                                    dispatch(updateMessage({id: props.id, msg: 'C:AI:0', sent: false}))
                                   }
                                  }}
            multiline={false}
            onBlur={Keyboard.dismiss}
            value={subTitle}
            placeholder={props.subTitle}
            maxLength={20}
            autoCapitalize='none'
            label= {props.title}
            autoFocus />
        </View>
    </SettingRow>
  )
};

export default AppSettingItem;
