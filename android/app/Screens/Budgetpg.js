import React, { useState, useEffect } from 'react';
import {
  NavigationContainer,
  Text,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet, 
} from 'react-native';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { updateUser } from '../BackFunc/DbFunc';



function Budgetpg({navigation}) {
  const [budget, onChangeBudget] = useState('');

  const changeBudget = (value: string) => {
    const removedCommaValue: number = Number(value.replace(/,/g, ''));
    onChangeBudget(removedCommaValue.toLocaleString());
  };


{/* updateUser()들 Budget page랑 ForgotPW랑 각각 다름 */}
  const updateUser = async (userId, updatedData) => {
    if (budget!=="") {
      const userDoc = doc(db, 'users', userId);
  await updateDoc(userDoc, updatedData);
    }
};


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backBTN}> ⟨ </Text>
      </TouchableOpacity>

      <Text style={styles.introBudget}>이번 달 식비 예산을 설정해주세요.</Text>
      <Text style={styles.subTitle}>
        매달 1회 변경 가능하니 신중하게 해주세요 !
      </Text>
      <TextInput
        style={styles.input}
        value={budget}
        onChangeText={changeBudget}
        placeholder="300,000원"
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={updateUser}>
        <Text style={styles.buttonText}>시작하기</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F9FA', // 배경색상 추가
  },
  title: {
    fontSize: 40,
    top: 47,
    marginBottom: 211,
    fontFamily: 'NanumGothic',
    color: '#000', // 글자색상 추가
  },
  
  input: {
    fontSize: 15,
    borderBottomWidth: 0.5,
    height: 40,
    width: 232,
    marginBottom: 30,
    color: '#878787',
  },
  save: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    bottom: 15,
    right: 45,
  },
  saveTxt: {
    fontSize: 12,
    color: '#757575',
  },
  signUp: {
    top: 105,
    right: 100,
    paddingHorizontal: 100,
  },
  reset: {
    top: 90,
    left: 100,
    paddingHorizontal: 100,
  },
  
  button: {
    top: 85,
    backgroundColor: '#FEA655',
    paddingVertical: 10,
    paddingHorizontal: 48,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'NanumGothic',
  },
  introBudget: {
    fontSize: 20,
    top: 149,
    marginBottom: 211,
    fontFamily: 'NanumGothic',
    color: '#000', // 글자색상 추가
  },
  subTitle: {
    color: '#727272',
    bottom: 45,
  },
    back: {
    top: 42,
    right: 163,
  },
  backBTN: {
    fontSize: 25,
  },
  errTxt: {
    top: 100,
    fontSize: 12,
    color: '#ff0000',
  },
})

export default Budgetpg;