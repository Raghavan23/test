import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { db } from "../config";
import { ref, onValue } from "firebase/database";

const FetchData = () => {
  const [todoData, setTodoData] = useState([]);
  useEffect(() => {
    const starCountRef = ref(db, "//The name of realtime data");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      console.log(newPosts);
      setTodoData(newPosts);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Realtime DB & Expo</Text>
      {todoData.map((item, index) => {
        return (
          <View key={index}>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default FetchData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 100,
    fontWeight: "bold",
  },
});
