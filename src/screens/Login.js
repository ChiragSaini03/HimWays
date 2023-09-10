import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
// import { ScrollView } from "react-native";

const Login = (props) => {
  const [username, set_username] = useState("");
  const [Password, set_pass] = useState("");
  const Submit = () => {
    console.log("yes");
    if (username === "rohitshaw340@gmail.com" && Password === "1234567890") {
      Alert.alert("Verified Successfully");
      const obj = { username: username };
      props.navigation.navigate("Dashboard", obj);
    } else {
      Alert.alert("Username or Password Is in correct");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={tw`flex-1 flex-col bg-white items-center justify-center relative`}
        >
          <View style={tw`absolute -top-10`}>
            <View style={tw`flex items-center h-60 w-80 p-9`}>
              <Image
                style={tw`w-full h-full `}
                source={require("../../assets/favicon.png")}
              />
              {/* <Text style={{ fontSize: 40, color: "#5509be" }}>Welcome Back</Text> */}
            </View>
            <View style={tw`mb-4`}>
              <Text style={tw`block text-gray-700 text-xl font-bold mb-2`}>
                Username / E-Mail{" "}
              </Text>
              <TextInput
                style={tw`shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                autoCapitalize="none"
                value={username}
                onChangeText={(input) => {
                  set_username(input);
                }}
              />
            </View>
            <View style={tw`realtive mb-4`}>
              <Text style={tw`block text-gray-700 text-xl font-bold mb-2`}>
                Password
              </Text>
              <TextInput
                style={tw`shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                value={Password}
                onChangeText={(input) => {
                  set_pass(input);
                }}
              />
              <Text style={tw`absolute text-gray-400 bottom-0 right-0 text-sm`}>
                Forgot Your Password ?
              </Text>
            </View>
            <View style={tw`items-center justify-center`}>
              {/* <Checkbox checked={false} onChange={()=>{}}/> */}
              <TouchableOpacity
                onPress={() => {
                  Submit();
                }}
              >
                <Text
                  style={tw` w-40 text-xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-center m-3`}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <Text style={tw`relative text-base`}>
                Do Not Have a Account ?{" "}
                <TouchableOpacity
                  style={tw`absolute`}
                  onPress={() => {
                    props.navigation.navigate("Signup");
                  }}
                >
                  <View style={tw`absolute top-1`}>
                    <Text style={tw`text-base text-blue-700`}>Signup</Text>
                  </View>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
