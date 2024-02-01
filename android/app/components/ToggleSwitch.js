import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, Easing, Toggle } from 'react-native';


const ToggleSwitch = () => {
  const [animatedValue] = useState(new Animated.Value(isOn ? 1 : 0));
  const [isOn, setisOn]=useState(true);

  const togglePress = () => {
    setisOn(!isOn);
  };

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isOn, animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 17],
  });

  const color = isOn ? '#FEA655' : 'lightgray'; // Replace with actual color values

  const onPress = () => {
    togglePress();
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.toggleContainer, { backgroundColor: color }]}>
      <Animated.View
        style={[styles.toggleWheel, { transform: [{ translateX }] }]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    width: 36,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  toggleWheel: {
    width: 18,
    height: 18,
    backgroundColor: 'white',
    borderRadius: 99,
  },
});

export default ToggleSwitch;

