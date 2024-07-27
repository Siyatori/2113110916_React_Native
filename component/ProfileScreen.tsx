import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import { styles } from "../style/styles";

const ProfileScreen = (): React.JSX.Element => {
  const [profileImage, setImage] = useState(require("../assets/me.jpg"));
  const [name, setName] = useState("Sarawut Siriyotha");
  const handleChangeName = () => {
    setName("BOBO");
  };
  const handleChangeImage = () =>{
    setImage(require("../assets/shiba.jpg"))
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={profileImage} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="button Click" onPress={handleChangeName} />
          <View style={styles.buttonImage}>
          <Button title="button Click" onPress={handleChangeImage} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
