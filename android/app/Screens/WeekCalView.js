import React, { useState, useEffect, } from 'react';
import { View, Text, TouchableOpacity , StyleSheet, TextInput, FlatList} from 'react-native';
import WeeklyCal from "../components/WeeklyCal";
import SwiperComp from "../components/SwiperComp";

const WeeklyCalView = ({ route, navigation }) => {
  const {selectedDate, handleDayClick}=route.params;

  return (
    <View>
      <Text>{selectedDate}</Text>
      <WeeklyCal selectedDate={selectedDate} handleDayClick={handleDayClick} />
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text>월간 보기</Text>
     </TouchableOpacity>
     
     <SwiperComp selectedDate={selectedDate}/>

    </View>

  );
};

export default WeeklyCalView;