import React, {useState} from "react";
import { Button, View, StyleSheet, Text, Dimensions,TouchableOpacity, Modal } from "react-native";
import SettingModifyIcon from "../assets/icons/SettingModifyIcon.svg";
import WithdrawModal from "../assets/icons/WithdrawModal.svg";
import LogoutModal from "../assets/icons/LogoutModal.svg";
import YesBTN from "../assets/icons/YesBTN.svg";
import NoBTN from "../assets/icons/NoBTN.svg";

const SettingsView = ({navigation}) => {
  const [logoutVisible, setLogoutVisible]=useState(false);
  const [withdrawVisible, setWithdrawVisible]=useState(false);

  const logoutModal = () => {
    setLogoutVisible(!logoutVisible);
  };

  const withdrawVisModal = () => {
    setWithdrawVisible(!withdrawVisible);
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.Texts}>
        Setting
      </Text>

      <View style={Styles.MonthlyContainer}>
        <View style={Styles.MonthlyPlan}>
          <Text style={Styles.MonthlyText}>300,000 원</Text>
            <View style={{flexDirection:'row', gap:120, marginTop:15}}>
              <Text style={{fontSize:10, marginLeft:20, marginTop:10}}>이번 달 예산을 설정해주세요!</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('MonthlyModifyView')}>
                <SettingModifyIcon/>
              </TouchableOpacity>
            </View>
        </View>

        <View style={[Styles.SettingSelect, {marginTop:45}]}>
          <TouchableOpacity>
            <View style={Styles.SelectContainer}>
              <Text style={Styles.SelectText}>비밀번호 변경</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={Styles.SettingSelect}>
          <TouchableOpacity>
            <View style={Styles.SelectContainer}>
              <Text style={Styles.SelectText}>이용약관</Text>
            </View>
          </TouchableOpacity>
        </View>
          
        <View style={Styles.SettingSelect}>
          <TouchableOpacity onPress={logoutModal}>
            <View style={Styles.SelectContainer}>
              <Text style={Styles.SelectText}>로그아웃</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={Styles.SettingSelect}>
          <TouchableOpacity onPress={withdrawVisModal}>
            <View style={Styles.SelectContainer}>
              <Text style={Styles.SelectText}>탈퇴하기</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={Styles.SettingSelect}>
          <TouchableOpacity onPress={()=> navigation.navigate('CreditView')}>
            <View style={Styles.SelectContainer}>
              <Text style={Styles.SelectText}>크레딧</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <Modal
        animationType="slide"
        transparent={true}
        visible={logoutVisible}
        onRequestClose={logoutModal}
        >
          <View style={Styles.ModalContainer}>
            <View style={Styles.ModalOpen}>
              <LogoutModal/>
              <View style={Styles.ModalBTN}>
                <TouchableOpacity>
                  <YesBTN/>
                </TouchableOpacity>
                <TouchableOpacity onPress={logoutModal}>
                  <NoBTN/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
        animationType="slide"
        transparent={true}
        visible={withdrawVisible}
        onRequestClose={withdrawVisModal}
        >
          <View style={Styles.ModalContainer}>
            <View style={Styles.ModalOpen}>
             <WithdrawModal/>
             <View style={Styles.ModalBTN}>
                <TouchableOpacity>
                  <YesBTN/>
                </TouchableOpacity>
                <TouchableOpacity onPress={withdrawVisModal}>
                  <NoBTN/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height ,
    backgroundColor: '#f8f9fa',
  },
  Texts: {
    color: '#474646',
    //fontFamily: 'NanumGothic, sans-serif',
    fontSize: 24,
    alignItems:"center",
    justifyContent:"center",
    marginLeft: 22,
    marginTop: 20,
  },
  MonthlyContainer:{
    flex:1,
    alignItems:'center',
  },
  MonthlyPlan:{
    width: Dimensions.get('window').width/1.15,
    height:100,
    marginTop:40,
    backgroundColor:'white',
  },
  MonthlyText:{
    fontSize:25,
    marginLeft:20,
    marginTop:15
  },
  SettingSelect:{
    width: Dimensions.get('window').width/1.15,
    marginTop:5,
    backgroundColor:'white',
    borderRadius:5,
  },
  SelectText:{
  marginLeft:20,
  fontSize:20,
  },

  SelectContainer:{
    height:50,
    justifyContent:'center',
  },
  ModalContainer:{
    flex:1,
    justifyContent:'flex-end',
  },
  ModalOpen:{
    backgroundColor:'white',
    width:Dimensions.get('window').width,
    height: 200,
  },
  ModalBTN:{
    flexDirection:'row',
    gap:30,
    position:'absolute',
    zIndex:1,
    bottom: 50,
    left: 70,
}

})
export default SettingsView;