{/* 재료박스 스크롤 하려는데 ScrollView 오류, 재료들 row로 해서 justifyContent center 하려는데 안됨, 재료랑 양이랑 margin 띄우면서 재료는 재료끼리 양은 양끼리 열맞추고 싶은데 잘안됨 */}

import React, {useState} from 'react';
import {
  NavigationContainer,
  Text,
  Button,
  View,
  TouchableOpacity,
  FlatList, ScrollView, 
  StyleSheet, Alert, Modal, Image
} from 'react-native';



const Title = props => {
const {food} = props

  return (
    <Text style={{color: '#000', marginHorizontal: 5,
        textDecorationLine: 'underline', textDecorationColor: '#FEA655', fontSize: 20, 
        }}>{props.food}</Text>

  );
};

{/* 음식재료 */}
const Ingred = props => {


  return (
    <View style={{ 
    marginVertical: 2,
    marginTop: 14,
    alignItems: 'flex-end',
    right: 124,
    position: 'absolute',

    }}>
    <Text style={{color: '#000', marginHorizontal: 5,
        fontSize: 13, fontWeight: 'bold', }}>
        {props.ingred}</Text> 

    </View>
  );
};

const Num = props => {
  return (

 <View style={{ 
    left: 101,
    top: 12,
    alignItems: 'flex-end',
    
    }}>
    <Text style={{ color: '#000', marginHorizontal: 5,
        fontSize: 13, }}>
        {props.num} </Text>
  </View>
  );
};

const Unit = props => {


  return (

 <View style={{ 
    left: 125,
    top: 12,
    alignItems: 'flex-start',
    position: 'absolute'
    }}>
    <Text style={{ color: '#000', marginHorizontal: 5,
        fontSize: 13,}}>
      {props.unit}</Text>
  </View>
  );
};

const Measure = props => {


  return (

    <View style={{ 
    marginLeft: 105, 
    top: 12,
    left: 70,
    alignItem: 'center',
    position: 'absolute',
    
    }}>
        <Text style={{color: '#979797', marginHorizontal: 5, fontSize: 12
        }}>
        {props.measure}</Text>
    </View>
  );
};



const Time = item => {
const {food, time} = props

  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', 
    marginVertical: 5,
    marginHorizontal: 20,}}>
        <Text style={{color: '#000', marginHorizontal: 5,
        fontSize: 18,}}>
        {item.time} 분</Text>

    </View>
  );
};

const recipes = [{ id: 1, recipe_name: '김치찌개', measure: 1, num: 30, unit: '햄', img: ''}, ]

  const RecipeMain = ({navigation}) => {
  const time = [1, 40];

  const allFood = [...recipes];
  const filteredData = allFood;

  
  function updateCookingTime() {
  const hasHour = time[0] !== '0';
  const hasMinute = time[1] !== '0';
  if (hasHour || hasMinute){
    const newCookingTime = `${hasHour ? hour + '시간' : ''} ${hasMinute ? min + '분' : ''}`;
    return newCookingTime;
  }
}



  {/* 북마크 */}
const [book, setBook] = useState({
    bookmark: false,
    bookmarkFill: false,
  });

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
    } 
    else{
      return require('../assets/icons/bookmark.png');
    }
  };


  return (
    <View style={styles.container}>

      <Image source={{ uri: "https://via.placeholder.com/118x66"}}
        style={{top: 83,
    marginBottom: 20, 
    paddingTop: 4, borderRadius: 7, position: 'absolute', backgroundColor: '#EDEDED', width: 350, height: 139,}}/>


{/*<ScrollView style={{top: 100, height: 'auto'}}> */}

{/*텍스트박스 어떻게 한쪽으로만 늘어나게하지 */}
      <View
        style={{
          top: 240, right: 130, marginLeft: 10,
        backgroundColor: '#FFFFFF',
        
        borderRadius: 10,
        paddingLeft: 6, paddingRight: 6, paddingTop: 7, paddingBottom: 7, 
        marginBottom: 17, 
          }}
> 
<Title food="닭볶음탕"/>
    <TouchableOpacity style={{position: 'absolute', left: 315, bottom: 10}} onPress={() => handleBookmarkClick('bookmarkFill')}>
        <Image source={getImageForBookmark('bookmarkFill')}/>
    </TouchableOpacity>

      </View>
<View
        style={{ right: 62, top: 240,
        backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    width: 215,
    height: 330,
    borderRadius: 10, 
    }}>
    <Image style={{right: 180, top: 10, zIndex: 2, position: 'absolute' , }} source={require('../assets/icons/bowl.png')}/>

  <View style={{flexDirection: 'row'}}>
        <Ingred ingred="아스파라거스" />        
        <Num num="100" />
        <Unit unit="ml"/>
        <Measure measure="70g"/>
  </View>
  <View style={{flexDirection: 'row'}}>
        <Ingred ingred="표고버섯" />
        <Num num="2" />
        <Unit unit="작은술"/>
        <Measure measure="1000g"/>
  </View>
   <View style={{flexDirection: 'row'}}>
        <Ingred ingred="감자" />
        <Num num="1000" />
        <Unit unit="개"/>
        <Measure measure="1000g"/>

<FlatList
        data={filteredData}
        keyExtractor={(item) => item.recipe_id}
        renderItem={({ item }) => (
      <View style={{ 
    marginVertical: 2,
    marginTop: 14,
    alignItems: 'flex-end',
    right: 124,
    position: 'absolute',

    }}>
    <Text style={{color: '#000', marginHorizontal: 5,
        fontSize: 13, fontWeight: 'bold', }}>
        {item.ingred}</Text> 

    </View>)} />
  </View>
        
      </View>
<View
        style={{ left: 115, bottom: 91,
        backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    width: 112,
    height: 150,
    borderRadius: 10,
    marginBottom: 15, }}>
      <View style={{flexDirection: 'row', 
    justifyContent: 'center', top: 78,
          color: '#000',}}>
        <Image style={{ left: 45, bottom: 98, position: 'absolute', alignItems: 'center', }} source={require('../assets/icons/clock.png')}/>
        <Text style={{
          color: '#000', 
        fontSize: 18, 
        textAlign: 'center',
        bottom: 15
        }}> {updateCookingTime}분 {'\n'}이내</Text>
      </View>
      </View>

      <View
        style={{ left: 115, bottom: 91,
        backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    width: 112,
    height: 166,
    borderRadius: 10, }}
        onPress={() => navigation.navigate('Recipe')}>
        <Text style={{
          top: 5,
          color: '#000000', 
        fontSize: 18, 
        textAlign: 'center',
        }}>
        난이도</Text>
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
        onPress={() => navigation.navigate('recipeDetail')}>
        <Text style={styles.buttonText}>조리하기</Text>
      </TouchableOpacity>
  </View>

    </View>
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