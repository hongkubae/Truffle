import React, {useState} from "react";
import { Button, View, StyleSheet, TextInput, Dimensions, TouchableOpacity, Alert, Modal } from "react-native";
import TruffleLogo from "../assets/logo/TruffleLogo.svg";
import CancelIcon from "../assets/icons/CancelIcon.svg";
import ConfirmIcon from "../assets/icons/ConfirmIcon.svg";
import XIcon from "../assets/icons/XIcon.svg";
import MonthlyExceptionModal from "../assets/icons/MonthlyExceptionModal.svg";
import SmallYesIcon from "../assets/icons/SmallYesIcon.svg";



const MonthlyModifyView = ({navigation}) => {
  const [text, setText] = useState('');
  const inputWidth=Dimensions.get('window').width/1.3;
  const onChangeText =(inputText) => {
    const numValue = inputText.replaceAll(',', '');
    inputText = numValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
    setText(inputText);
  }
  const [exceptionModal, setExceptionModal] = useState(false);
  const toggleException = () => {
    setExceptionModal(!exceptionModal);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.ComponentContainer}>
      <TruffleLogo/>
      </View>
      
      <View style={[Styles.ComponentContainer, {marginTop:80}]}>
        <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="0 원"
        style={Styles.InputStyle}
        width={inputWidth}
        justifyContent='center'
        keyboardType="number-pad"
        input='search'
        />

      <TouchableOpacity onPress={() => setText("")}>
          <XIcon style={{position:'absolute', zIndex:1, left:inputWidth-190, bottom:15}}/>
        </TouchableOpacity>
      </View> 

      <View style={Styles.BTNContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CancelIcon/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {
          if (text === '') {
            toggleException();
          } 
          else{
            navigation.goBack()}
          }}>
          {/* 백엔드로 전달하기*/}
          <ConfirmIcon/>
        </TouchableOpacity>
        {exceptionModal && text === '' && (
        <Modal
        transparent={true}
        visible={exceptionModal}
        onRequestClose={() => {
        toggleException();
        }}
        >
        <View style={Styles.modalContainer}>
          <View style={Styles.modalContent}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <MonthlyExceptionModal />
            </View>

            <View style={{position:'absolute', zIndex:1,justifyContent: 'center', alignItems: 'center', bottom:10, left:90}}>
              <TouchableOpacity onPress={toggleException}>
                <SmallYesIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </Modal>
        )}

      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height ,
    backgroundColor: '#F8F9FA',
  },
  InputStyle: {
    color: '#474646',
    //fontFamily: 'NanumGothic, sans-serif',
    fontSize: 18,
    alignItems:"center",
    justifyContent:"center",
    borderColor:'grey',
    borderBottomWidth :1,
    textAlign: 'center',
  },
  ComponentContainer:{
    alignItems:'center',
    marginTop:50
  },
  BTNContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:40,
    marginTop:380
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  modalContent: {
    backgroundColor: 'white',
    width: 243,
    height:86,
    borderRadius: 10,
  },
})
export default MonthlyModifyView;