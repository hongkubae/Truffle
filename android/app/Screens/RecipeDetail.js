import React, {useState} from 'react';
import {
  NavigationContainer,
  Text,
  Modal,
  View,
  TouchableOpacity,
  TextInput, ScrollView, 
  StyleSheet, Image
} from 'react-native';

{/* 레시피 내용 컴포넌트 */}
const Content = props => {
const {recipe, order} = props

  return (

<View style={{backgroundColor: 'white', borderRadius: 7, flexDirection: 'row', 
    justifyContent: 'flex-start', alignItems: 'center', gap: 12, paddingTop: 20, paddingBottom: 20, paddingLeft: 15, paddingRight: 15, width: 350 }}>
    <Text style={{fontWeight: 'bold', fontSize: 16, left: 0, }}>
  {props.order}.
</Text>
<Text numberOfLines={2}
        style={{fontSize: 12, flexShrink : 1 }}>
        {props.recipe}
</Text>
</View>
  );
};


function RecipeDetail() {
  const [text, onChangeText] = React.useState('');
const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modal}>

    <Text style={{
      fontSize: 15,
      bottom: 13,
      top: 2
            }}>요리를 완료하시겠습니까?</Text>

<View style={{flexDirection: 'row', 
    justifyContent: 'space-evenly', gap: 20}}>
<TouchableOpacity
        style={{top: 30,
    width: 90,
    borderWidth: 1,
    borderColor: '#CCC',
    paddingVertical: 5,
    borderRadius: 25,}}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={{color: '#CCC',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'NanumGothic',}}>아니요</Text>
      </TouchableOpacity>
<TouchableOpacity
        style={styles.modButton}

  //추천레시피로 돌아가기
        onPress={() => navigation.navigate('RecipeTab')}
        >
        <Text style={styles.modButtonText}>네</Text>
      </TouchableOpacity>
      
  </View>
              
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.goBack()}>
      </TouchableOpacity>

      <Text style={{
        fontSize: 20,
    top: 80,
    right: 285,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20, 
    textAlign: 'center',
    paddingTop: 4, borderRadius: 12, position: 'absolute', textDecorationLine: 'underline', textDecorationColor: '#FEA655', backgroundColor: '#FFFFFF', width: 88, height: 38, marginbottom: 10,
    }}>조리과정</Text>

{/*<ScrollView style={{top: 100, height: 'auto'}}> */}
<ScrollView style={{top: 138,margin: 4,}}>
    <Content order="1" recipe="파와 청양고추는 어슷 썰고 당근 감자는 큼직하게 썰어주세요."/>
    <Content order="2" recipe="양파는 반을 자른 후 사각으로 썰어주세요."/>
    <Content order="3" recipe="고추장2큰술 고추가루7큰술 설탕2큰술 국간장5큰술 마늘1큰술 넣고 소주잔으로 물1컵 넣고 섞어 주세요."/>
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
        onPress={() => navigation.navigate('RecipeTab')}>
 
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
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>조리완료</Text>
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 304,  
    height: 140,
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


export default RecipeDetail;