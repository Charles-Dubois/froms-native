import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import Context from "../App";
import React from "react";
export default function Home() {
  const context = useContext(Context);
  console.log(context);
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textBtn}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  btn: {
    borderRadius: 15,
    backgroundColor: "darkgrey",
    padding: 10,
  },
  textBtn: {
    color: "white",
  },
});
