/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import BDMapView from './BaiduMapView'



export default class AwesomeProject extends Component {
  render() {
    return (
        <View style={styles.map}>
          <NavigatorIOS />

          <BDMapView style={styles.map} />
        </View>
    )
  };
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  splitline: {
    flexDirection : 'row',
    flex: 1,
    height: 50,
    position:'absolute',
    left: 0,
    top:0,
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
