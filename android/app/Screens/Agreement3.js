import React, { useState, useEffect } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet, 
} from 'react-native';


{/* 개인정보 수집 및 이용 동의 (선택) */}
const Agreement3 = () => {


  return (
    <View style={styles.container}>
  <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backBTN}> ⟨ </Text>
      </TouchableOpacity>
  <Text style={styles.agreeTitle}>개인정보 수집 및 이용 동의 (선택)</Text>      
        <Text style={{top: 30, left: 120, fontSize: 12}}>
          약관 버전
        </Text>
<TouchableOpacity style={{ border: 'none', backgroundColor: 'transparent' }}>
         
        </TouchableOpacity>

    <ScrollView style={{top: 60,
    backgroundColor: '#F8F9FA', // 배경색상 추가
    height: 'auto',
  marginBottom: 170,}}>
    
    </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F9FA', // 배경색상 추가
  },

  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'NanumGothic',
  },

    back: {
    top: 42,
    right: 163,
  },
  backBTN: {
    fontSize: 25,
  },

  //signuppg
  topTitle: {
    fontSize: 24,
    top: 11,
  },
    agreeTitle: {
    fontSize: 21,
    top: 11,
  },

  buttonS: {
    top: 153,
    backgroundColor: '#FEA655',
    paddingVertical: 10,
    paddingHorizontal: 48,
    borderRadius: 25,
    marginBottom: 20,
  },
  
});





export default SignupAgree;
