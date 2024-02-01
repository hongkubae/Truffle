import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity , StyleSheet,AppRegistry,processColor,Dimensions} from 'react-native';
import PieChart from 'react-native-pie-chart'
import TruffleLogo from "../assets/logo/TruffleLogo.svg";

function DonutChart () {
  const series = [25, 21, 13, 42]
  const sliceColor = ['#D55A44', '#FEA655', '#FFD98E', '#ABABAB']

    return (
      <View style={Styles.container}>
        <Text style={Styles.Texts}>
          지출 통계
        </Text>
        <TruffleLogo style={Styles.Logo}/>
        <View style={{alignItems:'center'}}>
        <PieChart
            widthAndHeight={200}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.65}
            coverFill={'white'}            
          />
          </View>
          <View style={{alignItems:'center'}} marginTop={20}>
            <Text >
             장보기 배달 외식 
            </Text>
          </View>

      </View>
    );
  }

  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

const Styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width*0.9,
    height:Dimensions.get('window').height *0.35,
    backgroundColor: 'white',
    padding: 10,
    margin:20,
    marginTop:20,
    borderColor:'black',
    borderRadius:12,
  },

  Texts: {
    color: '#838383',
    //fontFamily: 'NanumGothic, sans-serif',
    fontSize: 12,
    marginLeft: 10,
  },

  chart: {
    flex: 1
  },
  Logo:{
    position: 'absolute',
    bottom: 130,
    left: Dimensions.get('window').width /2.6,
    zIndex:1,
  }

})

export default DonutChart;