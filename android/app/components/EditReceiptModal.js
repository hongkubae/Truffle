import React, {useState, useEffect} from 'react';
import { View, Button, Modal, Text, TouchableOpacity, StyleSheet,Dimensions, TextInput, ScrollView, SafeAreaView, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import Line from "../assets/icons/Line";
import SmallAddBTNGrey from "../assets/icons/SmallAddBTNGrey";
import AddBTNIcon from "../assets/icons/AddBTNIcon";
import TruffleLogo from "../assets/logo/TruffleLogo";
import SaveBTN from "../assets/icons/SaveBTN";
import LeftArrow from "../assets/icons/LeftArrow";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firestore from "@react-native-firebase/firestore";

const EditReceiptModal = ({ EditVisible, toggleEditModal, selectedDate}) => {

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
    const updatedNameArr = [...nameArr];
    const updatedQuantityArr = [...quantityArr];
    const updatedPriceArr = [...priceArr];
    updatedNameArr[index] = newItems[index].nameArr; // 수정
    updatedQuantityArr[index] = newItems[index].quantityArr; // 수정
    updatedPriceArr[index] = newItems[index].priceArr; // 수정
  
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
      setNameArr(prevNameArr => [...prevNameArr, newItem.nameArr]); // 수정
      setQuantityArr(prevQuantityArr => [...prevQuantityArr, newItem.quantityArr]); // 수정
      setPriceArr(prevPriceArr => [...prevPriceArr, newItem.priceArr]); // 수정
  
      saveData();
      setItems(prevItems => [...prevItems, { nameArr: [], quantityArr: [], priceArr: [] }]);
      setName('');
      setQuantity('');
      setPrice('');
    }
  };

  //--모든 TextInput이 값이 채워졌는지 확인(안채우면 add안됨)--\\
  const areitemsFilled = () => {
    return items.every(input => input.quantity && input.name && input.price);
  };
  //--AsyncStorage에 데이터 저장--\\
  const saveData = async () => {
    try {
      const dataToSave = items.map(item => ({
        nameArr: item.nameArr,
        quantityArr: item.quantityArr,
        priceArr: item.priceArr
      }));
      await AsyncStorage.setItem(selectedDate, JSON.stringify(dataToSave));
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
        const parsedItems = JSON.parse(storeditems);
        const initialItems = parsedItems.map(item => ({
          nameArr: item.nameArr,
          quantityArr: item.quantityArr,
          priceArr: item.priceArr
        }));
        setItems(initialItems);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };
  loadData();
}, [selectedDate]);
//--AddDailyExpense--\\  
  const [inputTagList, setInputTaglist] = useState([{items:[{nameArr:[], quantityArr:[], priceArr:[]}],payArr: [], shopArr:[], tagsArr:[]}]);

  const [shop, setShop] = useState('');
  const [pay, setPay] = useState(null);
  const [tags, setTags] = useState(null);

  const [shopArr, setShopArr] = useState([shop]);
  const [payArr, setPayArr] = useState([pay]);
  const [tagsArr, setTagsArr] = useState([tags]);

  //--장보기 외식 배달 string 변환 변환 후 array에 저장--\\
  const handleTags = (buttonName, index) => {
    // 선택한 버튼의 값에 따라 태그 설정
    let tagsReturnVal = '';
    if(buttonName=='shopping'){
      tagsReturnVal='장보기';
    } else if (buttonName == 'eatOut'){
      tagsReturnVal='외식';
    } else {
      tagsReturnVal='배달';
    }
    // 해당 인덱스의 입력 상태를 업데이트
    setInputTaglist(prevInputTagList => {
      const newList = [...prevInputTagList];
      newList[index].tagsArr = tagsReturnVal;
      return newList;
    });
  };

