import { View, Text, Button, TextInput, } from 'react-native'
import React from 'react'
import { stylesLogin } from "../style/styles";

const Login = (): React.JSX.Element => {
  return (
    <View style={stylesLogin.container}>
      <TextInput style={stylesLogin.input}>Enter Name</TextInput>
      <TextInput style={stylesLogin.input}>Enter Email</TextInput>
      <Button title='submitBT' />
      {/* <Text style={stylesPractice.text}>{displayFullname}</Text> */}
      {/* <Button title="ClickMe" onPress={onButtonClick} /> */}
    </View>
  )
}

export default Login