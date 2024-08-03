import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileScreen from "./component/ProfileScreen";
import UseEffectExample from "./component/UseEffectExample";

const App = (): React.JSX.Element => {
  return (
    <View>
      <UseEffectExample/>
      {/* <ProfileScreen /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
