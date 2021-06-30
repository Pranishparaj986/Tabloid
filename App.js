import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import choose from "./choose";
import splash from "./splash";
import spaceview from "./webviews/spaceview";
import scienceview from "./webviews/scienceview";
import gamingview from "./webviews/gamingview";
import sportsview from "./webviews/sportsview";
import businessview from "./webviews/businessview";
import booksview from "./webviews/booksview";
import politicsview from "./webviews/politicsview";
import computerview from "./webviews/computerview";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="splash"
          component={splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="choose"
          component={choose}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="spaceview"
          component={spaceview}
          options={{
            title: "SPACE TECHNOLOGY",
            headerStyle: {
              borderBottomWidth: 0,
              backgroundColor: "#3AA2CB",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              alignContent: "center",
            },
          }}
        />
        <Stack.Screen
          name="scienceview"
          component={scienceview}
          options={{
            title: "SCIENCE",
            headerStyle: {
              borderBottomWidth: 0,
              backgroundColor: "#3AA2CB",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              alignContent: "center",
            },
          }}
        />
        <Stack.Screen
          name="politicsview"
          component={politicsview}
          options={{
            title: "POLITICS",
            headerStyle: {
              borderBottomWidth: 0,
              backgroundColor: "#3AA2CB",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              alignContent: "center",
            },
          }}
        />
        <Stack.Screen
          name="computerview"
          component={computerview}
          options={{
            title: "TECH",
            headerStyle: {
              borderBottomWidth: 0,
              backgroundColor: "#3AA2CB",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              alignContent: "center",
            },
          }}
        />
        <Stack.Screen
          name="gamingview"
          component={gamingview}
          options={{
            title: "GAMING",
            headerStyle: {
              borderBottomWidth: 0,
              backgroundColor: "#3AA2CB",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              alignContent: "center",
            },
          }}
        />
        <Stack.Screen
          name="businessview"
          component={businessview}
          options={{
            title: "BUSINESS",
            headerStyle: {
              borderBottomWidth: 0,
              backgroundColor: "#3AA2CB",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              alignContent: "center",
            },
          }}
        />
        <Stack.Screen
          name="sportsview"
          component={sportsview}
          options={{
            title: "SPORTS",
            headerStyle: {
              borderBottomWidth: 0,
              backgroundColor: "#3AA2CB",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              alignContent: "center",
            },
          }}
        />
        <Stack.Screen
          name="booksview"
          component={booksview}
          options={{
            title: "BOOKS & LITERATURE",
            headerStyle: {
              borderBottomWidth: 0,
              backgroundColor: "#3AA2CB",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              alignContent: "center",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
