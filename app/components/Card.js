import React from 'react';
import { View, StyleSheet, Image, Text } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";



function Card({ title, subTitle, image } ) {
  return (
        <View style={styles.card}>
          <Image style={styles.image} source={image}/>
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <Text style={styles.subtitle}>{subTitle}</Text>
          </View>
        </View>

  );
}
const styles = StyleSheet.create ({
  card : {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden'
  },

  image : {
    width: "100%",
    height: 200
  },

  detailsContainer : {
    padding: 20,

  },
  title : {
    marginBottom: 7
  },
  subtitle : {
    color: colors.secondary,
    fontWeight: 'bold'
  },

});

export default Card;
