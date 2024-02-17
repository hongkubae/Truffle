import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import firestore from "@react-native-firebase/firestore";

const RecipeMain = ({ navigation }) => {
  const [recipeName, setRecipeName] = useState(null);
  const [recipeTime, setRecipeTime] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeImage, setRecipeImage] = useState(null);
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchRecipeInfo = async () => {
      try {
        const recipeId = navigation.getParam('recipeId');
        const recipeDoc = await firestore().collection('recipes').doc(recipeId).get();

        if (recipeDoc.exists) {
          const recipeData = recipeDoc.data();
          setRecipeName(recipeData.recipe_name);
          setRecipeTime(recipeData.recipe_time);
          setRecipeIngredients(recipeData.recipe_ingredients);
          setRecipeImage(recipeData.recipe_image_url);
        } else {
          console.error('Recipe not found!');
        }
      } catch (error) {
        console.error('Failed to fetch recipe: ', error);
      }
    };

    fetchRecipeInfo();
  }, []);

    const handleBookmarkClick = (buttonName) => {
    setBook((prevStates) => ({
      ...prevStates,
      [buttonName]: !prevStates[buttonName],
    }));
    console.log(recipeData.recipe_name);
  }; 

  const getImageForBookmark = (buttonName) => {
    if (book[buttonName]) {
      switch (buttonName) {
        case 'bookmarkFill':
          return require('../assets/icons/bookmarkFill.png');
        default:
          return require('../assets/icons/bookmark.png');
      }
    } 
    else{
      return require('../assets/icons/bookmark.png');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: recipeImage }} style={styles.image}/>

      <View style={styles.titleContainer}>
        <Text food={recipeName}/>
        <TouchableOpacity style={styles.bookmarkButton} onPress={() => handleBookmarkClick('bookmarkFill')}>
          <Image source={getImageForBookmark('bookmarkFill')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.ingredientsContainer}>
        {recipeIngredients.map((ingredient, index) => (
          <Ingred key={index} ingred={ingredient.name} amount={ingredient.amount} unit={ingredient.unit}/>
        ))}
      </View>

      <View style={styles.timeContainer}>
        <Image source={require('../assets/icons/clock.png')} style={styles.clockIcon}/>
  
      </View>

<View style={styles.row}>
      <TouchableOpacity
        style={{ top: 85,
        
    borderWidth: 1,
    borderColor: '#CCCCCC',
    paddingVertical: 10,
    width: 140,
    borderRadius: 25,
    marginBottom: 20, }}
        onPress={() => navigation.goBack()}>
 
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
        onPress={() =>navigation.navigate('RecipeDetail', { recipeId: id })}>
        <Text style={styles.buttonText}>조리하기</Text>
      </TouchableOpacity>
  </View>
</ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F8F9FA', width: '100%',
    height: '100%',
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

});


export default RecipeMain;