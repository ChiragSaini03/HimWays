import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Image } from "react-native";

import tw from "twrnc";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Ticket from "./src/screens/Ticket";
import Track from "./src/screens/Track";
import Dashboard from "./src/screens/Dashboard";
import Menu from "./src/components/Menu";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <View style={tw`w-full h-full flex flex-col`}>
        <View style={tw`h-90%`}>
          <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Track_Bus" component={Track} />
            <Stack.Screen name="Bus_Ticket" component={Ticket} />
          </Stack.Navigator>
        </View>
        <View style={tw`w-full h-[10%]`}>
          <Menu />
        </View>
      </View>
    </NavigationContainer>
  );
}
