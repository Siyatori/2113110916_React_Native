import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import AxiospostData from "./component/AxiospostData";
import WeatherLondon from "./component/WeatherLondon";
import WeatherBangkok from "./component/WeatherBangkok";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <AxiospostData /> */}
      {/* <WeatherLondon /> */}
      <WeatherBangkok/>
    </View>
  );
};

export default App;