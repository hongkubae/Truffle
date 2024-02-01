import React from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AlarmPopup from "../assets/logo/AlarmPopup.svg";

const AlarmInfoAlert = ({ infoVisible, infoToggleModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={infoVisible}
      onRequestClose={() => {
        infoToggleModal();
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <AlarmPopup/>
        </View>
        <View style={{justifyContent:'center', alignItems:'center', height:40}}>
          <TouchableOpacity onPress={infoToggleModal}>
            <Text style={styles.HeaderText}>확인</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  modalContent: {
    backgroundColor: 'white',
    width: 304,
    height:310,
    borderRadius: 10,
  },

  HeaderText:{
    fontSize:14,
  },
});

export default AlarmInfoAlert;
