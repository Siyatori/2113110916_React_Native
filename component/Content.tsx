import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";
type fullnameType = {
  fullname: string;
  message: string;
};
import { stylesPractice } from "../style/styles";

const Content = ({ message, fullname }: fullnameType): React.JSX.Element => {
  const [displayFullname, setDisplayFullName] = useState("");
  const onClickMe = () => {
    setDisplayFullName(fullname);
    Alert.alert("Hello", `Input your fullname : ${fullname}`);
  };

  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{message}</Text>
      <Text style={stylesPractice.text}>{displayFullname}</Text>
      <Button title="ClickMe" onPress={onClickMe} />
    </View>
  );
};

export default Content;
