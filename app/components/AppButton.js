import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";


function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors[color]} ]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create ({
  text: {
    color: "white",
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  button: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  }

});

export default AppButton;
