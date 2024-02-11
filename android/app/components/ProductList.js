import React, {useState, useEffect} from 'react';
import { View, Button, Modal, Text, TouchableOpacity, StyleSheet,Dimensions, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements';
import AddBTNIcon from "../assets/icons/AddBTNIcon.svg";
import SmallAddBTNGrey from "../assets/icons/SmallAddBTNGrey";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductList = ({productlistData, selectedDate}) => {
  const [products, setProducts] = useState([]);
  const [inputs, setInputs] = useState([{ itemNameArr: [], quantityArr: [], priceArr: [] }]);

  const [itemNameArr, setItemNameArr] = useState([itemName]);
  const [quantityArr, setQuantityArr] = useState([quantity]);
  const [priceArr, setPriceArr] = useState([price]);

  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  //--input 바뀌었을 때--\\
  const handleInputChange = (text, index, key) => {
    const newInputs = [...inputs];
    newInputs[index][key] = text;
    setInputs(newInputs);
  };
  //--input 받기--\\
  const handleAddItem = () => {
    const newItem = inputs[inputs.length - 1];
    if (newItem.quantity && newItem.itemName && newItem.price) {
      setProducts([...products, newItem]);
      saveData(); // 데이터 저장
      setInputs([...inputs, { itemNameArr: [], quantityArr: [], priceArr: [] }]); // 입력값 초기화
    }
  };
  //--모든 TextInput이 값이 채워졌는지 확인(안채우면 add안됨)--\\
  const areInputsFilled = () => {
    return inputs.every(input => input.quantity && input.itemName && input.price);
  };
  //--AsyncStorage에 데이터 저장--\\
  const saveData = async () => {
    try {
      await AsyncStorage.setItem('products', JSON.stringify(products));
      await AsyncStorage.setItem('inputs', JSON.stringify(inputs));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  //--AsyncStorage에서 데이터 불러오기--\\
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedProducts = await AsyncStorage.getItem('products');
        const storedInputs = await AsyncStorage.getItem('inputs'); // inputs 불러오기

        if (storedProducts) {
          setProducts(JSON.parse(storedProducts));
        }
        if (storedInputs) {
          setInputs(JSON.parse(storedInputs)); // inputs 설정
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, []);

  return (
    <View style={{ alignItems: 'center' }}>
       {inputs.map((input, index) => (
        <View key={index} style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
          <TextInput
            placeholder="항목 입력"
            style={[styles.input, { width: 100 }]}
            value={input.itemName}
            onChangeText={(text) => handleInputChange(text, index, 'itemName')}
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
       <TouchableOpacity onPress={areInputsFilled() ? handleAddItem : null} style={{ marginTop: 10, marginBottom:10 }}>
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