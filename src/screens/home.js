import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ms, vs ,s } from 'react-native-size-matters';
import { connect } from 'react-redux'

const Home = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>UserName :  {props.user.username}</Text>
        <Text style={styles.text}>Email :  {props.user.email}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoContainer: {
    height: vs(200),
    width: '90%',
    backgroundColor: '#fff',
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: vs(1),
      width: s(2)
    },
    justifyContent: 'center',
    alignItems:'center',
    elevation:5
  },
  text: {
    fontSize: ms(20),
    fontWeight: '500'
  }
})

const mapStateToProps = (state) => ({ user: state.user });

const connectComponent = connect(mapStateToProps);

export default connectComponent(Home)
