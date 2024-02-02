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
import Eye from "../assets/icons/Eye";
import TruffleLogo from "../assets/logo/TruffleLogo";

function Loginpg({ navigation }) {
  const [text, onChangeText] = React.useState('');
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.title}>Truffle</Text>
          <TruffleLogo style={{marginTop:45, marginLeft:5}}/>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="이메일"
          keyboardType="email"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="비밀번호"
          keyboardType="defualt"
        />
        <TouchableOpacity
          style={styles.save}
          onPress={() => navigation.navigate('Visible')}></TouchableOpacity>
  
          {/* 비밀번호나 이메일 안맞았을떄-- 버튼누르고 체크후 띄울수 있게 어떻게하지 */}
  <Text style={{bottom: 20, fontSize: 12,
      color: '#ff0000', }}>일치하는 이메일 혹은 비밀번호가 없습니다</Text>
        <TouchableOpacity
          style={styles.save}> 
          <Text style={styles.saveTxt}>로그인 정보 저장</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Budgetpg')}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUp}
          onPress={() => navigation.navigate('SignupPg')}>
          <Text style={styles.saveTxt}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.reset}
          onPress={() => navigation.navigate('ForgotPW')}>
          <Text style={styles.saveTxt}>비밀번호 재설정</Text>
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
      height: 40,
      width: 232,
      marginBottom: 30,
      color: '#878787',
      borderBottomWidth:0.5
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
  })
  
  export default Loginpg;