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
import { db } from './firebaseConfig';
import { authService } from "../app/firebaseConfig";


function SignupPg({ navigation }) {

{/* catch 오류문구 */}
const [validation, setValidation] = useState("");


{/* try-catch로 수정했는데 맞는지 불확실: 이미 존재하는 이메일인지 체크해야함-- 아님 login()이랑 합쳐야할듯? */}
  const handleUserInfoChange = async () => {
    try {
      const { user } = await authService.createUserWithEmailAndPassword(email, password);
      const userRef = collection(db, 'users');
      const newUserDoc = doc(userRef, user.uid);
      await addDoc(newUserDoc, { user_email: email, user_password: password, user_id: user.uid });
      setValidation('회원가입에 성공했습니다.');
      } catch (error) {
      console.error('회원가입 오류:', error);
      if (error.code === 'auth/email-already-in-use'){
        setValidation('이미 존재하는 이메일입니다.');
      } else {
      setValidation('회원가입 중 오류가 발생했습니다.');
      }
    }
  };

  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordContent, setPasswordContent] = useState('');
  const [passwordContent1, setPasswordContent1] = useState('');
  const [email, setEmail] = useState('');
  const [emailContent, setEmailContent] = useState('');

const validateEmail = email => {
  {/* 이메일 조건설정 */}
    const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
}
  const handleEmailChange = (val) => {
    setEmail(val);

    if (val && !validateEmail(val)) {
      setEmailContent('허용되지 않는 이메일 형식입니다.');
    } 
    else {
      setEmailContent('');
    }
  };

{/* 비밀번호 조건설정 */}
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
        placeholder="이메일"
        keyboardType="email-address"
        val={email}
          onChangeText={handleEmailChange}
      />

<Text style={styles.errTxt}>{validation}</Text>
    <Text style={{top: 232,
    fontSize: 12,
    color: '#ff0000', position: 'absolute'}}>{emailContent}</Text>
      <TextInput
        style={styles.inputS}
        setPassword={setPassword}
        placeholder="비밀번호"
        keyboardType="email-address"
        secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
      />
      <Text style={styles.errTxt}>{passwordContent1}</Text>
      <TextInput
        style={styles.inputS}
        placeholder="비밀번호 확인"
        keyboardType="email-address"
        secureTextEntry={true}
          value={password2}
          onChangeText={handlePassword2Change}
      />
      
      <Text style={styles.errTxt}>{passwordContent}</Text>

      <TouchableOpacity
        style={styles.buttonS}
        onPress={handleUserInfoChange}
        >
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
  height: 50,
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
  errTxt: {
    top: 100,
    fontSize: 12,
    color: '#ff0000',
  },
})

export default SignupPg;