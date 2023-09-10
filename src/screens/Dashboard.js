import react from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image } from "react-native";
import Menu from "../components/Menu";
import tw from "twrnc";
// import Menu from "../components/Menu";

const Dashboard = () => {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <View style={tw`h-full w-full`}>
      <View style={tw`h-35% w-full`}>
        <Image
          style={tw`h-full w-full`}
          source={require("../../assets/subway_banner.png")}
        />
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

export default Dashboard;
