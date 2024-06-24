import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BlocksScreen from "./components/BlocksScreen";
// import StopWatchScreen from "./components/StopWatchScreen";
import AnalyticsScreen from "./AnalyticsScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Blocks"
        screenOptions={{
          // tabBarStyle: { display: "none" },
          swipeEnabled: true,
        }}
      >
        <Tab.Screen name="Blocks" component={BlocksScreen} />
        {/* <Tab.Screen name="StopWatch" component={StopWatchScreen} /> */}
        <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
