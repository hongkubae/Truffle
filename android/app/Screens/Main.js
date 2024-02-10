import React from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity, ScrollView,Image, Dimensions } from "react-native";
import LineGraph from "../components/LineGraph";
import DonutChart from "../components/DonutChart";
import BellIcon from "../assets/icons/BellIcon";
import AlarmIcon from "../assets/icons/AlarmIcon";

const Main = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <ScrollView>

      <View style={{flexDirection: 'row'}}>
        <Text style={Styles.Texts}>
          Truffle
        </Text>
      

        <View style={Styles.mainHeader}>
        <TouchableOpacity onPress={()=>navigation.navigate('AddModifyView')}>
          <BellIcon/>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>navigation.navigate('AlarmView')}>
        <AlarmIcon/>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop:30}}>
      <DonutChart/>
      </View>
      <LineGraph />

      </ScrollView>
    </View>
  );
}


const Styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height ,
    backgroundColor: '#F8F9FA',
  },
  Texts: {
    color: '#474646',
    //font-family: NanumGothic,
    fontSize: 24,
    marginLeft: 22,
    marginTop: 20,
  },
  Bell:{
    size: 50,
    color: "#99A5B3",
    marginTop: 80,
  },
  mainHeader:{
    flexDirection: 'row',
    marginTop:20,
    marginLeft: 210,
    gap:20}
})
export default Main;