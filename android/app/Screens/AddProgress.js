import React, {useState} from 'react';
import { NavigationContainer, Text, Button, View, TouchableOpacity,TextInput, ScrollView, StyleSheet, Image, Dimensions, SafeAreaView} from 'react-native';

{/* 레시피입력 박스 컴포넌트*/}
const DetailList = ({ countList }) => {
  let s=0
  
  return (
    <View>
      {countList && countList.map((item, i) => (
        <View key={i}>

          <View style={styles.recipeboxContainer}>
            <Text style={{fontWeight: 'bold', fontSize: 16, left: 0, }}>
            {++s}.
            </Text>
            
            <TextInput numberOfLines={2}
              style={{fontSize: 12, flexShrink : 1 }}
              placeholder="레시피 입력 (최대 85자)"
            />
          </View>
        </View>
      ))}
    </View>
  );
};

{/* 조리과정 작성 스크린 */}
function AddProgress({navigation}) {
  const [text, onChangeText] = React.useState('');

  const [countList, setCountList] = useState([0])

  const onAddDetailDiv = () => {
    let countArr = [...countList]
    let counter = countArr.slice(-1)[0]
    counter += 1
    countArr.push(counter)
    setCountList(countArr)
  }

  return (
  <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.cookText}>조리과정 작성</Text>
          <ScrollView style={styles.cookScrollContainer}>
          {/*<ScrollView style={{top: 100, height: 'auto'}}> */}
          <View style={{ margin: 4, alignItems: 'center'}}>
          <DetailList countList={countList} />
 
          <TouchableOpacity
          style={{ alignItems: 'center',
          backgroundColor: '#FFFFFF',
          marginTop: 10,
          borderWidth: 1,
          borderColor: '#CCCCCC',
          paddingVertical: 5,
          width: 110,
          borderRadius: 9, }}
          onPress={onAddDetailDiv}>
          <Text style={styles.addText}>+ 과정추가</Text>
          </TouchableOpacity>
          </View>
          </ScrollView> 

        <View style={styles.row}>
        <TouchableOpacity
         style={{ top: 85,
          backgroundColor: '#F8F9FA',
          borderWidth: 1,
          borderColor: '#CCCCCC',
          paddingVertical: 10,
          width: 140,
          borderRadius: 25,
          marginBottom: 20, }}
          onPress={() => navigation.goBack()}>
 
        <Text style={{
          color: '#CCCCCC', 
          fontSize: 15, 
          fontWeight: 'bold',
          textAlign: 'center',
          fontFamily: 'NanumGothic' 
        }}>
        뒤로가기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>레시피 등록</Text>
        </TouchableOpacity>
        </View>
       </View>
    </ScrollView>
  </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F8F9FA', // 배경색상 추가
  },
  row: {
    position: 'absolute',
    top: 570,
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    gap: 25,
  },
  button: {
    top: 85,
    width: 140,
    backgroundColor: '#FEA655',
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'NanumGothic',
  },
  recipeboxContainer:{
    backgroundColor: 'white',
    borderRadius: 7,
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    width: 350 
  },
  cookText:{
    fontSize: 20,
    top: 80,
    right: 240,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20, 
    textAlign: 'center',
    paddingTop: 4,
    borderRadius: 12,
    position: 'absolute',
    textDecorationLine: 'underline',
    textDecorationColor: '#FEA655',
    backgroundColor: '#FFFFFF',
    width: 130,
    height: 38,
    marginbottom: 10,
  
  },
  cookScrollContainer:{
    top: 138,
    backgroundColor: '#F8F9FA', // 배경색상 추가
    height: 'auto',
    marginBottom: 280,
  },
  addText:{
    color: '#CCCCCC', 
    ontSize: 15, 
    fontWeight: 'bold',
    textAlign: 'center',
  }

});


export default AddProgress;