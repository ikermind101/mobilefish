import React from 'react';
import { ImageBackground, View, StyleSheet, Image, Text } from "react-native";

function ViewImageScreen(props) {
  return (
    <Image
    resizeMode="contain"
    style={styles.image}
    source = {require("../assets/bluegill.png")}
    />
  );
}
const styles = StyleSheet.create ({
  image: {
    width: '100%',
    height: '100%'
  }

});

export default ViewImageScreen;
