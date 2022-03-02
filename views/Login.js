import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { useState, useContext } from "react";
import { Context } from "../App";

export default function Login() {
  const context = useContext(Context);
  const [mailCheck, setMailCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const handleMail = (bool) => {
    setMailCheck(bool);
    console.log(mailCheck);
  };
  const handlePassword = (bool) => {
    setPasswordCheck(bool);
    console.log(passwordCheck);
  };
  const validateEmail = (email) => {
    context.setUserEmail(email);
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailRegex.test(email)) {
      return handleMail(true);
    } else {
      return handleMail(false);
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^[A-Za-z]{6,}$/;
    if (passwordRegex.test(password)) {
      return handlePassword(true);
    } else {
      return handlePassword(false);
    }
  };

  const handlePress = () => {
    if (mailCheck && passwordCheck) {
      return context.setIsLoggedIn();
    } else if (!mailCheck && !!passwordCheck) {
      Alert.alert("Inalid form");
    } else if (!mailCheck) {
      Alert.alert("Inalid mail");
    } else {
      Alert.alert("Inalid password");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {mailCheck ? (
        <TextInput
          style={[styles.input, styles.validForm]}
          placeholder="  E-mail"
          onChangeText={(text) => validateEmail(text)}
        ></TextInput>
      ) : (
        <TextInput
          style={styles.input}
          placeholder="  E-mail"
          onChangeText={(text) => validateEmail(text)}
        ></TextInput>
      )}

      {passwordCheck ? (
        <TextInput
          style={[styles.input, styles.validForm]}
          placeholder="  Password"
          secureTextEntry
          onChangeText={(text) => validatePassword(text)}
        ></TextInput>
      ) : (
        <TextInput
          style={styles.input}
          placeholder="  Password"
          secureTextEntry
          onChangeText={(text) => validatePassword(text)}
        ></TextInput>
      )}

      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text style={styles.textBtn}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    borderRadius: 15,
    backgroundColor: "darkgrey",
    padding: 10,
  },
  textBtn: {
    color: "white",
  },
  validForm: {
    borderColor: "green",
  },
});
