import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Text,
  Modal,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const RecipeDetail = ({ navigation, route }) => {
  const [steps, setSteps] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchRecipeSteps = async () => {
      try {
        const { recipeId } = route.params;
        const recipeDoc = await firestore()
          .collection('recipes')
          .doc(recipeId)
          .get();

        if (recipeDoc.exists) {
          const recipeData = recipeDoc.data();
          const recipeSteps = recipeData.recipe_steps || [];
          setSteps(recipeSteps);
        }
        
      } catch (error) {
        console.error('레시피 단계를 가져오는데 실패했습니다.', error);
      }
    };

    fetchRecipeSteps();
  }, []);

  const handleEnd = () => {
    alert('요리가 완료되었습니다 !');
    navigation.navigate('RecipeTab');
  };

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>조리과정</Text>
      </View>

      <View style={{alignItems:'center'}}>
      
        {steps.map((step, index) => (
          <View key={index} style={styles.content}>
            <Text style={styles.stepNumber}>{index + 1}.</Text>
            <Text numberOfLines={2} style={styles.stepText}>
              {step}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>뒤로가기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>조리완료</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>요리를 완료하시겠습니까?</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.modalButtonText}>아니요</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleEnd}>
                <Text style={styles.modalButtonText}>네</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    width: 88,
    height: 38,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: 50,
    marginRight: 280,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textDecorationLine: 'underline',
    textDecorationColor: '#FEA655',
  },
  scrollView: {
    margin: 4,
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    width: 350,
    marginBottom:10
  },
  stepNumber: {
    fontWeight: 'bold',
    fontSize: 16,
    left: 0,
  },
  stepText: {
    fontSize: 12,
    flexShrink: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    marginTop:20
  },
  button: {
    backgroundColor: '#FEA655',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'NanumGothic',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 304,
    height: 140,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    fontSize: 15,
    bottom: 13,
    top: 2,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 20,
    top: 30,
  },
  modalButton: {
    width: 90,
    borderWidth: 1,
    borderColor: '#FEA655',
    paddingVertical: 5,
    borderRadius: 25,
  },
  modalButtonText: {
    color: '#FEA655',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'NanumGothic',
    textAlign: 'center',
  },
});

export default RecipeDetail;