{/* 그림자 모양이 이상함 */}

import React, {useState} from 'react';
import { TouchableOpacity, TextInput, Image, Text, ScrollView, View, Button, StyleSheet } from 'react-native';
//import Warn from "./assets/lack.svg";

{/* 데이터로 어떻게 받는지 잘 모르겠음*/}
const data = [
  { id: 1, food: '부대찌개', time: 130},
];

{/* 레시피 음식메뉴 컴포넌트 */}
const Post = props => {
  const [isHungry, setIsHungry] = useState(true);
  const {id, food, time, lacking, lackMore} = props

  return (

    <ScrollView style={styles.container}>
      <View>
      <TouchableOpacity
        style={styles.post}
        onPress={() => navigation.navigate('Loginpg')}>
        {/* <Image source={{ uri: "https://via.placeholder.com/118x66"}}
      style={{width: 118, height: 66, left: 12, top: 11, borderRadius: 7}} 
  />*/}
        <Text style={styles.foodText}>{props.food}</Text>
        <View style={{left: 12, top: 15}}>
        {/*<Image source={require("./assets/lack.svg")}
      style={{width: 10, height: 11.1, left: 3}} 
  />*/}
        <Text style={styles.lackingText}>{props.lacking}{props.lackMore} 부족</Text>
        </View>
        {/*<Image source={require("./assets/time.svg")} /> */}
        <Text style={styles.timeText}>{props.time} 분</Text>
      </TouchableOpacity>
  </View>
    </ScrollView>
  );
};


{/* 레시피 추천화면 출력용 */}
const RecipeTab = ({navigation}) => {
  const [cookOrderIndex, setCookOrderIndex] = useState(0);
  const cookOrder = [
    /*
    require('./assets/defaultOrder.svg'),
    require('./assets/shortOrder.svg'),
    */
  ];
  const handleOrderPress = () => {
    setCookOrderIndex((prevIndex) => (prevIndex + 1) % cookOrder.length);
  };

  return (
    <View style={styles.container}>
    {/*<Image source={require("./assets/navi.svg")}/>*/}
    <View style={{ left: 40, top: 40, width: 299, height: 48, paddingVertical: 8, paddingHorizontal: 40, backgroundColor: 'white', borderRadius: 15, justifyContent: 'center', flexDirection: 'column', }}>
        <TextInput style={{ borderWidth: 0, top: 14, width: 300, height: 20, textAlign: 'left', color: '#9C9C9C', fontSize: 14, fontFamily: 'NanumGothic', fontWeight: '400', flexWrap: 'wrap' }} placeholder="검색" />
        <Text style={{top: 48, right: 55, fontSize: 10}}>
          내가 만든 레시피만 보기
        </Text>
<TouchableOpacity onPress={handleOrderPress} style={{ border: 'none', backgroundColor: 'transparent' }}>
          <Image source={cookOrder[cookOrderIndex]} />
        </TouchableOpacity>
      </View>

    <ScrollView style={styles.containerScroll}>
    <View style={styles.row}>
      <Post style={styles.cont} food="부대찌개" lacking="햄" time="50" />
      <Post food="떡볶이" lacking="햄" time="20" lackMore="+3" />
      <Post food="김밥" lacking="햄" time="120" lackMore="+12" />
      <Post food="볶음밥" lacking="햄" time="8" />
      <Post food="계란 볶음밥" lacking="햄" time="10" />
      <Post food="닭볶음탕" lacking="햄" time="40" />
      <Post food="호박죽" lacking="햄" time="100" lackMore="+2"/>
      </View>
    </ScrollView>
    </View>
  );
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