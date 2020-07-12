import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps'
export default class App extends Component {
  render() {
    return (
      <MapView style={{ ...StyleSheet.absoluteFillObject }}> 
      </MapView>
      
    );
  }
}