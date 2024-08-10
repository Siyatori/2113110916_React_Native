import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

interface User {
  title: string;
  pushlishedAt: string;
  author:string;
  url:string;
}

const NewApp = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "7ebf3df52c8f459ca65110f983c05d0a"; // ใส่ API Key ของนักศึกษาที่นี่
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data.articles);
        setLoading(false);
      })
      .catch((error)=>{
        console.error(error);
        setLoading(false);
      });
  }, []);

  const _renderItem = ({ item }: { item: User }) => (
    <View style={styles.card}>
      <Text style={styles.headline}>{item.title}</Text>
      <Text style={styles.description}>{item.author}</Text>
      <Text style={styles.date}>{item.pushlishedAt}</Text>
      
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={"large"} color={"red"} />
      ) : (
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item) => item.url}
        />
      )}
    </View>
  );
};

export default NewApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headline: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
});
