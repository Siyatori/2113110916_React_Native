import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {styles} from '../component/styles';

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/me.jpg");

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={profileImage} />
        <Text style={styles.profileName}>Sarawut Siriyotha</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;



