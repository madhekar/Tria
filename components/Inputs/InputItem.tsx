import React,{FunctionComponent, useEffect} from 'react'
import styled from 'styled-components';
import {Alert, Dimensions, View} from 'react-native';
import { useBetween } from 'use-between';
import { TriaState } from '../Connection/TriaState';
import {useAppSelector} from '../State/hooks';
import { TxData } from '../State/types';
import { LineChart } from 'react-native-chart-kit';

//colors
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import InputAvi from './InputAvi';

const InputRow = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-bottom: 10px;
    margin-top: 5px;
`;

const LeftView = styled(View)`
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
    align-items: center;
    flex: 1;
`;

const RightView = styled(View)`
    flex: 1.8;
`;

//types
import {InputProps} from './types';
import UseBLE from '../Connection/UseBLE';
import { RootState, AppDispatch } from '../State/store';
import getStorage from 'redux-persist/es/storage/getStorage';
import { tdataSlice } from '../State/triaSlice/tdataSlice';
import TextSVG, {Svg, Rect} from 'react-native-svg';

 var labels: string[] = [];
 var tvals: string[] = [];

const InputItem:FunctionComponent<InputProps> = (props) => {


  const useSharedTriaState = () => useBetween(TriaState);  
  const {triaDeviceData, triaDeviceSetting } = useSharedTriaState();  

 const sdata: Array<TxData> = useAppSelector((state: RootState) => state.triadata.tdataList);

const updateChart = (sdata: TxData[]) =>{
    labels = sdata.map((l: TxData) => (l.timeStamp.trim()));
    tvals = sdata.map((l: TxData) => (l.txValue.trim()));
 }

 useEffect(() => updateChart(sdata), [sdata]);

  return (
    <InputRow>
    <LeftView>
        <InputAvi
        background={props.art.background}
        icon={props.art.icon}
        />
        <View style={{ marginLeft: 2}}>
            <RegularText
             textStyles={{
                color: colors.secondary,
                textAlign: 'left',
                marginBottom: 2,
             }}>
                {props.title}
            </RegularText>
            <RegularText 
              textStyles={{
                textAlign: 'left',
                color: colors.graydark,
              }}>
                {triaDeviceData.split(':')[props.id - 1] || 0}{props.unit}
            </RegularText>
            <SmallText 
              textStyles={{
                textAlign: 'left',
                color: colors.graydark,
              }}>
                {props.deviceid}
            </SmallText>
        </View>
    </LeftView>
    <RightView>

            <LineChart
                data={{
                  labels:  labels,
                  datasets: [
                    {
                      data: tvals.map(s => parseFloat(s.split(':')[props.id -1])|| 0),  
                    }
                  ]
                }}
                width={Dimensions.get("window").width * .64} // from react-native
                height={100}
                yAxisSuffix={props.unit} 
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor:colors.fawn ,//"#e26a00",
                  backgroundGradientFrom: colors.biscotti,//"#fb8c00",
                  backgroundGradientTo:  colors.accent ,//"#ffa726",
                  decimalPlaces: 1, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(100, 10, 40, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 1
                  },
                  propsForDots: {
                    r: "2",
                    strokeWidth: "2",
                    stroke: colors.palespringbug,//"#ffa726"
                  }
                }}
                bezier
                style={{
                  marginVertical: 1,
                  borderRadius: 5
                }}
/*                 decorator={() => {
                  return <View>
                  <Svg>
                      <Rect x={80} y={110} width="40" height="30" fill="black" />
                      <TextSVG
                          x={100}
                          y={130}
                          fill="white"
                          fontSize="16"
                          fontWeight="bold"
                          textAnchor="middle">
                          0.0
                      </TextSVG>
                  </Svg>
               </View>
             }} */
            /> 
    </RightView>
    </InputRow>
  );
};

export default InputItem; 
