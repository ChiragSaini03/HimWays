import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Image } from "react-native";

import tw from "twrnc";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import ShowTicket from "./src/screens/ShowTicket";
import Track from "./src/screens/Track";
import Dashboard from "./src/screens/Dashboard";
// import Menu from "./src/components/Menu";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BuyTicket from "./src/screens/BuyTicket";
import { Home, BusFront, Ticket, User2Icon } from "lucide-react-native";
export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  // const state = useNavigationState((state) => state);
  // if (state) {
  //   curr_route = state?.routes[state?.routes.length - 1].name;
  // }
  // console.log(Stack.Screen.props.navigation.state);
  // const route = useRoute();
  // console.log(route.name);
  return (
    <NavigationContainer>
      <View style={tw`w-full h-full flex flex-col`}>
        <View style={tw`h-90%`}>
          <Tab.Navigator
            screenOptions={{
              tabBarIconStyle: { fontSize: "30px" },
              tabBarStyle: {
                height: "10%",
                position: "fixed",
                bottom: "4px",
              },
            }}
            initialRouteName="Dashboard"
          >
            <Tab.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                tabBarLabel: "Dashboard",
                tabBarIcon: ({ focused }) => {
                  return <Home color={focused ? "red" : "gray"} size={28} />;
                },
              }}
            />
            <Tab.Screen
              name="Signup"
              component={Signup}
              options={{
                tabBarLabel: "Signup",
                tabBarButton: () => null,
                tabBarVisible: false,
              }}
            />
            <Tab.Screen
              name="Track Bus"
              component={Track}
              options={{
                tabBarLabel: "Track Bus",
                tabBarIcon: ({ focused }) => {
                  return (
                    <BusFront color={focused ? "red" : "gray"} size={28} />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Show Ticket"
              component={ShowTicket}
              options={{
                tabBarLabel: "Show Tickets",
                tabBarIcon: ({ focused }) => {
                  return <Ticket color={focused ? "red" : "gray"} size={28} />;
                },
              }}
            />
            <Tab.Screen
              name="Login"
              component={Login}
              options={{
                tabBarLabel: "Login",
                tabBarIcon: ({ focused }) => {
                  return (
                    <User2Icon color={focused ? "red" : "gray"} size={28} />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Buy Ticket"
              component={BuyTicket}
              options={{ tabBarButton: () => null, tabBarVisible: false }}
            />
          </Tab.Navigator>
        </View>
        {/* <View style={tw`w-full h-[10%]`}><Menu /></View> */}
      </View>
    </NavigationContainer>
  );
}
