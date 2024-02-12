import React, {useState} from 'react';
import { View, Button, Modal, Text, TouchableOpacity, StyleSheet,Dimensions, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { ListItem } from 'react-native-elements';
import Line from "../assets/icons/Line";
import AddDailyExpense from "./AddDailyExpense";
import AddBTNIcon from "../assets/icons/AddBTNIcon";
import TruffleLogo from "../assets/logo/TruffleLogo";
import SaveBTN from "../assets/icons/SaveBTN";
import LeftArrow from "../assets/icons/LeftArrow";
//import AsyncStorage from "@react-native-community/async-storage";

const EditReceiptModal = ({ EditVisible, toggleEditModal, selectedDate, nameArr, quantityArr, priceArr, payArr, shopArr, tagsArr, handleAddShop  }) => {

  const [dailyExpense, setDailyExpense] = useState('0');
  const [expenseCount, setExpenseCount] = useState(0);
  const [memo,setMemo]=useState('');

  const handleAddExpense = () => {
    setExpenseCount(prevCount => prevCount + 1);
  };

  
  const [loading, setLoading] = useState(false);

  const handleSaveData = async () => {
    try {
    
      setLoading(true);
      const userId = 'xxvkRzKqFcWLVx4hWCM8GgQf1hE3';
      const totalPrice=1000;
      const date = '2024-02-29'; // 저장할 문서의 날짜
      const data = {
        amount: totalPrice,
        items: [
          { name: nameArr[0], quantity: quantityArr[0], price: priceArr[0] },
          { name: nameArr[1], quantity: quantityArr[1], price: priceArr[1] },
          { name: nameArr[2], quantity: quantityArr[2], price: priceArr[2] }
        ],
        pay: [
          { pay: payArr[0], shop: shopArr[0], tag: tagsArr[0] },
          { pay: payArr[1], shop: shopArr[1], tag: tagsArr[1] },
          { pay: payArr[2], shop: shopArr[2], tag: tagsArr[2] }
        ],
        memo: memo
      };

      // 파이어스토어에 데이터 저장
      await firestore().collection(userId).doc(date).set(data);

      Alert.alert('Success', 'Data saved successfully.');
    } catch (error) {
      console.error('Error saving data:', error);
      Alert.alert('Error', 'Failed to save data.');
    } finally {
      setLoading(false);
    }
  };

  const checkingArr = () => {
    console.log(nameArr, quantityArr, priceArr, payArr, shopArr, tagsArr);
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={EditVisible}
      onRequestClose={() => {
        toggleEditModal();
      }}
    >
    <SafeAreaView>
      <ScrollView>
        <View>
        <View style={styles.modalContainer}>
          {/* 뒤로 가기 로고 플러스 버튼*/}
        <View  style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:10}}>
          <TouchableOpacity onPress={() => {toggleEditModal()}}>
          <LeftArrow height={30} width={30}/>
          </TouchableOpacity>
          <TruffleLogo height={30} width={30}/>
          <TouchableOpacity onPress={handleAddExpense}>
            <AddBTNIcon height={35} width={35}/>
          </TouchableOpacity>
        </View>
          <View style={{alignItems:'center', marginTop:20}}>
            {/* 선택 날자 총액*/}
            <Text>{selectedDate}</Text>
            <View style={styles.expenseHeader}>
              <View style={{width:8}}></View>
              <Text style={styles.expenseText}>{dailyExpense.toLocaleString()}</Text>
              <Text style={{fontSize:24, fontWeight:'400'}}>원</Text>
            </View>
            <Line/>

            <AddDailyExpense selectedDate={selectedDate}/>
            {[...Array(expenseCount)].map((_, index) => (
            <AddDailyExpense selectedDate={selectedDate} key={index} />
            ))}

            <View style={styles.memoContainer}>
              <Text>MEMO</Text>
            </View>
            <TextInput
            placeholder="..."
            style={styles.input}
            value={memo}
            onChangeText={(text) => setMemo(text)}
            />
          </View>
          <TouchableOpacity
          style={{alignItems:'center', marginBottom:200}}
          onPress={checkingArr}
          >
            <SaveBTN/>
          </TouchableOpacity>
        </View>
        </View>
    </ScrollView>
  </SafeAreaView>
</Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor:'#F8F9FA',
    width: Dimensions.get('window').width,
  },
  modalContent: {
    backgroundColor: 'white',
    width: 304,
    height:310,
    borderRadius: 10,
  },
  HeaderText:{
    fontSize:14,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 150,
    width: Dimensions.get('window').width-100,
    borderColor: 'gray',
    borderWidth:0.5,
    fontSize:14,
    textAlign:'center',
    marginBottom:50,
    marginTop:10,
    borderRadius:10,
  },
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderColor:'#D4D4D4'
  },
  selectedButton: {
    borderColor: '#FEA655',
    padding: 10,
    margin: 5,
    borderRadius: 1,
  },
  buttonText: {
    color: '#D4D4D4',
    fontSize: 14,
  },
  selectedButtonText: {
    color: '#FEA655',
    fontSize: 14,
  },
  memoContainer:{
    width: Dimensions.get('window').width,
    alignItems:'flex-start',
    marginLeft:100,
    marginTop:10,
  },
  expenseText:{
    fontSize:38,
  },
  expenseHeader:{
    flexDirection:'row',
    width: Dimensions.get('window').width*0.7,
    justifyContent:'space-between',
    alignItems:'center'
  }
  
});

export default EditReceiptModal;
