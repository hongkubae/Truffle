import React, {useState, useEffect} from 'react';
import { View, Button, Modal, Text, TouchableOpacity, StyleSheet,Dimensions, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements';
import AddBTNIcon from "../assets/icons/AddBTNIcon.svg";
import SmallAddBTNGrey from "../assets/icons/SmallAddBTNGrey";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firestore from "@react-native-firebase/firestore";

const ProductList = ({productlistData, selectedDate}) => {
  const [items, setItems] = useState([{ nameArr: [], quantityArr: [], priceArr: [] }]);

  const [nameArr, setNameArr] = useState([name]);
  const [quantityArr, setQuantityArr] = useState([quantity]);
  const [priceArr, setPriceArr] = useState([price]);

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  //--input 바뀌었을 때--\\
  const handleInputChange = (text, index, key) => {
    const newItems = [...items];
    newItems[index][key] = text;
  
    // 해당하는 값들을 nameArr, quantityArr, priceArr에 저장
    const { name, quantity, price } = newItems[index];
    const updatedNameArr = [...nameArr];
    const updatedQuantityArr = [...quantityArr];
    const updatedPriceArr = [...priceArr];
    updatedNameArr[index] = name;
    updatedQuantityArr[index] = quantity;
    updatedPriceArr[index] = price;
  
    // 상태 업데이트
    setNameArr(updatedNameArr);
    setQuantityArr(updatedQuantityArr);
    setPriceArr(updatedPriceArr);
  
    setItems(newItems);
  };
  //--input 받기--\\
  const handleAddItem = () => {
    const newItem = items[items.length - 1];
    if (newItem.quantity && newItem.name && newItem.price) {
      setNameArr(prevNameArr => [...prevNameArr, newItem.name]);
      setQuantityArr(prevQuantityArr => [...prevQuantityArr, newItem.quantity]);
      setPriceArr(prevPriceArr => [...prevPriceArr, newItem.price]);
  
      saveData();
      setItems(prevItems => [...prevItems, { nameArr: [], quantityArr: [], priceArr: [] }]);
      setName('');
      setQuantity('');
      setPrice('');
    }
    
    console.log(newItem.name, newItem.quantity, newItem.price);
  };

  //--모든 TextInput이 값이 채워졌는지 확인(안채우면 add안됨)--\\
  const areitemsFilled = () => {
    return items.every(input => input.quantity && input.name && input.price);
  };
  //--AsyncStorage에 데이터 저장--\\
  const saveData = async () => {
    try {
      await AsyncStorage.setItem(selectedDate, JSON.stringify(items));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  //--AsyncStorage에서 데이터 불러오기--\\
  useEffect(() => {
    const loadData = async () => {
      try {
        const storeditems = await AsyncStorage.getItem(selectedDate); // 해당 날짜의 items 불러오기
        if (storeditems) {
          setItems(JSON.parse(storeditems));
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, [selectedDate]);

  return (
    <View style={{ alignItems: 'center' }}>
       {items.map((input, index) => (
        <View key={index} style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
          <TextInput
            placeholder="항목 입력"
            style={[styles.input, { width: 100 }]}
            value={input.name}
            onChangeText={(text) => handleInputChange(text, index, 'name')}
          />
          <TextInput
            placeholder="수량"
            style={[styles.input, {width:40}]}
            value={input.quantity}
            keyboardType="number-pad"
            onChangeText={(text) => handleInputChange(text, index, 'quantity')}
          />
          <TextInput
            placeholder="가격"
            style={[styles.input, {width:100}]}
            value={input.price}
            keyboardType="number-pad"
            onChangeText={(text) => handleInputChange(text, index, 'price')}
          />
          <Text style={{ fontSize: 18 }}>₩</Text>
        </View>
      ))}
       <TouchableOpacity onPress={areitemsFilled() ? handleAddItem : null} style={{ marginTop: 10, marginBottom:10 }}>
        <SmallAddBTNGrey />
      </TouchableOpacity>
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
    height: 38,
    backgroundColor:'white',
    borderColor: 'gray',
    borderBottomWidth:1,
    marginBottom: 8,
    paddingHorizontal: 8,
    fontSize:14,
    textAlign:'center'
  },
});
export default ProductList;
