import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { stylesPractice } from "../style/styles";

type AppFooter = {
  footerMessage: string;
};

const AppFooter = ({footerMessage} : AppFooter ): React.JSX.Element => {

  return (
    <View style={stylesPractice.footer}>
      <Text>{footerMessage}</Text>
    </View>
  );
};

export default AppFooter;


    
