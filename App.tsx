import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileScreen from "./component/ProfileScreen";
import UseEffectExample from "./component/UseEffectExample";
import Login from "./component/Login";
import { stylesLogin } from "./style/styles";
import FlastListExample from "./component/FlastListExample";
import FlatListcallBackend from "./component/FlatListcallBackend";
import NewApp from "./component/NewApp";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <UseEffectExample/> */}
      {/* <ProfileScreen />  */}
      {/* <FlastListExample /> */}
      {/* <FlatListcallBackend/> */}
      <NewApp />
    </View>
  );
};

export default App;


