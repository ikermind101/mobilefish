import React from 'react';
import {View, StyleSheet, Text, Image } from "react-native";

import AppText from "../components/AppText";

function ListItem({ image, title, subTitle }) {
  return (
      <View style={styles.container}>
        <Image style={styles.image} source={image}/>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <Text style={styles.subtitle}>{subTitle}</Text>
        </View>
      </View>

  );
}
const styles = StyleSheet.create ({
  container : {
    flexDirection: "row",
    paddingTop: 20
  },
  image : {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10
  },
  title : {

  },
  subtitle : {
  },

});

export default ListItem;
