import { View, Text, Button, TextInput, Alert } from 'react-native'
import React from 'react'
import { stylesLogin } from "../style/styles";

const Login = (): React.JSX.Element => {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const buttonSubmit = () => {
    if(name == "" && email ==""){
      Alert.alert("Alert", "Please Enter Name & Email")
    }
    else if(name == ""){
      Alert.alert("Alert", "Please Enter Name")
    }
    else if(email == ""){
      Alert.alert("Alert", "Please Enter Email")
    }
    else{
      Alert.alert("Alert", "Success")
    }
  }

  return (
    <View style={stylesLogin.container}>
      <TextInput style={stylesLogin.input} placeholder='Enter Name' value={name} onChangeText={setName}></TextInput>
      <TextInput style={stylesLogin.input} placeholder='Enter Email' value={email} onChangeText={setEmail}></TextInput>
      <Button title='submit' onPress={buttonSubmit} />
    </View>
  )
}

export default Login