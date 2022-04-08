import React, { useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../components/input'
import Button from '../components/button';
import { connect } from 'react-redux';
import { s } from 'react-native-size-matters';
import * as Action from '../reducer/action'

const nameRegx = /^[A-Za-z0-9_-]{5,15}$/;
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const SignUp = (props) => {
  const [state, setState] = useState(
    {
      username: null,
      email: null,
      password: null,
      confirmPassword: null
    }
  )
  const navigateToHome = () => {
    props.SignUp(state)
    props.navigation.navigate('Home')
  }

  const validate = () => {
    if (!nameRegx.test(state.username))
      alert('Invalid UserName')
    else if (!regex.test(state.email))
      alert('Invalid Email')
    else if (!passRegex.test(state.password))
      alert('Invalid Password')
    else if (state.password !== state.confirmPassword)
      alert('Invalid Passwords')
    else navigateToHome();
  }
  return (
    <View style={styles.container}>
      <Input
        label="Name"
        placeholderText="Name"
        autoCapitalize="none"
        value={state.username}
        onChangeText={(val) => setState({ ...state, username: val })}
      />
      <Input
        label="Email"
        placeholderText="Email"
        autoCapitalize="none"
        value={state.email}
        onChangeText={(val) => setState({ ...state, email: val })}
      />
      <Input
        label="Password"
        placeholderText="Password"
        secureTextEntry={true}
        value={state.password}
        onChangeText={(val) => setState({ ...state, password: val })}
      />
      <Input
        label="confirm Password"
        placeholderText="confirm Password"
        secureTextEntry={true}
        value={state.confirmPassword}
        onChangeText={(val) => setState({ ...state, confirmPassword: val })}
      />
      <Button label="SignUp" onPress={validate} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: s(10),
    justifyContent: 'center'
  }
})
const mapDispatchToProps = (dispatch) => ({
  SignUp: (data) => dispatch(Action.signUp(data))
})
const connectComponent = connect(null, mapDispatchToProps);
export default connectComponent(SignUp)