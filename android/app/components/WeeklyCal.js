import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import moment from 'moment';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import firestore from "@react-native-firebase/firestore";

const WeeklyCal = ({ selectedDate, handleDayClick }) => {
  const [amounts, setAmounts] = useState({});
  const startOfWeek = moment(selectedDate || new Date()).startOf('week');
  const weekDays = Array.from({ length: 7 }, (_, index) => moment(startOfWeek).add(index, 'day'));
  const circleRadius = 16;

  useEffect(() => {
    getAmountsForWeek(weekDays).then((amounts) => {
      setAmounts(amounts);
    });
  }, [selectedDate]);

  const getAmountForDate = async (date) => {
    try {
      const userId = 'xxvkRzKqFcWLVx4hWCM8GgQf1hE3';
      const docRef = firestore().collection(userId).doc(date);
      const docSnapshot = await docRef.get();

      if (docSnapshot.exists) {
        const data = docSnapshot.data();
        return data.amount || 0;
      } else {
        return 0;
      }
    } catch (error) {
      console.error('Error fetching amount from date:', error);
      return 0;
    }
  };

  const getAmountsForWeek = async (weekDays) => {
    const amounts = {};
    for (let day of weekDays) {
      const amount = await getAmountForDate(day.format('YYYY-MM-DD'));
      amounts[day.format('YYYY-MM-DD')] = amount;
    }
    return amounts;
  };
  
  return (
    <View style={styles.container}>
      {weekDays.map((day, index) => (
        <View
          key={index}
          onPress={() => handleDayClick(day.format('YYYY-MM-DD'))}
          style={{
            flex: 1,
            marginTop: 5,
            alignItems: 'center',
          }}
        >
          <View>
            <Svg height={circleRadius * 4} width={circleRadius * 2}>
              <Circle
                cx={circleRadius}
                cy={circleRadius}
                r={circleRadius}
                fill={day.format('YYYY-MM-DD') === selectedDate ? 'orange' : 'transparent'}
              />

              <SvgText
                x={circleRadius}
                y={circleRadius + 4}
                fontSize={12}
                fontWeight="bold"
                textAnchor="middle"
                fill={day.format('YYYY-MM-DD') === selectedDate ? 'white' : 'black'}
              >
                {day.format('DD')}
              </SvgText>
                {/* 지출금액 나오는 텍스트*/}
                <Text style={styles.expenseText}>{amounts[day.format('YYYY-MM-DD')]} </Text>
            </Svg>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({

  container:{
    padding: 20,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 80,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expenseText:{
    marginTop:28,
    textAlign:'center',
    color:'grey',
    fontSize:11
  }
})


export default WeeklyCal;