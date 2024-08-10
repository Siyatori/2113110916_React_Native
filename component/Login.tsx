import { View, Text, Button, TextInput, Alert } from "react-native";
import React from "react";
import { stylesLogin } from "../style/styles";

const Login = (): React.JSX.Element => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const validateEmail = (email: string): boolean => {
    const recheckEmail = /\S+@\S+\.\S+/;
    return recheckEmail.test(email);
  };

  const buttonSubmit = () => {
    let errorMessage = "";
    if (!name) {
      errorMessage += "Please Enter Name\n";
    }
    if (!email) {
      errorMessage += "Please Enter Email\n";
    } else if (!validateEmail(email)) {
      errorMessage += "Invalid Email Format\n";
    }

    if (!password) {
      errorMessage += "Please Enter Password\n";
    } else if (password.length < 6) {
      errorMessage += "Password must be at lease 6 characters\n";
    }

    if (errorMessage) {
      Alert.alert("Error", errorMessage.trim(), [{ text: "OK" }]);
      return;
    }
    Alert.alert("Alert", "Success", [{ text: "OK" }]);
  };

  return (
    <View style={stylesLogin.container}>
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      ></TextInput>
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      ></TextInput>
      <TextInput
        style={stylesLogin.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      ></TextInput>
      <Button title="submit" onPress={buttonSubmit} />
    </View>
  );
};

export default Login;
