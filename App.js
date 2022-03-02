import { SafeAreaView, StyleSheet } from "react-native";
import { useState, createContext } from "react";
import { NativeRouter, Routes, Route } from "react-router-native";
import Login from "./views/Login";
import Home from "./views/Home";
import React from "react";
export const Context = React.createContext("default value");
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLoggedIn = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const contextValue = {
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: handleLoggedIn,
  };
  console.log(contextValue.isLoggedIn);
  const renderLoggedIn = () => {
    return isLoggedIn ? (
      <Home context={contextValue} />
    ) : (
      <Login context={contextValue} />
    );
  };
  return (
    <Context.Provider value={contextValue}>
      <SafeAreaView style={styles.container}>
        <NativeRouter>
          <Routes>
            <Route exact path="/" element={renderLoggedIn()} />
          </Routes>
        </NativeRouter>
      </SafeAreaView>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
