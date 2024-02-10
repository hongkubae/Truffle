import React, { useState, useEffect, } from 'react';
import { View, Text,  StyleSheet,  Dimensions, ScrollView} from 'react-native';
import TruffleLogo from "../assets/logo/TruffleLogo";

const CreditView = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.Texts}>Credit</Text>
      </View>

      <View style={{justifyContent:'center', alignItems:'center', }}>
      <View style={{flexDirection:'row', gap:10}}>
        <Text style={{fontSize:40}}>Truffle</Text>
        <TruffleLogo/>
      </View>
      
      <View style={{marginTop:20}}>
        <Text style={styles.HeaderText}>Project Leader</Text>
          <View style={styles.context}>
            <Text style={styles.contextText}>Sanghyun Brandon Kim</Text>
          </View>
      </View>

      <View style={{marginTop:20}}>
        <Text style={styles.HeaderText}>Front-end Developer Head</Text>
          <View style={styles.context}>
            <Text style={styles.contextText}>Dakyung Kang</Text>
          </View>
      </View>

      <View style={{marginTop:20}}>
        <Text style={styles.HeaderText}>Back-end Developer Head</Text>
          <View style={styles.context}>
            <Text style={styles.contextText}>Hayoung Im</Text>
          </View>
      </View>

      <View style={{marginTop:20}}>
        <Text style={styles.HeaderText}>Front-end Developers</Text>
          <View style={[styles.context, {height:100}]}>
            <Text style={styles.contextText}>YoungHun Kim</Text>
            <Text style={styles.contextText}>Kyowon Song</Text>
          </View>
      </View>

      <View style={{marginTop:20}}>
        <Text style={styles.HeaderText}>Back-end Developers</Text>
          <View style={[styles.context, {height:100}]}>
            <Text style={styles.contextText}>Hongku Bae</Text>
            <Text style={styles.contextText}>Sanghyun Brandon Kim</Text>
          </View>
      </View>

      <View style={{marginTop:20}}>
        <Text style={styles.HeaderText}>Designers</Text>
          <View style={[styles.context, {height:100}]}>
            <Text style={styles.contextText}>Jiwon Lee</Text>
            <Text style={styles.contextText}>Yuri Lee</Text>
          </View>
      </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    backgroundColor: '#F8F9FA',
  },
  Texts: {
    color: '#474646',
    //font-family: NanumGothic,
    fontSize: 24,
    marginLeft: 22,
    marginTop: 20,
  },
  context:{
    width: Dimensions.get('window').width-20,
    height:60,
    backgroundColor: 'white',
    borderRadius:5,
  },
  HeaderText:{
    fontSize:16,
    fontWeight:'bold'
  },
  contextText:{
    fontSize:16,
    padding:10
  },

})

export default CreditView;