//--현금 카드 string 변환 후 array에 저장--\\
const handlepay = (buttonName, index) => {
  let btnReturnVal='';
  if(buttonName=='cash'){
    btnReturnVal='현금';
  } else {
    btnReturnVal='카드';
  }
  setInputTaglist(prevInputTagList => {
    const newList = [...prevInputTagList];
    newList[index].payArr = btnReturnVal;
    return newList;
  });
};
  //--shop input--\\
  const handleShopChange = (text, index) => {
    setInputTaglist(prevInputTagList => {
      const newList = [...prevInputTagList];
      newList[index].shopArr = text;
      return newList;
    });
  };

  // SaveBTN을 눌렀을 때 inputTagList 저장
  const handleInputTagListSave = () => {
    saveData(); // AsyncStorage에 데이터 저장
  };
  //--플러스 버튼 누르면 아레이 값 증가--\\
  const handleAddExpense = () => {
     setInputTaglist(prevInputTagList => [
      ...prevInputTagList, 
      { 
        items:[],
        payArr: [], 
        shopArr: [], 
        tagsArr: [],
      }
    ]);
  };
  
  //--EditReciptModal--\\
  const [dailyExpense, setDailyExpense] = useState(0);
  const [expenseCount, setExpenseCount] = useState(0);
  const [memo,setMemo]=useState('');

  //--하루 총액 구하기--\\
  useEffect(() => {
    let totalExpense = 0;
    priceArr.forEach(elem => {
      totalExpense += parseFloat(elem);
    });
    setDailyExpense(totalExpense);
  }, [priceArr]);
  //----파이어베이스에 업데이트----\\
  const [loading, setLoading] = useState(false);
  const handleSaveData = async () => {
    try {
    
      setLoading(true);
      const userId = 'xxvkRzKqFcWLVx4hWCM8GgQf1hE3';
      const totalPrice=dailyExpense;
      const date = selectedDate;
      const data = {
  amount: totalPrice,
  items: [
    { name: nameArr, quantity: quantityArr, price: priceArr },
  ],
  pay: [
    { pay: payArr, shop: shopArr, tag: tagsArr },
  ],
  memo: memo
};
  await firestore().collection(userId).doc(date).set(data);
  handleInputTagListSave();
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
            <AddBTNIcon height={35} width={35} />
          </TouchableOpacity>
        </View>
          <View style={{alignItems:'center', marginTop:20}}>
            <View style={styles.expenseHeader}>
              <View style={{width:8}}></View>
                <Text style={styles.expenseText}>{dailyExpense}</Text>
                <Text style={{fontSize:24, fontWeight:'400'}}>원</Text>
              </View>
              <Line/>
            {/*ProductList */}
            {inputTagList.map((allitems, allIndex) => (
            <View key={allIndex} style={{alignItems:'cetner'}}>
              {items.map((input, index) => (
              <View key={index} style={{ flexDirection: 'row', gap: 20, alignItems: 'center', marginTop: 10 }}>
                <TextInput
                  placeholder="항목 입력"
                  style={[styles.ProductInput, { width: 100 }]}
                  value={input.nameArr[index]}
                  onChangeText={(text) => handleInputChange(text, index, 'name')}
                />
                <TextInput
                  placeholder="수량"
                  style={[styles.ProductInput, { width: 40 }]}
                  value={input.quantityArr[index]}
                  keyboardType="number-pad"
                  onChangeText={(text) => handleInputChange(text, index, 'quantity')}
                />
                <TextInput
                  placeholder="가격"
                  style={[styles.ProductInput, { width: 100 }]}
                  value={input.priceArr[index]}
                  keyboardType="number-pad"
                  onChangeText={(text) => handleInputChange(text, index, 'price')}
                />
                <Text style={{ fontSize: 18 }}>₩</Text>
              </View>
            ))}
            <TouchableOpacity onPress={handleAddItem} disabled={!areitemsFilled()} style={{ marginTop: 10, marginBottom: 10, alignItems:'center' }}>
              <SmallAddBTNGrey />
            </TouchableOpacity>
            
          <View style={{alignItems:'center'}}>
            <Line />
            {/* AddDailyExpense */}
          <View style={{ alignItems: 'flex-start', marginLeft: -20 }}>
            <View style={styles.tagStyle}>
              <Text>PAY</Text>
              <TouchableOpacity
                style={[styles.TagsBTN, allitems.payArr === 'cash' && styles.selectedBTN]}
                onPress={() => handlepay('cash', allIndex)}
              >
                <Text style={[styles.TagsBTNText, allitems.payArr === 'cash' && styles.selectedBTNText]}>현금</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.TagsBTN, allitems.payArr === 'card' && styles.selectedBTN]}
                onPress={() => handlepay('card', allIndex)}
              >
                <Text style={[styles.TagsBTNText, allitems.payArr === 'card' && styles.selectedBTNText]}>카드</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tagStyle}>
              <Text>SHOP</Text>
              <TextInput
                placeholder="..."
                style={styles.shopInput}
                value={allIndex.shop}
                onChangeText={(text) => handleShopChange(text, allIndex)}
              />
            </View>
            <View style={styles.tagStyle}>
              <Text>TAG</Text>
              <TouchableOpacity
                style={[styles.TagsBTN, allitems.tagsArr[allIndex] === 'shopping' && styles.selectedBTN]}
                onPress={() => handleTags('shopping', allIndex)}
              >
                <Text style={[styles.TagsBTNText, allitems.tagsArr[allIndex] === 'shopping' && styles.selectedBTNText]}>장보기</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.TagsBTN, allitems.tagsArr[allIndex] === 'eatOut' && styles.selectedBTN]}
                onPress={() => handleTags('eatOut', allIndex)}
              >
                <Text style={[styles.TagsBTNText, allitems.tagsArr[allIndex] === 'eatOut' && styles.selectedBTNText]}>외식</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.TagsBTN, allitems.tagsArr[allIndex] === 'delivery' && styles.selectedBTN]}
                onPress={() => handleTags('delivery', allIndex)}
              >
                <Text style={[styles.TagsBTNText, allitems.tagsArr[allIndex] === 'delivery' && styles.selectedBTNText]}>배달</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </View>
      ))}
      <Line/>

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
          onPress={()=>{
            handleSaveData();
            toggleEditModal();
            handleInputTagListSave();
            checkingArr();
          }}
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
  },
  ProductInput: {
    height: 38,
    backgroundColor:'white',
    borderColor: 'gray',
    borderBottomWidth:1,
    marginBottom: 8,
    paddingHorizontal: 8,
    fontSize:14,
    textAlign:'center'
  },
  shopInput: {
    height: 35,
    width:100,
    borderColor: 'gray',
    borderBottomWidth:1,
    fontSize:14,
    textAlign:'center'
  },
  TagsBTN: {
    padding: 5,
    margin: 5,
    borderRadius: 5,
    borderColor:'#D4D4D4',
    borderWidth:1,
    width:60,
  },
  selectedBTN: {
    borderColor: '#FEA655',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    borderWidth:1,
    width:60,
  },
  TagsBTNText: {
    color: '#D4D4D4',
    fontSize: 14,
    textAlign:'center'
  },
  selectedBTNText: {
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
  },
});

export default EditReceiptModal;