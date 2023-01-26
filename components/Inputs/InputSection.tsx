import React, {FunctionComponent} from 'react';
import { View, FlatList } from 'react-native';

import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons';
import { ScreenWidth } from '../shared';

//colors
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import InputItem from './InputItem';

import UseBLE from '../Connection/UseBLE';

const InputSectionBackground = styled(View)`
   padding-horizontal: 5px;
   width: ${ScreenWidth*.99}px;
   flex: 2;
`;

const InputRow = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
`;

const InputList = styled(FlatList)`
    padding-left: 5px;
    width: 100%;
`;

//types
import { InputSectionProps } from './types';

const InputSection: FunctionComponent<InputSectionProps> = (props) =>{

     const {
    triaData,
      } = UseBLE();

    return (
     <InputSectionBackground>
        <InputRow style={{marginBottom: 5}}>
           <RegularText textStyles={{fontSize: 15, color: colors.secondary}}>
               Sensors  {triaData.split(':')[0]}
           </RegularText>
           <RegularText textStyles={{color: colors.secondary}}>
               Recent
               <Ionicons name='caret-down' size={15} color={colors.graydark}/>
           </RegularText>
        </InputRow>
        <InputList 
        data={props.data} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 15,
        }}
        keyExtractor={({id}: any) => id.toString()}
        renderItem={({item}: any) => <InputItem {...item}/>}
        />
        </InputSectionBackground>
    );
};

export default InputSection;