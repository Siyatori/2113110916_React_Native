import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AppFooter from "./component/AppFooter";
import AppHeader from "./component/AppHeader";

export default function App(): React.JSX.Element {
  const onClickMe = () => {
    Alert.alert("Hi", "hello React.js");
  };
  const users = [
    { id: 1001, name: "John" },
    { id: 1002, name: "Mary" },
  ];
  return (
    <View style={styles.container}>
      <AppHeader title="This is Header" year={2018} />
      <AppHeader title="This is Header2" />
      <Text>Hello React Native</Text>
      { users.map((data,index) => {
        return(
          <Text key={data.id}>
            No. {index+1} ID: {data.id} Name: {data.name}
          </Text>
        )

      })}
      <Button title="ClickMe" onPress={onClickMe} color={"red"} />
      {/* <Button title='Click Me' onPress={() => {Alert.alert('Hi', 'React Native is Fun')}}></Button> */}
      <StatusBar style="auto" />
      <AppFooter />
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
