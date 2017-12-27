import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  AppRegistry,
  Navigator,
  BackHandler
} from 'react-native';

import { StackNavigator } from "react-navigation";
import * as firebase from 'firebase';

import Login from './src/components/Login';
import Signup from './src/components/Signup';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Cerpen from './src/components/Cerpen';
import Puisi from './src/components/Puisi';
import Sajak from './src/components/Sajak';
import Search from './Search';
import Setting from './Setting';
import Cerpen1 from './src/components/Cerpen1';
import Cerpen2 from './src/components/Cerpen2';
import Puisi1 from './src/components/Puisi1';
import Sajak1 from './src/components/Sajak1';
import CerpenInput from './src/components/CerpenInput'
import PuisiInput from './src/components/PuisiInput'
import SajakInput from './src/components/SajakInput'

export default class Indeks extends Component<{}> {
  static navigationOptions = {
    header: null
  };
  render() {
  const { navigation } = this.props;
  const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}

const Navigasi = StackNavigator ({
  Profile: { screen: Profile },
  Dashboard: { screen: Dashboard },
  Login: { screen: Login },
  Signup: { screen: Signup },
  Cerpen: { screen: Cerpen },
  Cerpen1: { screen: Cerpen1 },
  Cerpen2: { screen: Cerpen2 },
  CerpenInput: { screen: CerpenInput },
  Puisi: { screen: Puisi },
  Puisi1: { screen: Puisi1 },
  PuisiInput: { screen: PuisiInput },
  Sajak: { screen: Sajak },
  Sajak1: { screen: Sajak1 },
  SajakInput: { screen: SajakInput },
  Search : { screen: Search },
  Setting : { screen: Setting },
});

var konfigurasi = {
    apiKey: "AIzaSyAhI0eXjo0Cy_h4Yr1W9gnAs99CwvIuPRo",
    authDomain: "sajakku-8445d.firebaseapp.com",
    databaseURL: "https://sajakku-8445d.firebaseio.com",
    projectId: "sajakku-8445d",
    storageBucket: "sajakku-8445d.appspot.com",
    messagingSenderId: "390597279979"
  };
  firebaseSajak = firebase.initializeApp(konfigurasi);

AppRegistry.registerComponent('sajakkupro', () => Navigasi);
