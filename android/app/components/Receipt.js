import React, {useState} from 'react';
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native';
import TopTri from "../assets/icons/TopTri.svg";
import BottomTri from "../assets/icons/BottomTri.svg";
import EditBTN from "../assets/icons/EditBTN.svg";
import Line from "../assets/icons/Line.svg";
import EditReciptModal from "../components/EditReciptModal";

const Receipt = ({selectedDate}) => {
  const [EditVisible, setEditVisible] = useState(false);

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
      <EditReciptModal EditVisible={EditVisible} toggleEditModal={toggleEditModal} selectedDate={selectedDate}/>
      </View>

    <View style={{alignItems:'center',}}>
      <View style={{ flexDirection:'row'}}>
        <Text> 4,990</Text>
        <Text> 원</Text>
        {/*금액 원 출력 */}  
      </View>
      <Line marginTop={20}/>
    </View>

    <View style={{alignItems:'center', marginTop:20}}>
      <View style={{ flexDirection:'row', gap:45}}>
        <Text> #1</Text>
        <Text> 고등어</Text>
        <Text> 1</Text>
        <Text> 4,990원</Text>
        {/*구매목록 */}  
      </View>
      <Line marginTop={20}/>
    </View>
    
    <View style={{marginTop:20, marginLeft:20}}>
      <View style={{ flexDirection:'row',}}>
        <Text> PAY</Text>
        <Text> 카드</Text>
        {/*pay*/}  
      </View>
      <View style={{ flexDirection:'row',}}>
        <Text> SHOP</Text>
        <Text> 홈플러스</Text>
        {/*shop*/}  
      </View>
      <View style={{ flexDirection:'row',}}>
        <Text> TAG</Text>
        <Text> 장보기</Text>
        {/*tag*/}  
      </View>
      <Line marginTop={20} alignItems={'center'}/>
    </View>
    
    <View style={{ marginTop:20, marginLeft:20}}>
      <View style={{ flexDirection:'row', gap:45}}>
        <Text> MEMO</Text>
        {/*MEMO */}  
      </View>
      <Text> 고등어 사기 완료</Text>
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
