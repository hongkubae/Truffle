import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  PanResponder,
  TextInput,
  Image,SafeAreaView, FlatList
} from 'react-native';
import  {  vegetable, bread, fruit, sausage, seafood, truffle, noodle, spice, bean, grain, meat, milk }  from './IngredientsArray';
import SearchIcon from "../assets/icons/SearchIcon";

const Ingredients = () => {
  const screenHeight = Dimensions.get("screen").height;
  //--검색 쿼리--\\
  const [searchQuery, setSearchQuery] = useState('');
  const allIngredients = [...vegetable, ...bread, ...fruit, ...sausage, ...truffle, ...noodle, ...spice, ...bean, ...grain, ...meat, ...milk];
  const filteredData = searchQuery
    ? allIngredients.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allIngredients;

  return (
    <View style={styles.container}> 
      <View style={styles.inputArea}>
        <View style={styles.wrapper}>
          <SearchIcon/>
          <TextInput
          style={styles.search}
          placeholder='검색...'
          onChangeText={setSearchQuery}
          value={searchQuery}
          keyboardType="default"
          />
        </View>
      </View>

      <SafeAreaView>
      <View style={styles.foodContainer}>
         <FlatList
        data={filteredData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity key={item} style={styles.itemContainer}>
            <View style={styles.circularView}>
              <Image source={item.img} />
            </View>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        numColumns={5}
      />
      </View>
    </SafeAreaView>
  </View>
 
  )
}

const styles = StyleSheet.create({

  container:{
      // backgroundColor:'pink',
      height: '100%',
      width:'100%',
      // marginTop: 100,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      // padding: 10
  },
  top:{
      display:'flex',
      flexDirection: 'row',
      marginTop: 16,
      marginLeft: 10,
  },
  title:{
      paddingTop: 16,
      paddingLeft: 10,
      fontSize: 15,
      width: 141
  },
  closeButton:{
      marginTop: 16,
      marginLeft: 155,
      width: 38,
      height: 23,
      backgroundColor: '#F8F9FA',
      justifyContent: 'center',
      alignItems:'center',
      // backgroundColor:'yellow'
  },
  inputArea:{
      width:'100%',
      alignItems:'center',
      marginTop: 15,
  },
  wrapper:{
      width: 300,
      height: 48,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:'white',
      borderRadius: 15,
  },
  search:{
      width: 250,
      height: 48,
      display:'flex',
  },
  foodContainer:{
      width: '100%',
  },
  foodCategory:{
      width: 300,
      fontWeight: '400',
      fontSize: 20,
      marginTop: 28
  },
  itemContainer: {
      // borderBottomWidth: 1,
      // borderBottomColor: '#ccc',
      paddingVertical: 10,
      width: 70,
      marginTop: 10,
      flexDirection:'column',
      justifyContent:'center',
      alignItems: 'center',
      textAlign:'center',
      marginRight:12,
  },
  circularView: {
      width: 50,   
      height: 50, 
      borderRadius: 25, 
      backgroundColor: 'white', 
      // marginRight: 10, 
      marginBottom: 5,
      backgroundColor: '#FEA655'
    },
  foodName:{
      flexDirection: 'row',
      flexWrap: 'wrap',   
      paddingHorizontal: 20,
      gap: 5
  },
  scrollView: {
      height: 580,
  },
  overlay: {
      flex: 1,
      justifyContent: "flex-end",
    },
    background: {
        flex: 1,
    },
    IngredientsContainer: {
        height: '85%',
        backgroundColor: "#F8F9FA",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 10
    },
})

export default Ingredients;

/*

        <ScrollView contentContainerStyle={styles.foodName} style={styles.scrollView}>
          <Text style={styles.foodCategory}>채소</Text>
            {vegetable && vegetable.map((food, index) => (
              <TouchableOpacity key={index} style={styles.itemContainer}>
                <View style={styles.circularView}>
                  <Image source={food.img} />
                </View>
                <Text>{food.name}</Text>
              </TouchableOpacity>
            ))}
            <Text style={styles.foodCategory}>빵/떡</Text>
              {bread && bread.map((food, index) => (
                <TouchableOpacity key={index} style={styles.itemContainer}>
                <View style={styles.circularView}>
                  <Image source={food.img} />
                </View>
                <Text>{food.name}</Text>
                </TouchableOpacity>
              ))}
              <Text style={styles.foodCategory}>햄/소시지</Text>
                {sausage && sausage.map((food, index) => (
                  <TouchableOpacity key={index} style={styles.itemContainer}>
                  <View style={styles.circularView}>
                    <Image source={food.img} />
                  </View>
                  <Text>{food.name}</Text>
                  </TouchableOpacity>
                ))}
                              <Text style={styles.foodCategory}>해산물</Text>
                              {seafood && seafood.map((food, index) => (
                                  <TouchableOpacity key={index} style={styles.itemContainer}>
                                      <View style={styles.circularView}>
                                      <Image source={food.img} />
                                      </View>
                                      <Text>{food.name}</Text>
                                  </TouchableOpacity>
                              ))}
                              <Text style={styles.foodCategory}>유제품</Text>
                              {milk && milk.map((food, index) => (
                                  <TouchableOpacity key={index} style={styles.itemContainer}>
                                      <View style={styles.circularView}>
                                      <Image source={food.img} />
                                      </View>
                                      <Text>{food.name}</Text>
                                  </TouchableOpacity>
                              ))}
                              <Text style={styles.foodCategory}>고기류</Text>
                              {meat && meat.map((food, index) => (
                                  <TouchableOpacity key={index} style={styles.itemContainer}>
                                      <View style={styles.circularView}>
                                      <Image source={food.img} />
                                      </View>
                                      <Text>{food.name}</Text>
                                  </TouchableOpacity>
                              ))}
                              <Text style={styles.foodCategory}>과일</Text>
                              {fruit && fruit.map((food, index) => (
                                  <TouchableOpacity key={index} style={styles.itemContainer}>
                                      <View style={styles.circularView}>
                                      <Image source={food.img} />
                                      </View>
                                      <Text>{food.name}</Text>
                                  </TouchableOpacity>
                              ))}
                              <Text style={styles.foodCategory}>곡물</Text>
                              {grain && grain.map((food, index) => (
                                  <TouchableOpacity key={index} style={styles.itemContainer}>
                                      <View style={styles.circularView}>
                                      <Image source={food.img} />
                                      </View>
                                      <Text>{food.name}</Text>
                                  </TouchableOpacity>
                              ))}
                              <Text style={styles.foodCategory}>콩/견과류</Text>
                              {bean && bean.map((food, index) => (
                                  <TouchableOpacity key={index} style={styles.itemContainer}>
                                      <View style={styles.circularView}>
                                      <Image source={food.img} />
                                      </View>
                                      <Text>{food.name}</Text>
                                  </TouchableOpacity>
                              ))}
                              <Text style={styles.foodCategory}>조미료/양념</Text>
                              {spice && spice.map((food, index) => (
                                  <TouchableOpacity key={index} style={styles.itemContainer}>
                                      <View style={styles.circularView}>
                                      <Image source={food.img} />
                                      </View>
                                      <Text>{food.name}</Text>
                                  </TouchableOpacity>
                              ))}
                              <Text style={styles.foodCategory}>면</Text>
                              {noodle && noodle.map((food, index) => (
                                  <TouchableOpacity key={index} style={styles.itemContainer}>
                                      <View style={styles.circularView}>
                                      <Image source={food.img} />
                                      </View>
                                      <Text>{food.name}</Text>
                                  </TouchableOpacity>
                              ))}
                              <Text style={styles.foodCategory}>트러플</Text>
                              {truffle && truffle.map((food, index) => (
                                  <TouchableOpacity key={index} style={styles.itemContainer}>
                                      <View style={styles.circularView}>
                                      <Image source={food.img} />
                                      </View>
                                      <Text>{food.name}</Text>
                                  </TouchableOpacity>
                              ))}
            <View style={{ marginBottom: 10 }}></View>
            
      </ScrollView>
*/
