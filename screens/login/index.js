import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import Btns from "../../src/btn";
import Ips from "../../src/input";
import Logos from "../../src/logo";
export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Logos></Logos>
      <View style={styles.viewtop}>
        <Text style={styles.titleText}>Truyen247</Text>
      </View>
      <Text style={{ marginBottom: 15 }}>App đọc truyện 24/7</Text>
      <Btns
        color="#7FFFD4"
        Text="Đăng nhập"
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      ></Btns>
      <Btns
        color="#00CED1"
        Text="Đăng kí"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      ></Btns>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  BtnC: {
    backgroundColor: "#81d3e3",
    paddingHorizontal: 80,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "blue",
  },
  tText: {
    fontSize: 20,
    margin: 10,
  },
  viewtop: {
    margin: 20,
  },
});
