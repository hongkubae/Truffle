import React from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import AMPopup from "../assets/logo/AMPopup.svg";

const AMInfoAlert = ({ Visible, infoModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={Visible}
      onRequestClose={() => {
        infoModal();
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <AMPopup/>
        </View>

        <View style={{justifyContent:'center', alignItems:'center', height:40}}>
          <TouchableOpacity onPress={infoModal}>
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
    height:418,
    borderRadius: 10,
  },

  HeaderText:{
    fontSize:14,
  },
});

export default AMInfoAlert;