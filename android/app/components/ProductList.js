import React, {useState} from 'react';
import { View, Button, Modal, Text, TouchableOpacity, StyleSheet,Dimensions, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements';
import AddBTNIcon from "../assets/icons/AddBTNIcon.svg";
import SmallAddBTNGrey from "../assets/icons/SmallAddBTNGrey";

const ProductList = () => {

  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    if (quantity && itemName && price) {
      const newItem = {
        quantity,
        itemName,
        price,
      };

      setItems([...items, newItem]);
      setQuantity('');
      setItemName('');
      setPrice('');
    }
  };

  return (
      <View>
        <View style={{alignItems:'center', marginTop:50}}>
          
          <View style={{ marginTop:50, flexDirection:'row', gap:20, justifyContent:'center'}}>
          <TouchableOpacity onPress={handleAddItem} >
            <SmallAddBTNGrey/>
          </TouchableOpacity>
          <TextInput
            placeholder="품목"
            style={[styles.input, {width:100}]}
            value={itemName}
            onChangeText={(text) => setItemName(text)}
            />
            <TextInput
            placeholder="수량"
            style={styles.input}
            value={quantity}
            keyboardType="number-pad"
            onChangeText={(text) => setQuantity(text)}
            />
            <TextInput
            placeholder="가격"
            style={styles.input}
            value={price}
            keyboardType="number-pad"
            onChangeText={(text) => setPrice(text)}
            />
              </View>
        </View>

         <View style={{marginTop:20, backgroundColor:'#F8F9FA'}}>
          {items.map((item, index) => (
          <ListItem key={index} bottomDivider>
            <ListItem.Content>
              <ListItem.Subtitle>{`# ${item.quantity} ${item.itemName} ${item.price}원`}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          ))}
        </View>
      </View>
  );
};

const styles = StyleSheet.create({

  modalContent: {
    backgroundColor: 'white',
    width: 304,
    height:310,
    borderRadius: 10,
  },
  HeaderText:{
    fontSize:14,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 38,
    backgroundColor:'white',
    borderColor: 'gray',
    borderBottomWidth:1,
    marginBottom: 8,
    paddingHorizontal: 8,
    fontSize:14,
    textAlign:'center'
  },
});

export default ProductList;