import React, {FunctionComponent, useRef, useMemo, useEffect} from 'react';
import { View, FlatList , TouchableOpacity, Alert} from 'react-native';
import styled from 'styled-components';
import BottomSheet  from 'reanimated-bottom-sheet';

//types
import { OutputSectionProps} from './types';

//components
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import OutputItem from './OutputItem';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import { Ionicons, EvilIcons, AntDesign, Entypo } from '@expo/vector-icons';


const OutputSectionBackground = styled(View)`
width: 100%;
padding-top: 10px;
background-color: ${colors.white};
`;

const OutputRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-horizontal: 25px;
`;

const OutputList = styled(FlatList)`
  width: 100%;
  flex: auto;
  min-height: 80%;
  padding-horizontal: 25px;
`;

const TextButton = styled(TouchableOpacity)`
flex: auto;
`;

const OutputSection: FunctionComponent<OutputSectionProps> = (props) => {
   
   const sheetRef = useRef<BottomSheet>(null);

   const snapPoints = useMemo(() => ['26%', '6%'], []);


   const renderContent = () =>{

    return (
    <OutputSectionBackground style={{backgroundColor: colors.white}}>

       <OutputRow style={{marginBottom: 10}}>
            <Entypo name='arrow-with-circle-up' size={20} color={colors.graydark} onPress={() => sheetRef.current?.snapTo(0)}/>
              <Entypo name='gauge' size={20} color={colors.graydark}/>
            {/*   <RegularText textStyles={{fontSize: 15, color: colors.secondary}}>Appliances</RegularText>  */}
            <Entypo name='arrow-with-circle-down' size={20} color={colors.graydark} onPress={() => sheetRef.current?.snapTo(1)}/>
      </OutputRow>

      <OutputList 
        data = {props.data}
        contentContainerStyle={{
            alignItems: "flex-start",
            marginTop: 6 }}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            keyExtractor={({id}: any) => id.toString()}
            renderItem={({item}: any) => <OutputItem {...item} />}
        />  

    </OutputSectionBackground>
    );
   };

  return (
    <GestureHandlerRootView style={{alignItems: 'center', height: '10%'}}>
     <BottomSheet
       //animateOnMount={true}
       ref={sheetRef}
       snapPoints={snapPoints}
       borderRadius={5}
       initialSnap={1}
       enabledContentGestureInteraction={true}
       enabledGestureInteraction={false}
       renderContent={renderContent}
      />
    </GestureHandlerRootView>
  );
};

export default OutputSection;
