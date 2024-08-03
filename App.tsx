import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileScreen from "./component/ProfileScreen";
import UseEffectExample from "./component/UseEffectExample";
import Login from "./component/Login";
import { stylesLogin } from "./style/styles";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <UseEffectExample/> */}
      <ProfileScreen /> 
      <Login />
    </View>
  );
};

export default App;


