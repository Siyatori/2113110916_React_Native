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
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle:{backgroundColor:'#33beff'},
          headerTintColor:'white',
          headerTitleStyle:{fontWeight:'bold'},
          headerTitleAlign: 'center',
        }}
      >
        <HomeStack.Screen name="Home" component={HomeScreen} options={{title:"หน้าหลัก"}} />
        <HomeStack.Screen name="About" component={AboutScreen} options={{
          title:"เกี่ยวกับเรา", 
          headerStyle:{backgroundColor:'#33beff'},
          headerTintColor:'white',
          headerTitleStyle:{fontWeight:'bold'},
          headerTitleAlign: 'center',
          }} />
        <HomeStack.Screen name="CreatePost" component={CreatePostScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;