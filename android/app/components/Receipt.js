import React, {useState, useEffect} from 'react';
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native';
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
   <View style={styles.container}>
     <View style={{marginLeft:10}}>
      <TouchableOpacity onPress={toggleEditModal}>
       <EditBTN/>
      </TouchableOpacity>
      <EditReceiptModal EditVisible={EditVisible} toggleEditModal={toggleEditModal} selectedDate={selectedDate}/>
      </View>

    <View style={{alignItems:'center',}}>
      <View style={{ flexDirection:'row'}}>
        <Text> {receiptData?.amount}</Text>
        <Text> 원</Text>
        {/*금액 원 출력 */}  
      </View>
      <Line marginTop={20}/>
    </View>

    {receiptData?.items && receiptData.items.map((item, index) => (
    <View key={index} style={{alignItems:'center', marginTop:20}}>
      <View style={{ flexDirection:'row', gap:45}}>
        <Text>{index + 1}</Text>
        <Text>{item[0]}</Text>
        <Text>{item[1]}</Text>
        <Text>{item[2]}원</Text>
        {/*구매목록 */}  
      </View>
      <Line marginTop={20}/>
    </View>
  ))}

  {receiptData?.pay && receiptData.pay.map((pay, index) => (
    <View style={{marginTop:20, marginLeft:20}}>
      <View style={{ flexDirection:'row',}}>
        <Text> PAY</Text>
        <Text>{receiptData?.pay[index]?.pay}</Text>
        {/*pay*/}  
      </View>
      <View style={{ flexDirection:'row',}}>
        <Text> SHOP</Text>
        <Text>{receiptData?.pay[index]?.shop}</Text>
        {/*shop*/}  
      </View>
      <View style={{ flexDirection:'row',}}>
        <Text> TAG</Text>
        <Text> {receiptData?.pay[index]?.tag}</Text>
        {/*tag*/}  
      </View>
      <Line marginTop={20} alignItems={'center'}/>
    </View>
  ))}
    
    <View style={{ marginTop:20, marginLeft:20}}>
      <View style={{ flexDirection:'row', gap:45}}>
        <Text> MEMO</Text>
        {/*MEMO */}  
      </View>
      <Text>{receiptData?.memo}</Text>
    </View>

  </View>
  <BottomTri marginTop={-5}/>
</View>
  );
};

const styles = StyleSheet.create({

  container:{
    backgroundColor: 'white',
    height: 500,
    width:300,
    marginTop:-5,
  },
})

export default Receipt;
