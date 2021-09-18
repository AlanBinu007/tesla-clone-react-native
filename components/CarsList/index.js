import React from "react";
import CarItem from "../CarItem";
import Cars from "./cars";
import { Dimensions, FlatList, View } from "react-native";
import styles from "./styles";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Cars}
        renderItem={({ item }) => <CarItem id={item.id} car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;
