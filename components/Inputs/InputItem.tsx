import React,{FunctionComponent, useEffect,useState} from 'react'
import {useTimeout} from 'usehooks-ts';
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
    flex: 2.4;
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

  const [sendDisp, setSendDisp] = useState(true);
  const send = () => setSendDisp(false)
  useTimeout(send, 10000)

  const useSharedTriaState = () => useBetween(TriaState);  
  const {triaDeviceData, triaDeviceSetting } = useSharedTriaState();  

 const sdata: Array<TxData> = useAppSelector((state: RootState) => state.triadata.tdataList);

const updateChart = (sdata: TxData[]) => {
 
    labels = sdata.map((l: TxData) => (l.timeStamp.trim()));
    tvals = sdata.map((l: TxData) => (l.txValue.trim()));
    
    console.log(labels[0] ,tvals[0])
    //Alert.alert(labels[0] ,tvals[0])
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
{/*             <RegularText
             textStyles={{
                color: colors.secondary,
                textAlign: 'left',
                marginBottom: 2,
             }}>
                {props.title}
            </RegularText> */}
            <RegularText 
              textStyles={{
                textAlign: 'left',
                color: colors.graydark,
                fontSize: 15,
              }}>
                {triaDeviceData.trim().split(':')[props.id - 1] || 0}
            </RegularText>
            <RegularText 
              textStyles={{
                textAlign: 'left',
                color: colors.graydark,
              }}>
              {props.unit}
            </RegularText>

{/*             <SmallText 
              textStyles={{
                textAlign: 'left',
                color: colors.graydark,
              }}>
                {props.deviceid}
            </SmallText> */}
        </View>
    </LeftView>
    <RightView>
       <LineChart
                data={{
                  labels:  labels,
                  datasets: [
                    {
                      data: tvals.map(s => parseFloat(s.trim().split(':')[props.id -1]) || 0),
                    }
                  ]
                }}
                width={Dimensions.get("window").width * .80} // from react-native
                height={100}
                /* yAxisSuffix={props.unit}  */
                yAxisInterval={1} // optional, defaults to 1
                verticalLabelRotation={30}
                //withHorizontalLines={false}
                //withVerticalLines={false}
                chartConfig={{
                  backgroundColor:colors.fawn ,//"#e26a00",
                  backgroundGradientFrom: colors.accent,//"#fb8c00",
                  backgroundGradientTo:  colors.paleyellow ,//"#ffa726",
                  decimalPlaces: 1, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(128, 60, 10, ${opacity})`,  
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 1
                  },
                  propsForDots: {
                    r: "2",
                    strokeWidth: "1",
                    stroke: colors.blugreen,//"#ffa726"
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
