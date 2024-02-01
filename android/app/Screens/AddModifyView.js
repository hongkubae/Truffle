import React, { useState } from "react";
import { Button, View, StyleSheet, Text, Dimensions, TouchableOpacity, Modal } from "react-native";
import InformationIcon from "../assets/icons/InformationIcon.svg";
import AMInfoAlert from "../components/AMInfoAlert";

function AddmodifyView () {
  const [sorting, setSorting] = useState('최신순'); // 최신순이 기본값
  const [Visible, setVisible] = useState(false);

  const toggleSorting = () => {
    setSorting((prevSorting) => (prevSorting === '최신순' ? '오래된 순' : '최신순'));
  };

  const infoModal = () => {
    setVisible(!Visible);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', alignItems:'center', gap:5}}>
        <Text style={styles.HeaderText}>
          문자/알림 내역
        </Text>
        <TouchableOpacity>
          <InformationIcon marginTop={55} onPress={infoModal}/>
        </TouchableOpacity>
      </View>

      <AMInfoAlert Visible={Visible} infoModal={infoModal}/>

      <TouchableOpacity onPress={toggleSorting} style={styles.button}>
        <View style={styles.toggleStyle}>
          <Text>◀</Text>
          <View style={{width:80, alignItems:'center'}}>
          <Text style={{fontSize: 18}}>{sorting}</Text>
          </View>
          <Text>▶</Text>
          </View>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height ,
    backgroundColor: '#f8f9fa',
  },
  HeaderText: {
    color: '#474646',
    //fontFamily: 'NanumGothic, sans-serif',
    fontSize: 24,
    alignItems:"center",
    justifyContent:"center",
    marginLeft: Dimensions.get('window').width /3.5,
    marginTop: 50,
  },
  toggleStyle:{
    flexDirection:'row',
    marginTop:20,
    width:120,
    marginLeft: Dimensions.get('window').width-150
  },
})
export default AddmodifyView;