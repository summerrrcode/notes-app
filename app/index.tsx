import { StyleSheet, Text, View } from "react-native";
import Logo from "../assets/images/logo.png";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    > 
      <Image source={{ Logo }} />
      <Text>Welcome to Notes App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: 'white'
  },
  image: {
    width: 100,
    height: 100,
  }
})

export default HomeScreen;
