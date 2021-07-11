/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ bottom: 'never', top: 'never', vertical: 'never' }}>
        <StatusBar barStyle="light-content" />
        <AppNavigator />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    height: "100%",
    backgroundColor: "black"
  },
});