// import React from "react";
// import type { PropsWithChildren } from "react";
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from "react-native";

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from "react-native/Libraries/NewAppScreen";

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({ children, title }: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === "dark";
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}
//       >
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}
//       >
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === "dark";

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? "light-content" : "dark-content"}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}
//       >
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}
//         >
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to sesdfsfse your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discsdfover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: "600",
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: "400",
//   },
//   highlight: {
//     fontWeight: "700",
//   },
// });

// export default App;
import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 90000,
      timerReset: false,
      stopwatchReset: false,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

  toggleTimer() {
    this.setState({ timerStart: !this.state.timerStart, timerReset: false });
  }

  resetTimer() {
    this.setState({ timerStart: false, timerReset: true });
  }

  toggleStopwatch() {
    this.setState({
      stopwatchStart: !this.state.stopwatchStart,
      stopwatchReset: false,
    });
  }

  resetStopwatch() {
    this.setState({ stopwatchStart: false, stopwatchReset: true });
  }

  getFormattedTime(time) {
    this.currentTime = time;
  }

  render() {
    return (
      <View>
        <Stopwatch
          laps
          msecs
          start={this.state.stopwatchStart}
          reset={this.state.stopwatchReset}
          options={options}
          getTime={this.getFormattedTime}
        />
        <TouchableHighlight onPress={this.toggleStopwatch}>
          <Text style={{ fontSize: 30 }}>
            {!this.state.stopwatchStart ? "Start" : "Stop"}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.resetStopwatch}>
          <Text style={{ fontSize: 30 }}>Reset</Text>
        </TouchableHighlight>
        <Timer
          totalDuration={this.state.totalDuration}
          msecs
          start={this.state.timerStart}
          reset={this.state.timerReset}
          options={options}
          handleFinish={handleTimerComplete}
          getTime={this.getFormattedTime}
        />
        <TouchableHighlight onPress={this.toggleTimer}>
          <Text style={{ fontSize: 30 }}>
            {!this.state.timerStart ? "Start" : "Stop"}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.resetTimer}>
          <Text style={{ fontSize: 30 }}>Reset</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const handleTimerComplete = () => alert("custom completion function");

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

export default App;
