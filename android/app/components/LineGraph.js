import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity , StyleSheet,} from 'react-native';
import {Dimensions} from 'react-native';
import {LineChart} from "react-native-chart-kit";
import { Dropdown } from 'react-native-element-dropdown';

const DropdownData =[
  { label: '최근 1주', value: '1' },
  { label: '최근 1개월', value: '2' },
  { label: '최근 3개월', value: '3' },
  { label: '최근 6개월', value: '4' },
  { label: '최근 1년', value: '5' },
];

const LineGraph = () => {
   const [value, setValue] = useState(null);
   const renderDropdown = () => {
     switch(value) {
       case '1': 
       return <View> 
        <LineChart
        data={data}
        width={320}
        height={220}
        withVerticalLines={false}
        chartConfig={chartConfig}
        bezier
        />
        </View>;
        break;
       case '2': 
       return <View>
        <LineChart
        data={data2}
        width={320}
        height={220}
        withVerticalLines={false}
        chartConfig={chartConfig}
        bezier
        />
        </View>;
        break;
       case '3': 
       return <View>
       <LineChart
       data={data3}
       width={320}
       height={220}
       withVerticalLines={false}
       chartConfig={chartConfig}
       bezier
       />
       </View>;
        break;
       case '4': 
       return <View>
       <LineChart
       data={data4}
       width={320}
       height={220}
       withVerticalLines={false}
       chartConfig={chartConfig}
       bezier
       />
       </View>;
        break;
       case '5': 
       return <View>
       <LineChart
       data={data5}
       width={320}
       height={220}
       withVerticalLines={false}
       chartConfig={chartConfig}
       bezier
       />
       </View>;
        break;
       default: 
       return <View>
       <LineChart
       data={data}
       width={320}
       height={220}
       withVerticalLines={false}
       chartConfig={chartConfig}
       bezier
       />
       </View>;
     }
   }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row',}}>
      <Text style={styles.Texts}>
        지출 추이
      </Text>
      <View style={styles.dropdown_container}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={DropdownData}
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder="최근 1주"
        value={value}
        onChange={(item) => {
          setValue(item.value);
        }}
      />
      </View>
      </View>
        {renderDropdown()}
    </View>
  );
}
////////////////////그래프//////////////
const data = {
  labels: ["Sun","Mon", "Tue", "Wed", "Thu", "Sat",],
  datasets: [
    {
      data: [30, 20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(254, 166, 85, ${opacity})`, // optional
      strokeWidth: 3 // optional
    }
  ],
};

const data2 = {
  labels: ["week1","week2", "week3", "week4", ],
  datasets: [
    {
      data: [30, 50, 45, 89, 80,],
      color: (opacity = 1) => `rgba(254, 166, 85, ${opacity})`, // optional
      strokeWidth: 3 // optional
    }
  ],
};

const data3 = {
  labels: ["month1","month2", "month3",  ],
  datasets: [
    {
      data: [130, 210,300],
      color: (opacity = 1) => `rgba(254, 166, 85, ${opacity})`, // optional
      strokeWidth: 3 // optional
    }
  ],
};

const data4 = {
  labels: ["m1","m2", "m3", "m4","m5","m6", ],
  datasets: [
    {
      data: [130, 210,300, 250, 110, 280],
      color: (opacity = 1) => `rgba(254, 166, 85, ${opacity})`, // optional
      strokeWidth: 3 // optional
    }
  ],
};

const data5 = {
  labels: [ "m1","m2", "m3", "m4","m5","m6", "m7","m8", "m9", "m10","m11", "m12",  ],
  datasets: [
    {
      data: [130, 210,300, 250, 110, 280, 130, 210,300 ,400, 123, 302],
      color: (opacity = 1) => `rgba(254, 166, 85, ${opacity})`, // optional
      strokeWidth: 3 // optional
    }
  ],
};
//////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width*0.9,
    height:Dimensions.get('window').height *0.35,
    backgroundColor: 'white',
    padding: 10,
    margin:20,
    marginTop:10,
    borderColor:'black',
    borderRadius:12,
  },

  Texts: {
    color: '#838383',
    //fontFamily: 'NanumGothic, sans-serif',
    fontSize: 12,
    marginLeft: 10,
  },

  dropdown_container: {
    marginLeft: 160,
    width:130,
    height:30,
    zIndex: 1000,
  },

  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
})

const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "white",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(55, 55, 55, ${opacity})`,
  strokeWidth: 3,
  barPercentage: 11,
  useShadowColorFromDataset: true,
};

export default LineGraph;