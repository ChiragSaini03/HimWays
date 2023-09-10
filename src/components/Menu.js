import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import tailwind from "twrnc";
import { Home, BusFront, Ticket, User2Icon } from "lucide-react-native";
// import Dashboard from "../screens/Dashboard";

const Menu = () => {
  const navigation = useNavigation();
  const [selected_color, setColor] = useState("Dashboard");

  return (
    <View
      style={tailwind` flex flex-row items-center border-t-[1px] pt-2 h-full bg-[#FFFFFF] w-full`}
    >
      <TouchableOpacity
        style={tailwind`w-[25%] flex items-center justify-center`}
        onPress={() => {
          setColor("Dashboard");
          navigation.navigate("Dashboard");
        }}
      >
        <Home
          color={selected_color === "Dashboard" ? "red" : "gray"}
          size={28}
        />
        <Text style={tailwind`text-xs`}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tailwind`w-[25%] flex items-center justify-center`}
        onPress={() => {
          setColor("Track");
          navigation.navigate("Track_Bus");
        }}
      >
        <BusFront
          color={selected_color === "Track" ? "red" : "gray"}
          size={28}
        />
        <Text style={tailwind`text-xs`}>Track</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tailwind`w-[25%] flex items-center justify-center`}
        onPress={() => {
          setColor("Login");
          navigation.navigate("Login");
        }}
      >
        <User2Icon
          color={selected_color === "Login" ? "red" : "gray"}
          size={28}
        />
        <Text style={tailwind`text-xs`}>Log In</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={tailwind`w-[20%] flex items-center justify-center`}
        onPress={() => {
          setColor("Signup");
          navigation.navigate("Signup");
        }}
      >
        <Text style={tailwind`text-xs`}>Sign Up</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={tailwind`w-[25%] flex items-center justify-center`}
        onPress={() => {
          setColor("Ticket");
          navigation.navigate("Bus_Ticket");
        }}
      >
        <Ticket
          color={selected_color === "Ticket" ? "red" : "gray"}
          size={28}
        />
        <Text style={tailwind`text-xs`}>Bus Ticket</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
