// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
import MenuScreen from "./screen/MenuScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "./screen/CreatePostScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProductScreen from "./screen/ProductScreen";
import DetailScreen from "./screen/DetailScreen";
import LoginScreen from "./screen/LoginScreen";
import Toast from "react-native-toast-message";

const ProductStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const LoginStack = createDrawerNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerStyle:{backgroundColor:'#2302aa'},
        // headerTintColor:'white',
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        // options={{title:'หน้าหลัก'}}
      />
      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "เกี่ยวกับเรา",
          headerStyle: { backgroundColor: "#2302aa" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          //  headerTitleAlign:'center',
        }}
      />
      {/* <HomeStack.Screen name='CreatePost' component={CreatePostScreen}/> */}
    </HomeStack.Navigator>
  );
}
function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Product"
      screenOptions={{
        // headerStyle:{backgroundColor:'#2302aa'},
        // headerTintColor:'white',
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <ProductStack.Screen name="Product" component={ProductScreen} />
      <HomeStack.Screen name="Products" component={ProductScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}
function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Product"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <LoginStack.Screen name="Product" component={ProductScreen} />
      <HomeStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}
const App = (): React.JSX.Element => {
  const [isLogin] = useState(false);

  return (
    <>
    <SafeAreaProvider>
      <NavigationContainer>
        <HeaderButtonsProvider stackType="native">
          {isLogin ? (
            <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
            <Drawer.Screen name="Product" component={ProductStackScreen} />
          </Drawer.Navigator>
          ) : (
            <LoginStackScreen />
          )}
        </HeaderButtonsProvider>
      </NavigationContainer>
    </SafeAreaProvider>
    <Toast />
    </>
    
  );
};

export default App;

const styles = StyleSheet.create({});
