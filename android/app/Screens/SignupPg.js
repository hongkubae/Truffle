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

function SignupPg({navigation}) {
  const { useState } = React;

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

  const handleFormSubmit = () => {
    if (!isPassword(password, password2)) {
      alert('모든 항목을 제대로 입력해주십시오');
    }
  };


  return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backBTN}> ⟨ </Text>
      </TouchableOpacity>

      <Text style={styles.topTitle}>회원가입</Text>
      
      <TextInput
        style={styles.inputS}
        onChangeText={onChangeText}
        value={text}
        placeholder="이메일"
        keyboardType="email"
      />
      <TextInput
        style={styles.inputS}
        setPassword={setPassword}
        value={password}
        placeholder="비밀번호"
        keyboardType="email"
        secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
      />
      <TextInput
        style={styles.inputS}
        placeholder="비밀번호 확인"
        keyboardType="email"
        secureTextEntry={true}
          value={password2}
          onChangeText={handlePassword2Change}
      />
      <Text style={{    top: 26,
    fontSize: 12,
    color: '#ff0000',}}>{passwordContent1}</Text>
      <Text style={{top: 80,
    fontSize: 12,
    color: '#ff0000',}}>{passwordContent}</Text>

      <TouchableOpacity
        style={styles.buttonS}
        onPress={() => navigation.navigate('SignupPg')}>
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
    top: 193,

  },
  inputS: {
    fontSize: 15,
    borderWidth: 0.5,
    height: 28,
    width: 232,
    top: 130,
    marginBottom: 40,
    color: '#878787',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth:0,
  },
  buttonS: {
    top: 183,
    backgroundColor: '#FEA655',
    paddingVertical: 10,
    paddingHorizontal: 48,
    borderRadius: 25,
    marginBottom: 20,
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
  borderWidth: 0.5,
  height: 28,
  width: 232,
  marginBottom: 30,
  color: '#878787',
  borderTopWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth:0,
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

export default SignupPg;