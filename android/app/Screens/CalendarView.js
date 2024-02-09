import React, { useState, useEffect, } from 'react';
import { View, Text, TouchableOpacity , StyleSheet, TextInput, FlatList} from 'react-native';
import { Table, Row } from 'react-native-table-component';
import moment from 'moment';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import MonthlyCal from "../components/MonthlyCal";
import WeekCalView from "../Screens/WeekCalView";
import AddBTNIcon from "../assets/icons/AddBTNIcon.svg";
import LeftArrow from "../assets/icons/LeftArrow";
import RightArrow from "../assets/icons/RightArrow";

const CalendarView = ({navigation, props}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(moment());
  const [calendarData, setCalendarData] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState('');
  const [selectedMonth, setSelectedMonth] = useState(currentDate.month() + 1);
  const monthOptions = Array.from({ length: 12 }, (_, index) => index + 1);
  const circleRadius = 16;

  useEffect(() => {
    generateCalendar();
  }, [currentDate]);

  const generateCalendar = () => {
    const firstDay = moment(currentDate).startOf('month').startOf('week');
    const lastDay = moment(currentDate).endOf('month').endOf('week');

    const rows = [];
    let days = [];
    let day = firstDay;

    while (day.isBefore(lastDay)) {
      for (let i = 0; i < 7; i++) {
        days.push({
          date: day.format('YYYY-MM-DD'),
          dayOfWeek: day.format('ddd'),
          isCurrentMonth: day.isSame(currentDate, 'month'),
        });
        day.add(1, 'day');
      }
      rows.push(days);
      days = [];
    }

    setCalendarData(rows);
  };



const goToPreviousMonth = () => {
    setCurrentDate(moment(currentDate).subtract(1, 'month'));
  };

  const goToNextMonth = () => {
    setCurrentDate(moment(currentDate).add(1, 'month'));
  };

  const handleMonthChange = (value) => {
    setCurrentDate(moment(currentDate).month(value - 1));
    setSelectedMonth(value);
  };

  const handleDayClick = (date) => {
      setSelectedDate(date);
    console.log('Clicked on date:', date);
  };

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
        <TouchableOpacity onPress={goToPreviousMonth}>
            <LeftArrow/>
          </TouchableOpacity>
          <Text>{currentDate.format('yyyy년 M월')}</Text>
          <TouchableOpacity onPress={goToNextMonth}>
            <RightArrow/>
          </TouchableOpacity>
        </View>
      
        <Table>
          <MonthlyCal calendarData={calendarData} selectedDate={selectedDate} handleDayClick={handleDayClick} />
        </Table>

        <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('WeekCalView', {selectedDate:selectedDate, handleDayClick:handleDayClick})}>
        <AddBTNIcon/>
      </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    button:{
      position: 'absolute',
      bottom: -160,
      left: 280,
      zIndex:1
    },
    container:{
      padding: 20,
      marginLeft: 30,
      marginRight: 30,
      marginTop: 80,
      borderRadius: 10,
      backgroundColor: 'white',
      height: 460,
    },
  })

export default CalendarView;