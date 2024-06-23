import React, { Component, useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
} from "react-native";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  NavigationContext,
} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const options = {
  container: {
    backgroundColor: "#000",
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: "#FFF",
    marginLeft: 7,
  },
};

// @TODO: solve the issue with timer does not count down well
export default function StopWatchScreen() {
  const navigation = React.useContext(NavigationContext);

  const [timerStart, setTimerStart] = useState(false);
  const [stopwatchStart, setStopwatchStart] = useState(false);
  const [totalDuration, setTotalDuration] = useState(90000);
  const [timerReset, setTimerReset] = useState(false);
  const [stopwatchReset, setStopwatchReset] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const toggleTimer = () => {
    setTimerStart(!timerStart);
    setTimerReset(false);
  };
  const resetTimer = () => {
    setTimerStart(false);
    setTimerReset(true);
  };
  const toggleStopwatch = () => {
    setStopwatchStart(!stopwatchStart);
    setStopwatchReset(false);
  };
  const resetStopwatch = () => {
    setStopwatchStart(false);
    setStopwatchReset(true);
  };
  const getFormattedTime = (time: number) => {
    setCurrentTime(time);
  };
  const handleTimerComplete = () => {
    alert("custom completion function");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Details"
        onPress={() => navigation?.navigate("Home")}
      />
      <Stopwatch
        laps
        msecs
        start={stopwatchStart}
        reset={stopwatchReset}
        options={options}
        getTime={getFormattedTime}
      />
      <TouchableHighlight onPress={toggleStopwatch}>
        <Text style={{ fontSize: 30 }}>
          {!stopwatchStart ? "Start" : "Stop"}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={resetStopwatch}>
        <Text style={{ fontSize: 30 }}>Reset</Text>
      </TouchableHighlight>
      <Timer
        totalDuration={totalDuration}
        msecs
        start={timerStart}
        reset={timerReset}
        options={options}
        handleFinish={handleTimerComplete}
        getTime={getFormattedTime}
      />
      <TouchableHighlight onPress={toggleTimer}>
        <Text style={{ fontSize: 30 }}>{!timerStart ? "Start" : "Stop"}</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={resetTimer}>
        <Text style={{ fontSize: 30 }}>Reset</Text>
      </TouchableHighlight>
    </View>
  );
}
