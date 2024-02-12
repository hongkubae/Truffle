import React, {useState, useEffect} from 'react';
import { View, Text,StyleSheet, TouchableOpacity, Dimensionsm, Dimensions, Platform } from 'react-native';
import TopTri from "../assets/icons/TopTri.svg";
import BottomTri from "../assets/icons/BottomTri.svg";
import EditBTN from "../assets/icons/EditBTN.svg";
import Line from "../assets/icons/Line.svg";
import EditReceiptModal from "../components/EditReceiptModal";
import firestore from "@react-native-firebase/firestore";

const Receipt = ({selectedDate}) => {
  const [receiptData, setReceiptData] = useState(null);
  const [EditVisible, setEditVisible] = useState(false);

  useEffect(() => {
    const fetchReceiptData = async () => {
      try {
        const userId = 'xxvkRzKqFcWLVx4hWCM8GgQf1hE3';
        const docRef = firestore().collection(userId).doc(selectedDate);
        const docSnapshot = await docRef.get();

        if (docSnapshot.exists) {
          const data = docSnapshot.data();
          setReceiptData(data);
        } else {
          console.log("No receipt data found for the selected date.");
        }
      } catch (error) {
        console.error("Error fetching receipt data:", error);
      }
    };

    fetchReceiptData();
  }, [selectedDate]);
  
  const toggleEditModal = () => {
    setEditVisible(!EditVisible);
  };

  return (
  <View style={{alignItems:'center'}}>
    <TopTri/>
    <View>
    <View style={styles.container}>
      <View style={{marginLeft:10}}>
        <TouchableOpacity onPress={toggleEditModal}>
          <EditBTN/>
        </TouchableOpacity>
        <EditReceiptModal EditVisible={EditVisible} toggleEditModal={toggleEditModal} selectedDate={selectedDate}/>
      </View>

    <View style={{alignItems:'center',}}>
      <View style={styles.expenseHeader}>
        <View style={{width:8}}></View>
        <Text style={styles.expenseText}> {receiptData?.amount.toLocaleString()}</Text>
        <Text style={{fontSize:24, fontWeight:'600', marginTop:5}}>원</Text>
        </View>
      <Line marginTop={10}/>
      </View>
      
      {receiptData?.items && receiptData.items.map((item, index) => (
      <View key={index} style={{alignItems:'flex-start', marginTop:20, marginLeft:20}}>
        <View style={styles.tagStyle}>
          <Text>{index + 1}</Text>
          <Text style={{width:120, textAlign:'center'}}>{receiptData?.items[index]?.name[0]}</Text>
          <Text style={{width:30, textAlign:'center'}}>{receiptData?.items[index]?.quantity[0]}</Text>
          <Text style={{width:130, textAlign:'center'}}>{receiptData?.items[index]?.price[0].toLocaleString()} ₩</Text>
          {/*구매목록 */}
        </View>
        
        {receiptData?.items[index]?.name.length > 1 && (
        <View style={styles.tagStyle}>
          {/* 두 번째 아이템 이름 출력 */}
          <Text>{index + 1}</Text>
          <Text style={{ width:120, textAlign:'center'}}>{receiptData?.items[index]?.name[1]}</Text>
          <Text style={{ width:30, textAlign:'center'}}>{receiptData?.items[index]?.quantity[1]}</Text>
          <Text style={{width:130, textAlign:'center'}}>{receiptData?.items[index]?.price[1].toLocaleString()} ₩</Text>
        </View>
        )}

            {/* 세 번째 아이템 */}
    {receiptData?.items[index]?.name.length > 2 && (
      <View style={styles.tagStyle}>
        <Text>{index + 1}</Text>
        <Text style={{width:120, textAlign:'center'}}>{receiptData?.items[index]?.name[2]}</Text>
        <Text style={{ width:30, textAlign:'center'}}>{receiptData?.items[index]?.quantity[2]}</Text>
        <Text style={{width:130, textAlign:'center'}}>{receiptData?.items[index]?.price[2].toLocaleString()} ₩</Text>
      </View>
    )}
    {/* 네 번째 아이템 */}
    {receiptData?.items[index]?.name.length > 3 && (
      <View style={styles.tagStyle}>
        <Text>{index + 1}</Text>
        <Text style={{width:120, textAlign:'center'}}>{receiptData?.items[index]?.name[3]}</Text>
        <Text style={{ width:30, textAlign:'center'}}>{receiptData?.items[index]?.quantity[3]}</Text>
        <Text style={{width:130, textAlign:'center'}}>{receiptData?.items[index]?.price[3].toLocaleString()} ₩</Text>
      </View>
    )}
    {/* 다섯 번째 아이템 */}
    {receiptData?.items[index]?.name.length > 4 && (
      <View style={styles.tagStyle}>
        <Text>{index + 1}</Text>
        <Text style={{width:120, textAlign:'center'}}>{receiptData?.items[index]?.name[4]}</Text>
        <Text style={{ width:30, textAlign:'center'}}>{receiptData?.items[index]?.quantity[4]}</Text>
        <Text style={{width:130, textAlign:'center'}}>{receiptData?.items[index]?.price[4].toLocaleString()} ₩</Text>
      </View>
    )}
    {/* 여섯 번째 아이템 */}
    {receiptData?.items[index]?.name.length > 5 && (
      <View style={styles.tagStyle}>
        <Text>{index + 1}</Text>
        <Text style={{width:120, textAlign:'center'}}>{receiptData?.items[index]?.name[5]}</Text>
        <Text style={{ width:30, textAlign:'center'}}>{receiptData?.items[index]?.quantity[5]}</Text>
        <Text style={{width:130, textAlign:'center'}}>{receiptData?.items[index]?.price[5].toLocaleString()} ₩</Text>
      </View>
    )}
    {/* 일곱 번째 아이템 */}
    {receiptData?.items[index]?.name.length > 6 && (
      <View style={styles.tagStyle}>
        <Text>{index + 1}</Text>
        <Text style={{width:120, textAlign:'center'}}>{receiptData?.items[index]?.name[6]}</Text>
        <Text style={{ width:30, textAlign:'center'}}>{receiptData?.items[index]?.quantity[6]}</Text>
        <Text style={{width:130, textAlign:'center'}}>{receiptData?.items[index]?.price[6].toLocaleString()} ₩</Text>
      </View>
    )}
    {/* 여덟 번째 아이템 */}
    {receiptData?.items[index]?.name.length > 7 && (
      <View style={styles.tagStyle}>
        <Text>{index + 1}</Text>
        <Text style={{width:120, textAlign:'center'}}>{receiptData?.items[index]?.name[7]}</Text>
        <Text style={{ width:30, textAlign:'center'}}>{receiptData?.items[index]?.quantity[7]}</Text>
        <Text style={{width:130, textAlign:'center'}}>{receiptData?.items[index]?.price[7].toLocaleString()} ₩</Text>
      </View>
    )}
    {/* 아홉 번째 아이템 */}
    {receiptData?.items[index]?.name.length > 8 && (
      <View style={styles.tagStyle}>
        <Text>{index + 1}</Text>
        <Text style={{width:120, textAlign:'center'}}>{receiptData?.items[index]?.name[8]}</Text>
        <Text style={{ width:30, textAlign:'center'}}>{receiptData?.items[index]?.quantity[8]}</Text>
        <Text style={{width:130, textAlign:'center'}}>{receiptData?.items[index]?.price[8].toLocaleString()} ₩</Text>
      </View>
    )}
    {/* 열 번째 아이템 */}
    {receiptData?.items[index]?.name.length > 9 && (
      <View style={styles.tagStyle}>
        <Text>{index + 1}</Text>
        <Text style={{width:120, textAlign:'center'}}>{receiptData?.items[index]?.name[9]}</Text>
        <Text style={{ width:30, textAlign:'center'}}>{receiptData?.items[index]?.quantity[9]}</Text>
        <Text style={{width:130, textAlign:'center'}}>{receiptData?.items[index]?.price[9].toLocaleString()} ₩</Text>
      </View>
    )}
    <Line marginTop={20}/>

      {receiptData.pay[index] && (
      <View style={{marginTop:20,}}>
        <View style={styles.tagStyle}>
          <Text style={{width:100}}> PAY</Text>
          <Text style={{textAlign:'flex-start', width:150}}>{receiptData?.pay[index]?.pay}</Text>
          {/*pay*/}
        </View>
        <View style={styles.tagStyle}>
          <Text style={{width:100}}> SHOP</Text>
          <Text style={{textAlign:'flex-start', width:150}}>{receiptData?.pay[index]?.shop}</Text>
          {/*shop*/}  
        </View>
      <View style={styles.tagStyle}>
        <Text style={{width:100}}> TAG</Text>
        <Text style={{textAlign:'flex-start', width:150}}>{receiptData?.pay[index]?.tag}</Text>
        {/*tag*/}  
      </View>
    </View>
    )}
    <Line marginTop={20} alignItems={'center'}/>
  </View>
  ))}
    
    <View style={{ marginTop:20, marginLeft:20}}>
      <Text>MEMO</Text>
      <Text style={{marginBottom:50, marginTop:10}}>{receiptData?.memo}</Text>
    </View>
  </View>
  </View>
    <BottomTri marginTop={-3}/>
  </View>

  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    width:300,
    marginTop:-5,
    ...Platform.select({
      android:{
        elevation:3,
      }
    })
  },
  expenseText:{
    fontSize:28,
    fontWeight:'bold',
    color:'black'
  },
  expenseHeader:{
    flexDirection:'row',
    width: Dimensions.get('window').width*0.7,
    justifyContent:'space-between'
  },
  tagStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
})

export default Receipt;