import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { s } from 'react-native-size-matters';
import Input from '../components/input';
import Button from '../components/button';
import { connect } from 'react-redux';
import * as Action from '../reducer/action'

const nameRegx = /^[A-Za-z0-9_-]{5,15}$/;
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const Login = (props) => {
  const [state, setState] = useState(
    {
      username: null,
      email: null,
      password: null
    }
  )
  
const navigateToHome = () => {
    props.Login(state)
    props.navigation.navigate('Home')
  }
  const navigateToSignUp = () => props.navigation.navigate('SignUp')
  const validate = () => {
    if (!nameRegx.test(state.username))
      alert('Invalid UserName')
    else if (!regex.test(state.email))
      alert('Invalid Email')
    else if (!passRegex.test(state.password))
      alert('Invalid Password')
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
      <Button label="Login" onPress={validate} />
      <Text
        style={styles.signUp}
        onPress={navigateToSignUp}
      >
        {`Don't Have an account , SignUp? `}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: s(10),
    justifyContent: 'center'
  },
  signUp: {
    textAlign: 'center'
  }
})
const mapDispatchToProps = (dispatch) => ({
  Login: (data) => dispatch(Action.logIn(data))
})
const connectComponent = connect(null, mapDispatchToProps);

export default connectComponent(Login)