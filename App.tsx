import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import markerImg from './assets/marker.png';


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

class MarkerTypes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marker1: true,
      marker2: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          {addMarker(LATITUDE,LONGITUDE,"Banana",1.6)}
        </MapView>
      </View>
    );
  }

}
const addMarker=(Latitude:number,Longitude:number,item:string,distance:number)=>{
  return (
    <Marker
    // onPress={() => this.setState({ marker1: !this.state.marker1 })}
    coordinate={{
      latitude: Latitude,
      longitude: Longitude,
    }}
    centerOffset={{ x: -18, y: -60 }}
    anchor={{ x: 0.69, y: 1 }}
    image={markerImg}
  >
    <Text style={styles.marker}>
      {item}
    </Text>
    <Text style={styles.marker}>
      {distance} mi</Text>
  </Marker>
  ) 
}
MarkerTypes.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    marginLeft: 33,
    marginTop: 0,
    fontWeight: 'bold',
  },
});

export default MarkerTypes;