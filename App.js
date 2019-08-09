import Expo from "expo";
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

export default class App extends React.Component {
  // componentDidMount() {
  //   // connect to Reactotron as soon as the component mounts
  //   Reactotron.connect();
  // }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Testing</Text>
        <Text style={styles.textStyle}>This is some more text</Text>
        <Text style={styles.textStyle}>Another</Text>
        <Button title="Click Me"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#ff3356',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: "#ffffff",
    fontSize: 50
  }
});
// Expo.registerRootComponent(App);