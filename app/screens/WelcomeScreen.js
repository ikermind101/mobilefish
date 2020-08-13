import React from 'react';
import { ImageBackground, View, StyleSheet, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors.js";


function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
     >
      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../assets/logo.png')}/>
      <Text style={styles.tagline}>Catch them All!</Text>
      </View>
      <View style={styles.buttonsContainer}>
      <AppButton title="login"/>
      <AppButton title="Register" color="secondary"/>
      </View>

     </ImageBackground>
  );
}


const styles = StyleSheet.create ({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center"
  },
  buttonsContainer: {
    padding: 15,
    width: '100%'
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    color: colors.white,
    fontWeight: '600',
    paddingVertical: 10,
    fontSize: 20
  }

})

export default WelcomeScreen;
