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
import { authService } from "../app/firebaseConfig";

function SignupPg({navigation}) {
  const { useState } = React;
  const [email, setEmail] = useState('');
  const [text, onChangeText] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordContent, setPasswordContent] = useState('');
  const [passwordContent1, setPasswordContent1] = useState('');

  const reg = /^(?=.*[a-zA-Z])(?=.*[\W_])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  const pwCondition = (password) => {
    return reg.test(password);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);

    if (value && !pwCondition(value)) {
      setPasswordContent1('8-15자 이내의 영문, 숫자, 특수문자를 조합해주세요.');
    } else {
      setPasswordContent1('');
    }
  };

  const handlePassword2Change = (value) => {
    setPassword2(value);

    if (password !== value) {
      setPasswordContent('비밀번호가 일치하지 않습니다');
    } else {
      setPasswordContent('');
    }
  };

  const isPassword = (value1, value2) => {
    return value1 === value2;
  };

  const handleFormSubmit = async () => {
    try {
      if (!isPassword(password, password2) || !pwCondition(password)) {
        alert('모든 항목을 제대로 입력해주십시오');
        return;
      }
      await authService.createUserWithEmailAndPassword(email, password);
      alert('회원가입이 완료되었습니다.');
      navigation.navigate('SuccessLogin');
    } catch (error) {
      console.error('회원가입 오류:', error);
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };


  return(
    <View style={styles.container}>
      {/*main header */}
      <View style={{flexDirection:'row',}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <Text style={styles.backBTN}> ⟨ </Text>
        </TouchableOpacity>
        <Text style={styles.topTitle}>회원가입</Text>
      </View>

    <View style={{alignItems:'center', marginTop:200}}>
      {/*email 입력*/}
      <TextInput
        style={styles.input}
        onChangeText={(value) => setEmail(value)}
        value={text}
        placeholder="이메일"
        keyboardType="email-address"
      />
      {/*PW 입력*/}
      <TextInput
        style={styles.input}
        setPassword={setPassword}
        value={password}
        placeholder="비밀번호"
        secureTextEntry
        onChangeText={handlePasswordChange}
      />
      {/*PW 확인 입력 */}
      <TextInput
        style={styles.input}
        placeholder="비밀번호 확인"
        secureTextEntry={true}
        value={password2}
        onChangeText={handlePassword2Change}
      />
    </View>
      <Text style={{top: 26,fontSize: 12, color: '#ff0000',}}>{passwordContent1}</Text>
      <Text style={{top: 80,fontSize: 12,color: '#ff0000',}}>{passwordContent}</Text>

      <TouchableOpacity
        style={styles.buttonS}
        onPress={handleFormSubmit}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.log}
        onPress={() => navigation.navigate('Loginpg')}>
        <Text style={styles.saveTxt}>이미 계정이 있나요?  로그인하기</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  topTitle: {
    fontSize: 24,
    top: 12,
  },
  log: {
    top: 50,
  },
  buttonS: {
    backgroundColor: '#FEA655',
    paddingVertical: 10,
    paddingHorizontal: 48,
    borderRadius: 25,
    marginTop:10,
  },
  
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
buttonText: {
  color: '#fff',
  fontSize: 15,
  fontWeight: 'bold',
  fontFamily: 'NanumGothic',
},
backBTN: {
  fontSize: 25,
  marginLeft:-140,
  marginTop:11,
},
})

export default SignupPg;