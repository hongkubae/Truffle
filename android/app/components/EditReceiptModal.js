import React, {useState} from 'react';
import { View, Button, Modal, Text, TouchableOpacity, StyleSheet,Dimensions, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { ListItem } from 'react-native-elements';
import Line from "../assets/icons/Line";
import AddDailyExpense from "./AddDailyExpense";
import AddBTNIcon from "../assets/icons/AddBTNIcon";
import TruffleLogo from "../assets/logo/TruffleLogo";

const EditReceiptModal = ({ EditVisible, toggleEditModal, selectedDate }) => {

  const [dailyExpense, setDailyExpense] = useState('0');
  const [expenseCount, setExpenseCount] = useState(0);

  const handleAddExpense = () => {
    setExpenseCount(prevCount => prevCount + 1);
  };

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
        <View style={styles.modalContainer}>
          <View style={{alignItems:'center', marginTop:50}}>
            <TouchableOpacity onPress={handleAddExpense}>
              <AddBTNIcon />
            </TouchableOpacity>
            <Text>{selectedDate}</Text>
            <Text style={{fontSize:38,}}>{dailyExpense} 원</Text>
            <Line/>
            <AddDailyExpense/>
            <Line/>

            {[...Array(expenseCount)].map((_, index) => (
            <AddDailyExpense key={index} />
            ))}
            <Text>MEMO</Text>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor:'#F8F9FA'
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
    height: 35,
    width:100,
    borderColor: 'gray',
    borderBottomWidth:1,
    fontSize:14,
    textAlign:'center'
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
  
});

export default EditReceiptModal;
