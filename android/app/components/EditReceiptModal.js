import React, {useState} from 'react';
import { View, Button, Modal, Text, TouchableOpacity, StyleSheet,Dimensions, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { ListItem } from 'react-native-elements';
import Line from "../assets/icons/Line";
import AddDailyExpense from "./AddDailyExpense";
import AddBTNIcon from "../assets/icons/AddBTNIcon";
import TruffleLogo from "../assets/logo/TruffleLogo";
import SaveBTN from "../assets/icons/SaveBTN";
import LeftArrow from "../assets/icons/LeftArrow";

const EditReceiptModal = ({ EditVisible, toggleEditModal, selectedDate }) => {

  const [dailyExpense, setDailyExpense] = useState('0');
  const [expenseCount, setExpenseCount] = useState(0);
  const [memo,setMemo]=useState('');

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
        <View>
        <View style={styles.modalContainer}>
        <View  style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:5}}>
          <TouchableOpacity onPress={() => {toggleEditModal()}}>
          <LeftArrow height={30} width={30}/>
          </TouchableOpacity>
          <TruffleLogo height={30} width={30}/>
          <TouchableOpacity onPress={handleAddExpense}>
            <AddBTNIcon height={40} width={40}/>
          </TouchableOpacity>
        </View>

          <View style={{alignItems:'center', marginTop:20}}>
            <Text>{selectedDate}</Text>
            <View style={styles.expenseHeader}>
              <View style={{width:8}}></View>
              <Text style={styles.expenseText}>{dailyExpense}</Text>
              <Text style={styles.expenseText}>원</Text>
            </View>
            <Line/>
            <AddDailyExpense/>
            {[...Array(expenseCount)].map((_, index) => (
            <AddDailyExpense key={index} />
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
          onPress={() => {toggleEditModal()}}
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
    justifyContent:'space-between'
  }
  
});

export default EditReceiptModal;