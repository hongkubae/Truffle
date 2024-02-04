import React from 'react';
import { View, Text, StyleSheet, Button,ScrollView, Dimensions } from 'react-native';
import AlarmItem from './AlarmItem';

const AlarmList = ({ alarms }) => {
  const sortedAlarms = alarms.slice().sort((a, b) => {
    const timeComparison = a.time.localeCompare(b.time);
    return timeComparison !== 0 ? timeComparison : b.days.length - a.days.length;
  });

  return (
    <View style={{justifyContent: 'center', alignItems:'center'}}>
    {sortedAlarms.map((alarm, index) => (
      <View key={index} style={styles.savedInfoContainer}>
        <AlarmItem alarm={alarm} />
      </View>
    ))}
  </View>
    
  );
};



const styles = StyleSheet.create({
  savedInfoContainer: {
    backgroundColor:'#EDEDED',
    height:75,
    width:Dimensions.get('window').width-20,
    marginTop:5,
    borderRadius:10
  },
})


export default AlarmList;