import React, { useState, useEffect, } from 'react';
import { View, Text, TouchableOpacity , StyleSheet, Dimensions, extInput, FlatList, SafeAreaView, ScrollView} from 'react-native';
import WeeklyCal from "../components/WeeklyCal";
import Receipt from "../components/Receipt";

const WeeklyCalView = ({ route, navigation }) => {
  const {selectedDate, handleDayClick}=route.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.Texts}>Calendar</Text>
          <WeeklyCal selectedDate={selectedDate} handleDayClick={handleDayClick} />
          <View style={{marginTop:30}}>
            <Receipt selectedDate={selectedDate}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

  mainHeader:{
    flexDirection: 'row',
    marginTop:20,
    marginLeft: 210,
    gap:20}
})
export default WeeklyCalView;
