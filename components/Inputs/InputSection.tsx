import React, {FunctionComponent} from 'react';
import { View, FlatList } from 'react-native';

import styled from 'styled-components'
import { Entypo, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { ScreenWidth } from '../shared';

//colors
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import InputItem from './InputItem';

import UseBLE from '../Connection/UseBLE';

const InputSectionBackground = styled(View)`
   padding-block: 5px; //horizontal
   width: ${ScreenWidth*.99}px;
   flex: 2;
`;

const InputRow = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 41%;
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
        <InputRow style={{marginBottom: 5, marginLeft: 5}}>
             <RegularText textStyles={{fontSize: 15, color: colors.secondary}}>
               Signals  {triaData.split(':')[0]}  
                <Ionicons name='radio-sharp' size={15} color={colors.graydark}/> 
             </RegularText> 
            <RegularText textStyles={{fontSize: 15, color: colors.secondary}}>
                Trends {triaData.split(':')[0]}
                <FontAwesome name='line-chart' size={15} color={colors.graydark}/>
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