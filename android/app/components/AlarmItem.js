import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import ToggleSwitch from './ToggleSwitch';

const AlarmItem = ({ alarm }) => {
  const [isAlarmOn, setAlarmOn] = useState(true); // 초기값을 알람이 켜진 상태로 설정

  const toggleAlarm = () => {
    setAlarmOn(!isAlarmOn);
  };

  return (
    <View style={styles.alarmItemContainer}>
      <View style={{width:160}}>
        <Text style={{fontSize:30}}>{alarm.time}</Text>
        <Text>반복, {alarm.days}</Text>
      </View>
    <ToggleSwitch/>
    </View>
  );
};

const styles = StyleSheet.create({
  alarmItemContainer: {
    flexDirection: 'row',
    alignItems:'center',
    gap:140,
    padding:10
  },
});

export default AlarmItem;