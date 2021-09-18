import React from "react";
import { Pressable, Text, View, ToastAndroid } from "react-native";
import styles from "./styles";

const Button = ({ type, text }) => {
  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const color = type === "primary" ? "#FFFFFF" : "#171A20CC";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor }]}
        onPress={() => {
          ToastAndroid.show(`${text} Button Pressed!`, ToastAndroid.SHORT);
        }}
      >
        <Text style={[styles.text, { color }]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
