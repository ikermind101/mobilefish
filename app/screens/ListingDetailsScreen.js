import React from 'react';
import {View, StyleSheet, Text, Image } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/blackcrappie.png')}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> Black crappie </AppText>
        <AppText style={styles.size}> 2.3lbs </AppText>
        <ListItem
          image={require('../assets/blackcrappie.png')}
          title="Ike AH"
          subTitle="8 fish"
        />
      </View>
    </View>

  );
}
const styles = StyleSheet.create ({
  image : {
    width: '100%',
    height: 300
  },
  detailsContainer: {
    padding: 20,
  },
  title : {
    marginBottom: 7,
    fontSize: 24,
    fontWeight: "500"
  },
  size : {
    color: colors.secondary,
    fontWeight: 'bold',
    marginVertical: 10
  },

});

export default ListingDetailsScreen;
