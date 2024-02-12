import React, {useState, useEffect} from 'react';
import { View, Button, Modal, Text, TouchableOpacity, StyleSheet,Dimensions, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements';
import AddBTNIcon from "../assets/icons/AddBTNIcon.svg";
import ProductList from "./ProductList";
import Line from "../assets/icons/Line";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firestore from '@react-native-firebase/firestore';

const AddDailyExpense = ({selectedDate, items, nameArr, quantityArr, priceArr}) => {
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
  useEffect(() => {
    console.log(tagsArr[tagsArr.length - 1]); // 최신 업데이트된 값 출력
  }, [tagsArr]);
  useEffect(() => {
    console.log(payArr[payArr.length - 1]); // 최신 업데이트된 값 출력
  }, [payArr]);

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

  const handleAddShop = () => {
    setShopArr(prevShopArr => [...prevShopArr, shop]);
    console.log(shopArr);
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
            <Text onPress={
            handleAddShop}>SHOP</Text>
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