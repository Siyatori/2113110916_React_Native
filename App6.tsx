import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import AxiospostData from "./component/AxiospostData";
import WeatherLondon from "./component/WeatherLondon";
import WeatherBangkok from "./component/WeatherBangkok";
import ModelExample from "./component/ModelExample";
import WeatherApp from "./component/WeatherApp";
import AboutScreen from "./screen/AboutScreen";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <AxiospostData /> */}
      {/* <WeatherLondon /> */}
      {/* <WeatherBangkok/> */}
      {/* <ModelExample /> */}
      {/* <WeatherApp /> */}
      <AboutScreen />
    </View>
  );
};

export default App;