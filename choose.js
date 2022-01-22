import React, { useEffect } from "react";
import {
  Text,
  View,
  BackHandler,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function choose({ navigation }) {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to exit the app?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("spaceview")}
        >
          <Image
            source={require("./images/space.png")}
            style={([StyleSheet.absoluteFill], { alignSelf: "center" })}
          />
          <Text style={styles.label}>SPACE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("politicsview")}
        >
          <Image
            source={require("./images/politics.png")}
            style={([StyleSheet.absoluteFill], { alignSelf: "center" })}
          />
          <Text style={styles.label}>POLITICS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("computerview")}
        >
          <Image
            source={require("./images/computer.png")}
            style={([StyleSheet.absoluteFill], { alignSelf: "center" })}
          />
          <Text style={styles.label}>TECH</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("gamingview")}
        >
          <Image
            source={require("./images/gaming.png")}
            style={([StyleSheet.absoluteFill], { alignSelf: "center" })}
          />
          <Text style={styles.label}>GAMING</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("businessview")}
        >
          <Image
            source={require("./images/business.png")}
            style={([StyleSheet.absoluteFill], { alignSelf: "center" })}
          />
          <Text style={styles.label}>BUSINESS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("scienceview")}
        >
          <Image
            source={require("./images/science.png")}
            style={([StyleSheet.absoluteFill], { alignSelf: "center" })}
          />
          <Text style={styles.label}>SCIENCE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("sportsview")}
        >
          <Image
            source={require("./images/sports.png")}
            style={([StyleSheet.absoluteFill], { alignSelf: "center" })}
          />
          <Text style={styles.label}>SPORTS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("booksview")}
        >
          <Image
            source={require("./images/books.png")}
            style={([StyleSheet.absoluteFill], { alignSelf: "center" })}
          />
          <Text style={styles.label}>BOOKS</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent:"space-evenly",
    backgroundColor: "white",
  },
  buttonContainer: {
  alignSelf:"center",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 2,
    borderColor: "gold",
    height: "9%",
    width: "80%",
    backgroundColor: "white",
    marginTop: 40,
    
  },
  label: {
    fontSize: 9,
    //alignSelf: "center",
   // marginTop: 14,
  marginHorizontal: 10,
    color: "black",
    fontWeight: "bold",
  },
});
