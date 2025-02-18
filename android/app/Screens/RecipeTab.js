import React, { useState, useEffect, } from 'react';
import { View, Text, TouchableOpacity , StyleSheet, TextInput, FlatList, ScrollView,Switch,Image} from 'react-native';
import firestore from "@react-native-firebase/firestore";

const RecipeTab = ({navigation}) => {
  const [showUserRecipes, setShowUserRecipes] = useState(false);
  const [recipeData, setRecipeData] = useState([]);
  const [refrigeratorIngredients, setRefrigeratorIngredients] = useState([]);
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);

  useEffect(() => {
    fetchRecipeData();
//    fetchBookmarkedRecipes();
  }, []);

const handleToggleSwitch = () => {
  setShowUserRecipes((prev) => !prev);
};

const orderByKorean = async () => {
  const koreanOrder = await firestore().collection('recipe').orderBy('recipeName').get();
  return koreanOrder.docs.map((doc) => doc.data());
};

// 부족한 재료 갯수가 적은 순으로 정렬하는 함수
const refrigeratorOrderByLack = async (refrigeratorIngredients) => {
  const lackOrder = await firestore().collection('recipe').get();

  const sortedRecipe = lackOrder.docs
    .map((recipeDoc) => {
      const recipeDocData = recipeDoc.data();
      const lack = compareIngredients(refrigeratorIngredients, recipeDocData.recipe_ingredients);

      return {
        recipeId: recipeDoc.recipeId,
        lackCount: lack.length,
      };
    })
    .sort((a, b) => a.lackCount - b.lackCount);

  return sortedRecipe.map((recipeDocData) => ({
    recipeId: recipeDocData.recipeId,
    lackCount: recipeDocData.lackCount,
  }));
};


const fetchRecipeData = async() => {

  try {
    const userId = 'xxvkRzKqFcWLVx4hWCM8GgQf1hE3';
    const fetchedRecipes = [];

    for (let i = 1; i <= 100; i++) {
      const docName = i.toString();
      const recipeRef = firestore().collection('recipes').doc(docName);
      const recipeSnapshot = await recipeRef.get();

      if (recipeSnapshot.exists) {
        const recipeData = recipeSnapshot.data();
        const recipeContents = {
          id: docName,
          name: recipeData.recipe_name,
          image: recipeData.recipe_image,
          time: recipeData.recipe_time,
        };
        fetchedRecipes.push(recipeContents);
      } else {
        console.warn(`레시피 문서 "${docName}"을(를) 찾을 수 없습니다.`);
      }
    }


    setRecipeData(fetchedRecipes);
  } catch (error) {
    console.error('북마크 레시피를 가져오는데 실패했습니다.', error);
  }
};

const displayLackingIngredients = async (recipeId, recipeIngredients) => {
  const lackingIngredients = compareIngredients(refrigeratorIngredients, recipeIngredients);
  if (lackingIngredients.length > 0){
    try{
      const lackId = await addLackToCollection({ recipeId, lackingIngredients });
      console.log('Lack added with ID: ', lackId);
    } catch (error) {
      console.error('Error adding lack: ', error);
    }
  }
  return lackingIngredients.join(', ');
};
  
const handleSortOrder = async (orderType) => {
  switch (orderType) {
    case 'korean':
      const koreanOrder = await orderByKorean();
      setRecipeData(koreanOrder);
      break;
    case 'lack':
      const lackOrder = await refrigeratorOrderByLack(refrigeratorIngredients);
      setRecipeData(lackOrder);
      break;
    default:
      break;
  }
};

  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.row}>
          {/* Recipe list */}
          {recipeData.map((recipe) => (
            <TouchableOpacity
              key={recipe.id}
              style={styles.post}
              onPress={() => navigation.navigate('RecipeMain', { recipeId: recipe.id })}>
              <Image source={{ uri: recipe.image }}
                style={{ width: 118, height: 66, left: 12, top: 11, borderRadius: 7 }}
              />
              <Text style={styles.foodText}>{recipe.name}</Text>
              <View style={{ left: 12, top: 15 }}>
              </View>
              <Text style={styles.timeText}>
              {recipe.time[0] !== 0 && `${recipe.time[0]} 시간 `}
              {recipe.time[1] !== 0 && `${recipe.time[1]} 분`}
            </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    
      {/* Filtering and Sorting Controls */}
      <View style={styles.controls}>
        <View style={styles.filterSwitchContainer}>
          <Text>Show User Recipes</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={showUserRecipes ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={handleToggleSwitch}
            value={showUserRecipes}
          />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={fetchRecipeData}>
          <Text style={styles.addButtonText}>Add Recipe</Text>
        </TouchableOpacity>
        <View style={styles.sortButtons}>
          <TouchableOpacity style={styles.sortButton} onPress={() => handleSortOrder('korean')}>
            <Text>Sort by Korean</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortButton} onPress={() => handleSortOrder('lack')}>
            <Text>Sort by Lack</Text>
          </TouchableOpacity>
          {/* Add more sorting buttons as needed */}
      </View>
    </View>



      {/* Filtering and Sorting Controls */}
      <View style={styles.controls}>
        <View style={styles.filterSwitchContainer}>
          <Text>Show User Recipes</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={showUserRecipes ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={handleToggleSwitch}
            value={showUserRecipes}
          />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.goBack()}>
          <Text style={styles.addButtonText}>Add Recipe</Text> 
        </TouchableOpacity>
        <View style={styles.sortButtons}>
          <TouchableOpacity style={styles.sortButton} onPress={() => handleSortOrder('korean')}>
            <Text>Sort by Korean</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortButton} onPress={() => handleSortOrder('lack')}>
            <Text>Sort by Lack</Text>
          </TouchableOpacity>
          {/* Add more sorting buttons as needed */}
        </View>
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
    container: {
    backgroundColor: '#F8F9FA', // 배경색상 추가
    height: 'auto',
  },
  containerScroll: {
    top: 90,
    backgroundColor: '#F8F9FA', // 배경색상 추가
    height: 'auto',
  marginBottom: 170,
  },
  cont: {
    flexDirections: 'row',
    justifyContent: 'center',
    felxWrap: 'wrap',
  },
  post: {
    position: 'relative',
    width: 141,
    height: 154,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 3,
    alignContent: 'flex-start',
    shadowColor: "#000000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  foodText: {
    top: 14,
    paddingLeft: 12,
    fontWeight: 'bold',
  },
  lackingText: {
    paddingLeft: 2,
    bottom: 7,
    color: '#E50000',
    fontSize: 10,
    fontFamily: 'NanumGothic',
  },
  timeText: {
    paddingLeft: 10,
    top: 10,
    color: '#000',
    fontSize: 12,
    margin: 5,
    fontFamily: 'NanumGothic',
  },
  row: {
    flexDirection: 'row', 
    display:'flex',
    flexWrap:'wrap',
    justifyContent: 'space-around', 
    position: 'relative', 
    paddingHorizontal: 40, 
    paddingBottom: 80, 
    gap: 20,
    
  },
});

export default RecipeTab;