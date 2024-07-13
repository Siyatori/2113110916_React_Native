import { StyleSheet, Text, View, Button,Alert  } from 'react-native'
import React from 'react'
type fullnameType = {
    fullname:string;
}

const Content = ({fullname}:fullnameType): React.JSX.Element => {
    const onClickMe = () => {
        Alert.alert("Hello", fullname);
      };

  return (
    <View style={styles.content}>
      <Text style={styles.text}>Message from App.tsx</Text>
      <Button title="ClickMe" onPress={onClickMe} />
    </View>
  )
}

export default Content


const styles = StyleSheet.create({
    content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    text: {
    fontSize: 18,
    marginBottom: 20,
    },
    });
