import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { stylesPractice } from "../style/styles";

type AppHeaderProps = {
  fullname: string;
  message: string;
};

const AppHeader = ({ fullname,message }: AppHeaderProps): React.JSX.Element => {
  return (
    <View style={stylesPractice.header}>
        <Text style={stylesPractice.headerText}>Input your fullname: {fullname}</Text>
        <Text style={stylesPractice.subtitleText}>{message}</Text>
    </View>
  );
};

export default AppHeader;

    
    
