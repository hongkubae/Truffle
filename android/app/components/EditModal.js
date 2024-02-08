import React, {useState} from 'react';
import { View, Button, Modal, Text, TouchableOpacity, StyleSheet,Dimensions, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements';
import Line from "../assets/icons/Line";
import AddDailyExpense from "./AddDailyExpense";
import AddBTNIcon from "../assets/icons/AddBTNIcon";

const EditModal = ({ EditVisible, toggleEditModal, selectedDate }) => {

  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [itemName, setItemName] = useState('');
  const [shop, setShop] = useState('');
  const [dailyExpense, setDailyExpense] = useState('0');


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={EditVisible}
      onRequestClose={() => {
        toggleEditModal();
      }}
    >
    <View style={styles.modalContainer}>
      <View style={{alignItems:'center', marginTop:50}}>
        <Text>{selectedDate}</Text>
        <Text>{dailyExpense} 원</Text>
        <Line/>
        <AddDailyExpense/>
        <Line/>
      </View>
        
       <TouchableOpacity onPress={toggleEditModal}>
          <Text>back to weekly cal view</Text>
        </TouchableOpacity>

      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height,
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

export default EditModal;
