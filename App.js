import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import CarsList from "./components/CarsList";
import Header from "./components/Header";
import Button from "./components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <CarsList />
      <Header />
      <View style={styles.buttonContainer}>
        <Button type="primary" text="Custom Order" />
        <Button type="secondary" text="Exsisting Inventory" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
});
