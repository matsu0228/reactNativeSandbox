/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    flexDirection: 'column',
    //-reverse',
  },
  box1:{
    height:100,
    backgroundColor: '#000',
  },
  box2:{
    flex:1,
    height:100,
    backgroundColor: '#333',
  },
  box3:{
    flex:1,
    height:100,
    backgroundColor: '#666',
  },
});
