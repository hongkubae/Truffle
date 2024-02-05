import React, {useState, useEffect}  from "react";
import { Button, View, StyleSheet, Text, Dimensions, TouchableOpacity, Switch, ScrollView, Platform , Modal, SafeAreaView} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DatePicker from 'react-native-date-picker';
import PushNotification from 'react-native-push-notification';
import AlarmList from '../components/AlarmList'; 
import InformationIcon from "../assets/icons/InformationIcon.svg";
import AddBTNIcon from "../assets/icons/AddBTNIcon.svg";
import AlarmInfoAlert from "../components/AlarmInfoAlert";
//import firebaseAdmin from '../app/firebaseAdmin';
const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

const AlarmView = () => {
  const [isAlarmOn, setAlarmOn] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedDays, setSelectedDays] = useState([false, false, false, false, false, false, false]);
  const [modalVisible, setModalVisible] = useState(false);
  const [alarms, setAlarms] = useState([]);
  const [infoVisible, setinfoVisible] = useState(false);

  //--알람 설정 토글 보이기||안보이기--\\
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  //--인포 토글 보이기||안보이기--\\
  const infoToggleModal = () => {
    setinfoVisible(!infoVisible);
  };

  //--반복 날짜 설정--\\
  const handleDayPress = (index: number) => {
    const updatedSelectedDays = [...selectedDays];
    updatedSelectedDays[index] = !updatedSelectedDays[index];
    setSelectedDays(updatedSelectedDays);
  };

  //--알람 시간 설정--\\
  const getTimeFromDate = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  };

  //--반복 날짜 보이기--\\
  const getSelectedDaysText = () => {
    const selectedDaysText = daysOfWeek
      .filter((day, index) => selectedDays[index])
      .join(', ');

    return selectedDaysText !== '' ? selectedDaysText : '날짜 반복이 없습니다';
  };

  //--알람 추가 로직--\\
  const handleAddAlarm = () => {
    const time = getTimeFromDate(date);
    const daysText = getSelectedDaysText();

    // 새로운 알람 추가
    const newAlarms = [...alarms, { time, days: daysText }];
    setAlarms(newAlarms);

    console.log(`Selected Time: ${time}`);
    console.log(`Selected Days: ${daysText}`);

    // 알람을 스케줄링
    if (date) {
      PushNotification.localNotificationSchedule({
        message: '알람이 울립니다!',
        date: date,
      });
    }

    toggleModal();
  };

  const toggleAlarm = () => {
    setAlarmOn(!isAlarmOn);

    if (isAlarmOn) {
      PushNotification.cancelAllLocalNotifications();
    }
  };

  return (
  <SafeAreaView>
   <ScrollView>
    <View style={styles.container}>
      
      <Text style={styles.Title}>Alarm</Text>

      <View style={{flexDirection: 'row', gap:5, alignItems:'center'}}>
      <Text style={styles.underHeaderText}>내 알람</Text>
      <TouchableOpacity>
        <InformationIcon marginTop={25} onPress={infoToggleModal}/>
      </TouchableOpacity>
      </View>
      
      <AlarmInfoAlert infoVisible={infoVisible} infoToggleModal={infoToggleModal}/>

      <TouchableOpacity
        style={styles.button}
        onPress={toggleModal}>
        <AddBTNIcon width={75} height={75}/>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{color:'black', fontSize:15}}>알람 설정</Text>
            <Text style={{fontSize:10, marginTop:3}}>꾸준한 기록을 위해 알람으로 알려드릴게요</Text>

            <DatePicker
              date={date}
              mode="time"
              local='ko'
              title={null}
              onDateChange={setDate}
              androidVariant='iosClone'
              marginTop={10}
            />

            <View style={styles.daysOfWeekContainer}>
              {daysOfWeek.map((day, index) => (
                <TouchableOpacity
                  key={day}
                  style={[styles.dayButton, {borderColor: selectedDays[index] ? '#FEA655' : '#EDEDED'}]}
                  onPress={() => handleDayPress(index)}
                >
                  <Text style ={{color: selectedDays[index] ? '#FEA655' : '#DBDBDB'}}>{day}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={{ flexDirection: 'row',gap:20, marginTop: 30, }}>
              <TouchableOpacity
                style={styles.selectBtn}
                onPress={toggleModal}>
                <Text style={[styles.btnText, ,{ color:'#FE2D2D'}]}>삭제</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.selectBtn}
                onPress={handleAddAlarm}>
                <Text style={styles.btnText}>저장</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <AlarmList alarms={alarms} />
    </View>
  </ScrollView>
</SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height ,
    backgroundColor: '#f8f9fa',
  },

  Title:{
    color: '#474646',
    //fontFamily: 'NanumGothic, sans-serif',
    fontSize: 24,
    alignItems:"center",
    justifyContent:"center",
    marginLeft: 22,
    marginTop: 30,
  },

  underHeaderText: {
    color: '#474646',
    //fontFamily: 'NanumGothic, sans-serif',
    fontSize: 24,
    marginLeft: 25,
    marginTop: 15,
  },

  button:{
    marginTop:10,
    marginLeft:285,
    position: 'absolute',
    bottom: 150,
    left: 30,
    zIndex:1
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    backgroundColor: 'white',
    margin:20,
    padding:35,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  selectBtn: {
    borderRadius: 2,
    padding: 10,
    elevation: 2,
    backgroundColor: '#EDEDED',
    width:113,
    height:36,
    alignItems:'center'
  },

  btnText: {
    color:'black',

  },

  daysOfWeekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    gap:5
  },

  dayButton: {
    borderWidth: 2,
    borderRadius: 5,
    width:24,
    height:24,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center'
  }
})


export default AlarmView;