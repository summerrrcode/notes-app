import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "../assets/images/react-logo.png";

const HomeScreen = () => {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    > 
      <Image source={Logo} style={styles.image} />
      <Text style={ styles.title }>Welcome to Notes App</Text>
      <Text style={ styles.subTitle }>Capture your thoughts</Text>
      <TouchableOpacity onPress={() => router.push('/notes')}>
        <Text style={styles.button}>Go to Notes</Text>
      </TouchableOpacity>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    color: 'white',
  }
})

export default HomeScreen;
