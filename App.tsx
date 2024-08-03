import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import AppFooter from "./component/AppFooter";
import AppHeader from "./component/AppHeader";
import Content from "./component/Content";
import { stylesPractice } from "./style/styles";

export default function App(): React.JSX.Element {
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("Message from App.tsx");
  const [footerMessage, setFooterMessage] = useState(
    "Thai-Nichi Institue of Tecnology"
  );

  useEffect(() => {
    console.log("Component has mounted")
  }, []);

  useEffect(() => {
    console.log(`Fullname has changed to : ${fullname}`)
  }, [fullname]);

  return (
    <View style={styles.container}>
      <AppHeader fullname = {fullname} message = {message} />
      <Content message = {message} fullname = {fullname} />
      <AppFooter footerMessage = {footerMessage} />
      <TextInput
      style = {stylesPractice.input}
      placeholder="Enter your fullname"
      value={fullname}
      onChangeText={setFullname}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
