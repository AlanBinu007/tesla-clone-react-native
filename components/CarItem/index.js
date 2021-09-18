import React from "react";
import styles from "./styles";
import { View, Text, ImageBackground } from "react-native";

const CarItem = ({ car }) => {
  const { name, tagline, taglineCTA, image } = car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image}></ImageBackground>
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline}

          <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
    </View>
  );
};

export default CarItem;
