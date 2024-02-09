import React, {useState} from 'react';
import { View, Button, Modal, Text, TouchableOpacity, StyleSheet,Dimensions, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements';
import AddBTNIcon from "../assets/icons/AddBTNIcon.svg";
import ProductList from "./ProductList";
import Line from "../assets/icons/Line";
const AddDailyExpense = ({ EditVisible, toggleAddDailyExpense, selectedDate }) => {

  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [itemName, setItemName] = useState('');
  const [shop, setShop] = useState('');
  const [dailyExpense, setDailyExpense] = useState('0');
  const [cashOrCard, setCashOrCard] = useState(null);
  const [tags, setTags] = useState(null);

  //--장보기 외식 배달 string 변환--\\
  const handleTags = (buttonName) => {
    if(buttonName=='shopping'){
      setTags(buttonName);
      return console.log('장보기');
    }else if (buttonName == 'eatOut'){
      setTags(buttonName);
      return console.log('외식');
    }
    else{
      setTags(buttonName);
      return console.log('배달');
    }
  };

//--현금 카드 string 변환--\\
  const handleCashOrCard = (buttonName) => {
    if(buttonName=='cash'){
      setCashOrCard(buttonName);
      return console.log('현금');
    }else{
      setCashOrCard(buttonName);
      return console.log('카드');
    }
  };

  return (
      <View style={{alignItems:'center', marginTop:20}}>
        <ProductList/>
        <Line/>

        <View style={{alignItems:'flex-start', marginLeft:-20}}>
          <View style={styles.tagStyle}>
            <Text>PAY</Text>
            <TouchableOpacity
              style={[styles.button, cashOrCard === 'cash' && styles.selectedButton]}
              onPress={() => handleCashOrCard('cash')}
            >
            <Text style={[styles.buttonText, cashOrCard === 'cash' && styles.selectedButtonText]}>현금</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, cashOrCard === 'card' && styles.selectedButton]}
              onPress={() => handleCashOrCard('card')}
            >
            <Text style={[styles.buttonText, cashOrCard === 'card' && styles.selectedButtonText]}>카드</Text>
            </TouchableOpacity>    
          </View>

          <View style={styles.tagStyle}>
            <Text>SHOP</Text>
            <TextInput
            placeholder="..."
            style={styles.input}
            value={shop}
            onChangeText={(text) => setShop(text)}
            />
          </View>

          <View style={styles.tagStyle}>
            <Text>TAG</Text>

            <TouchableOpacity
              style={[styles.button, tags === 'shopping' && styles.selectedButton]}
              onPress={() => handleTags('shopping')}
            >
            <Text style={[styles.buttonText, tags === 'shopping' && styles.selectedButtonText]}>장보기</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, tags === 'eatOut' && styles.selectedButton]}
              onPress={() => handleTags('eatOut')}
            >
            <Text style={[styles.buttonText, tags === 'eatOut' && styles.selectedButtonText]}>외식</Text>
            </TouchableOpacity> 

            <TouchableOpacity
              style={[styles.button, tags === 'deliverty' && styles.selectedButton]}
              onPress={() => handleTags('deliverty')}
            >
            <Text style={[styles.buttonText, tags === 'deliverty' && styles.selectedButtonText]}>배달</Text>
            </TouchableOpacity> 
          </View>
        </View>
      <Line/>
    </View>
  );
};

const styles = StyleSheet.create({
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
    padding: 5,
    margin: 5,
    borderRadius: 5,
    borderColor:'#D4D4D4',
    borderWidth:1,
    width:60,
  },
  selectedButton: {
    borderColor: '#FEA655',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    borderWidth:1,
    width:60,
  },
  buttonText: {
    color: '#D4D4D4',
    fontSize: 14,
    textAlign:'center'
  },
  selectedButtonText: {
    color: '#FEA655',
    fontSize: 14,
    textAlign:'center'
  },
  tagStyle:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    marginTop:5,
    marginBottom:5
  }
  
});

export default AddDailyExpense;