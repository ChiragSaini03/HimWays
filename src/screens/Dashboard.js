import react from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
// import Menu from "../components/Menu";

const Dashboard = (props) => {
  const navigation = props.navigation;
  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
    <View style={tw`h-full w-full`}>
      <View style={tw`h-35% w-full`}>
        <Image
          style={tw`h-full w-full`}
          source={require("../../assets/subway_banner.png")}
        />
      </View>
      <View style={tw`w-full flex flex-row items-center justify-evenly my-4`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Buy Ticket", { type: "Ticket" })}
        >
          <View style={tw`p-4 rounded bg-gray-300`}>
            <Text>Buy Ticket</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Buy Ticket", { type: "Pass" })}
        >
          <View style={tw`p-4 rounded bg-gray-300`}>
            <Text>Buy Daily Pass</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={tw`flex flex-row w-full items-center px-3 justify-between`}>
        <Text style={tw`text-base font-bold`}>Recent Ticket</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Show Ticket")}>
          <Text style={tw`text-gray-600`}>Veiw All</Text>
        </TouchableOpacity>
      </View>
    </View>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
});

// console.log(ticketData);

export default Dashboard;
