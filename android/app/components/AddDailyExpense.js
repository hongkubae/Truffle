import React, {useState} from 'react';
import { View, Button, Modal, Text, TouchableOpacity, StyleSheet,Dimensions, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements';
import AddBTNIcon from "../assets/icons/AddBTNIcon.svg";
import ProductList from "./ProductList";
import Line from "../assets/icons/Line";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firestore from '@react-native-firebase/firestore';

const AddDailyExpense = ({selectedDate}) => {
  const [dailyExpense, setDailyExpense] = useState('0');
  
  const [inputTagList, setInputTaglist] = useState([{payArr: [], shopArr:[], tagsArr:[]}]);
  
  const [shop, setShop] = useState('');
  const [pay, setPay] = useState(null);
  const [tags, setTags] = useState(null);

  const [shopArr, setShopArr] = useState([shop]);
  const [payArr, setPayArr] = useState([pay]);
  const [tagsArr, setTagsArr] = useState([tags]);

  const [productlistData, setProductlistData]=useState('');

  const handleProductlistData = (data)=>{
    setProductlistData(data);
  };

  //--장보기 외식 배달 string 변환 변환 후 array에 저장--\\
  const handleTags = (buttonName) => {
    let tagsReturnVal = '';
    if(buttonName=='shopping'){
      setTags(buttonName);
      tagsReturnVal='장보기';
      
    }else if (buttonName == 'eatOut'){
      setTags(buttonName);
      tagsReturnVal='외식';
    }
    else{
      setTags(buttonName);
      tagsReturnVal='배달';
    }
    setTagsArr(prevTagsArr => [...prevTagsArr, tagsReturnVal]);
  };

//--현금 카드 string 변환 후 array에 저장--\\
  const handlepay = (buttonName) => {
    let btnReturnVal='';
    if(buttonName=='cash'){
      setPay(buttonName);
      btnReturnVal='현금';
    }else{
      setPay(buttonName);
      btnReturnVal='카드';
    }
    setPayArr(prevpayArr => [...prevpayArr, btnReturnVal]);
  };

  //----\\
  const saveTagsList = async () => {
    try {
      await AsyncStorage.setItem('products', JSON.stringify(products));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const [loading, setLoading] = useState(false);

  const handleSaveData = async () => {
    try {
      setLoading(true);
      const userId = 'xxvkRzKqFcWLVx4hWCM8GgQf1hE3';
      const date = '2024-02-11'; // 저장할 문서의 날짜
      const data = {
        amount: totalPrice,
        items: [
          { name: ["수박", "씨"], quantity: [1, 1], price: [20000, 5000] },
          { name: ["씨박"], quantity: [1], price: [10000] },
          { name: ["박씨", "발씨"], quantity: [3, 1], price: [2000, 500] }
        ],
        pay: [
          { pay: payArr[0], shop: shopArr[0], tag: tagArr[0] },
          { pay: payArr[1], shop: shopArr[1], tag: tagArr[1] },
          { pay: payArr[2], shop: shopArr[2], tag: tagArr[2] }
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

  return (
      <View style={{alignItems:'center', marginTop:20}}>
        <ProductList selectedDate={selectedDate} productlistData={handleProductlistData}/>
        <Line/>

        <View style={{alignItems:'flex-start', marginLeft:-20}}>
          <View style={styles.tagStyle}>
            <Text>PAY</Text>
            <TouchableOpacity
              style={[styles.button, pay === 'cash' && styles.selectedButton]}
              onPress={() => handlepay('cash')}
            >
            <Text style={[styles.buttonText, pay === 'cash' && styles.selectedButtonText]}>현금</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, pay === 'card' && styles.selectedButton]}
              onPress={() => handlepay('card')}
            >
            <Text style={[styles.buttonText, pay === 'card' && styles.selectedButtonText]}>카드</Text>
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