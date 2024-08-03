import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";
type fullnameType = {
  // fullname: string;
  message: string;
  onButtonClick:() => void;
};
import { stylesPractice } from "../style/styles";

const Content = ({ message, onButtonClick }: fullnameType): React.JSX.Element => {
  // const [displayFullname, setDisplayFullName] = useState("");
  // const onClickMe = () => {
  //   setDisplayFullName(fullname);
  //   Alert.alert("Hello", `Input your fullname : ${fullname}`);
  // };

  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{message}</Text>
      {/* <Text style={stylesPractice.text}>{displayFullname}</Text> */}
      <Button title="ClickMe" onPress={onButtonClick} />
    </View>
  );
};

export default Content;
