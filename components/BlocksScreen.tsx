import React, { useState, useRef, useCallback } from "react";
import { Text, View, Platform, TouchableOpacity } from "react-native";
import { displayTime } from "../utils/stopwatch";

export default function BlocksScreen() {
  const [countType, setCountType] = useState<"stopwatch" | "timer">(
    "stopwatch"
  );
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const handleResetButton = useCallback(() => {
    setTime(0);
  }, [isRunning, time]);

  const handleToggleRunningButton = useCallback(() => {
    if (!isRunning) {
      const interval = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 10);

      timer.current = interval;
    } else {
      clearInterval(timer.current);
    }

    setRunning((previousState) => !previousState);
  }, [isRunning]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={() =>
          setCountType((prev) => (prev === "stopwatch" ? "timer" : "stopwatch"))
        }
      >
        <Text>{countType}</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 70,
          fontWeight: "200",
          fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : undefined,
        }}
      >
        {displayTime(time)}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <>
          <TouchableOpacity
            style={[
              {
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                height: 70,
                borderRadius: 70,
                display: isRunning || time === 0 ? "none" : "flex",
              },
              { backgroundColor: isRunning ? "#333333" : "#1c1c1e" },
            ]}
            onPress={handleResetButton}
          >
            <View style={[]}>
              <Text style={{ color: isRunning ? "#fff" : "#9d9ca2" }}>
                {"Reset"}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              {
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                height: 70,
                borderRadius: 70,
              },
              { backgroundColor: isRunning ? "#340e0d" : "#0a2a12" },
            ]}
            onPress={handleToggleRunningButton}
          >
            <View style={[]}>
              <Text style={{ color: isRunning ? "#ea4c49" : "#37d05c" }}>
                {isRunning ? "Stop" : "Start"}
              </Text>
            </View>
          </TouchableOpacity>
        </>
      </View>
    </View>
  );
}
