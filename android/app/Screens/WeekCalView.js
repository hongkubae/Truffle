import React, { useState, useEffect, } from 'react';
import { View, Text, TouchableOpacity , StyleSheet, TextInput, FlatList, SafeAreaView, ScrollView} from 'react-native';
import WeeklyCal from "../components/WeeklyCal";
import Receipt from "../components/Receipt";

const WeeklyCalView = ({ route, navigation }) => {
  const {selectedDate, handleDayClick}=route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <WeeklyCal selectedDate={selectedDate} handleDayClick={handleDayClick} />
          <View style={{marginTop:30}}>
            <Receipt selectedDate={selectedDate}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WeeklyCalView;