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
      Alert.alert("Hold on!", "Are you sure you want exit the app?", [
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
          elevation={5}
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("spaceview")}
        >
          <Image
            source={require("./images/space.png")}
            style={([StyleSheet.absoluteFill], { alignSelf: "center" })}
          />
          <Text style={styles.label}>Space & tech</Text>
        </TouchableOpacity>
        <TouchableOpacity
          elevation={5}
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("politicsview")}
        >
          <Image
            source={require("./images/politics.png")}
            style={([StyleSheet.absoluteFill], { alignSelf: "center" })}
          />
          <Text style={styles.label}>Politics</Text>
        </TouchableOpacity>

        <TouchableOpacity
          elevation={5}
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("computerview")}
        >
          <Image
            source={require("./images/computer.png")}
            style={([StyleSheet.absoluteFill], { alignSelf: "center" })}
          />
          <Text style={styles.label}>Tech</Text>
        </TouchableOpacity>

        <TouchableOpacity
          elevation={5}
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("gamingview")}
        >
          <Image
            source={require("./images/gaming.png")}
            style={([StyleSheet.absoluteFill], { alignSelf: "center" })}
          />
          <Text style={styles.label}>Gaming</Text>
        </TouchableOpacity>

        <TouchableOpacity
          elevation={5}
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("businessview")}
        >
          <Image
            source={require("./images/business.png")}
            style={([StyleSheet.absoluteFill], { alignSelf: "center" })}
          />
          <Text style={styles.label}>Business</Text>
        </TouchableOpacity>

        <TouchableOpacity
          elevation={5}
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("scienceview")}
        >
          <Image
            source={require("./images/science.png")}
            style={([StyleSheet.absoluteFill], { alignSelf: "center" })}
          />
          <Text style={styles.label}>Science</Text>
        </TouchableOpacity>

        <TouchableOpacity
          elevation={5}
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("sportsview")}
        >
          <Image
            source={require("./images/sports.png")}
            style={([StyleSheet.absoluteFill], { alignSelf: "center" })}
          />
          <Text style={styles.label}>Sports</Text>
        </TouchableOpacity>

        <TouchableOpacity
          elevation={5}
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("booksview")}
        >
          <Image
            source={require("./images/books.png")}
            style={([StyleSheet.absoluteFill], { alignSelf: "center" })}
          />
          <Text style={styles.label}>Books & Literature</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "skyblue",
    height: "10%",
    width: "25%",
    backgroundColor: "pink",
    marginTop: 40,
    marginLeft: 40,
  },
  label: {
    fontSize: 10,
    alignSelf: "center",
    marginTop: 14,
    marginHorizontal: 25,
    color: "black",
    fontWeight: "bold",
  },
});
