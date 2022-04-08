import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { s, vs, ms } from 'react-native-size-matters'

const Button = (props) => {

  const { label } = props;

  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.title}>{label}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    marginVertical: vs(10),
    height: vs(40),
    backgroundColor: 'pink',
    shadowColor: 'grey',
    shadowOpacity: 0.8,
    shadowOffset: {
      height: vs(2),
      width: s(3)
    },
    borderRadius: ms(20),
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: ms(18),
    fontWeight: '500'
  }
})
export default Button