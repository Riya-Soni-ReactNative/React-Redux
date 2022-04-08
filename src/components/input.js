import React, { useState, useRef } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { s, vs, ms } from 'react-native-size-matters'

const Input = (props) => {
  const { label, placeholderText } = props;
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholderText}
        {...props}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginVertical: vs(10),
    height: vs(40),
    backgroundColor: '#fff',
    paddingHorizontal: s(10),
    paddingVertical: vs(5),
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: vs(1),
      width: s(2)
    },
    justifyContent: 'space-between',

  },
  input: {
    borderBottomWidth: ms(0.5)
  }
})
export default Input