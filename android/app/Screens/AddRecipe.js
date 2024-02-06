{/* 부족한 부분: 항목이 채워진 조건하에 버튼이 채워지게, 난이도 별 컴포넌트, 요리이름 인풋창 한쪽으로만 늘어나게하기, 사진추가 누르면 갤러리연동, 인풋한걸 받아서 적히게하는거 */}
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Modal } from 'react-native';

function AddA() {
  const [text, onChangeText] = useState('');
  const [min, setMin] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleMinChange = (value) => {
    setMin(value);
  };

  return (
    <View style={styles.container}>
    {/* 요리시간 팝업 */}
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={{fontSize: 15,bottom: 20,right: 85,}}>요리 소요 시간</Text>
      {/* 시간 입력하고 원본화면에 어떻게 저장하는지 모르겠음 */}
          <TextInput
            style={{fontSize: 15,
            borderWidth: 0.5,
            height: 28,
            top: 10,
            width: 55,
            right: 30,
            color: '#878787',
            textAlign: 'center',
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth:0,
            marginLeft: 5}}
            setMin={setMin}
            value={min}
            onChange={handleMinChange}
            placeholder="0" 
            keyboardType="numeric"
            />
          <Text style={{ left: 34,fontSize: 15,bottom: 13,}}>분</Text>
            
      <TouchableOpacity
        style={styles.modButton}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.modButtonText}>완료</Text>
      </TouchableOpacity>
              
      </View>
     </View>
    </Modal>


      <TouchableOpacity
        style={{top: 83,
    marginBottom: 20, 
    paddingTop: 4, borderRadius: 7, position: 'absolute', backgroundColor: '#EDEDED', width: 350, height: 139,}}
        onPress={() => navigation.navigate('Back')}>
      <Text style={{top: 60,
    fontSize: 12,
    color: '#9C9C9C',
    textAlign: 'center',
    }}>사진 추가</Text>
    </TouchableOpacity>

{/*<ScrollView style={{top: 100, height: 'auto'}}> */}

{/*텍스트박스 어떻게 한쪽으로만 늘어나게하지 */}
      <TextInput
        style={{
          top: 240, right: 130, 
          fontSize: 20, 
        backgroundColor: '#FFFFFF',
        
        borderRadius: 10,
        paddingLeft: 6, paddingRight: 6, paddingTop: 7, paddingBottom: 7, 
        marginBottom: 17, textDecorationLine: 'underline', textDecorationColor: '#FEA655', 
          }}
        onChangeText={onChangeText}
        value={text}
        placeholder="요리이름"
      />
<TouchableOpacity
        style={{ right: 62, top: 240,
        backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    width: 215,
    height: 330,
    borderRadius: 10, }}
        onPress={() => navigation.navigate('Recipe')}>
        <Text style={{
          top: 150,
          color: '#9C9C9C', 
        fontSize: 12, 
        textAlign: 'center',
        }}>
        필요한 재료</Text>
      </TouchableOpacity>
<TouchableOpacity
        style={{ left: 115, bottom: 91,
        backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    width: 112,
    height: 150,
    borderRadius: 10,
    marginBottom: 15, }}
        onPress={() => setModalVisible(true)}>
        <Text style={{
          top: 78,
          color: '#9C9C9C', 
        fontSize: 18, 
        textAlign: 'center',
        
        }}>
        조리시간</Text>
      </TouchableOpacity>

      <View
        style={{ left: 115, bottom: 91,
        backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    width: 112,
    height: 166,
    borderRadius: 10, }}
        onPress={() => navigation.navigate('Recipe')}>
        <Text style={{
          top: 5,
          color: '#000000', 
        fontSize: 18, 
        textAlign: 'center',
        }}>
        난이도</Text>
      </View>

<View style={styles.row}>
      <TouchableOpacity
        style={{ top: 85,
        
    borderWidth: 1,
    borderColor: '#CCCCCC',
    paddingVertical: 10,
    width: 140,
    borderRadius: 25,
    marginBottom: 20, }}
        onPress={() => navigation.back()}>
 
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
        style={styles.buttonUnfill}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonColorText}>다음</Text>
      </TouchableOpacity>
  </View>
</View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F8F9FA', // 배경색상 추가
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 304,  
    height: 189,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 500,
      height: 500,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 500,
  },

  row: {
    position: 'absolute',
    top: 570,
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    gap: 25,
  },

  buttonUnfill: {
    top: 85,
    width: 140,
    borderWidth: 1,
    borderColor: '#FEA655',
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 20,

  },
  buttonColorText: {
    color: '#FEA655',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'NanumGothic',
  },
  modButton: {
    top: 30,
    width: 90,
    borderWidth: 1,
    borderColor: '#FEA655',
    paddingVertical: 5,
    borderRadius: 25,
  },
  modButtonText: {
    color: '#FEA655',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'NanumGothic',
  },



});

export default AddA;