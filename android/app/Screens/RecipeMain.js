import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import firestore from "@react-native-firebase/firestore";

const RecipeMain = ({ navigation, route }) => {
  const [recipeName, setRecipeName] = useState('');
  const [recipeTime, setRecipeTime] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeImage, setRecipeImage] = useState(null);
  const [book, setBook] = useState([]);
  const [recipeDifficulty, setRecipeDifficulty] = useState();
  const [ingredientChecklist, setIngredientChecklist] = useState([]);

  useEffect(() => {
    const fetchRecipeInfo = async () => {
      try {
        const { recipeId } = route.params;
        const recipeDoc = await firestore().collection('recipes').doc(recipeId).get();

        if (recipeDoc.exists) {
          const recipeData = recipeDoc.data();
          setRecipeName(recipeData.recipe_name);
          setRecipeTime(recipeData.recipe_time);
          setRecipeImage(recipeData.recipe_image_url);
          setRecipeDifficulty(recipeData.recipe_difficulty);
          const ingredientsArray = convertIngredientsToArray(recipeData.recipe_ingredients);
          setRecipeIngredients(ingredientsArray);

          const checklist = Array(ingredientsArray.length).fill('X');
          setIngredientChecklist(checklist);
        } else {
          console.error('Recipe not found!');
        }
      } catch (error) {
        console.error('Failed to fetch recipe: ', error);
      }
    };

    fetchRecipeInfo();
  }, []);

  const convertIngredientsToArray = (ingredientsObject) => {
    return Object.keys(ingredientsObject);
  };

  const handleBookmarkClick = (buttonName) => {
    setBook((prevStates) => ({
      ...prevStates,
      [buttonName]: !prevStates[buttonName],
    }));
  }; 

  const getImageForBookmark = (buttonName) => {
    if (book[buttonName]) {
      switch (buttonName) {
        case 'bookmarkFill':
          return require('../assets/icons/bookmarkFill.png');
        default:
          return require('../assets/icons/bookmark.png');
      }
    } else {
      return require('../assets/icons/bookmark.png');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: recipeImage }} style={styles.image}/>

      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.bookmarkButton} onPress={() => handleBookmarkClick('bookmarkFill')}>
          <Image source={getImageForBookmark('bookmarkFill')}/>
        </TouchableOpacity>
      </View>
      <Text>{recipeName}</Text>
      <Text>{recipeTime}</Text>
      <Text>{recipeDifficulty}</Text>
      
      <View style={styles.timeContainer}>
        <Image source={require('../assets/icons/clock.png')} style={styles.clockIcon}/>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={{ top: 85, borderWidth: 1, borderColor: '#CCCCCC', paddingVertical: 10, width: 140, borderRadius: 25, marginBottom: 20 }}
          onPress={() => navigation.goBack()}>
          <Text style={{ color: '#CCCCCC', fontSize: 15, fontWeight: 'bold', textAlign: 'center', fontFamily: 'NanumGothic' }}>
            뒤로가기
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RecipeDetail', { recipeId: route.params.recipeId })}>
          <Text style={styles.buttonText}>조리하기</Text>
        </TouchableOpacity>
      </View>

      {/* 레시피 재료 출력 */}
      <View style={styles.ingredientsContainer}>
        <Text style={styles.ingredientsTitle}>레시피 재료</Text>
        {recipeIngredients.map((ingredient, index) => (
          <Text key={index}>{ingredient}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F8F9FA',
    width: '100%',
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
  ingredientsContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checklistContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  checklistTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checklistItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  checklistText: {
    fontSize: 16,
  },
});

export default RecipeMain;
