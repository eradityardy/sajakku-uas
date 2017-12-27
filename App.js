import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Splash from './Splash';
import Login from './src/components/Login';
import Signup from './src/components/Signup';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Signup />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
