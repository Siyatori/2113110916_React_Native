import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CreatePostScreen from "./screen/CreatePostScreen";


const App = (): React.JSX.Element => {

  const HomeStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="About" component={AboutScreen} />
        <HomeStack.Screen name="CreatePost" component={CreatePostScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;