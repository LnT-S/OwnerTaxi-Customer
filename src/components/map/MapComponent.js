// MapComponent.js
import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker , Polyline } from 'react-native-maps';
import PlacesAutoComplete from './PlacesAutoComplete';
import Geolocation from '@react-native-community/geolocation';


const MapComponent = (props) => {

  const { markerArray } = props
  //console.log('****', markerArray)
  const mapViewRef = useRef(null);
  const [currentLocation, setCurrentLocation] = useState(null)
  const [showPolyLine , setShowPolyLine] = useState(false)
  const [polyMarkerPoints , setPolyMarkerPoints] = useState([])

  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    // Update map region when markers prop changes
    if (currentLocation!==null && markerArray && markerArray.length > 0) {
      const newRegion = {
        latitude: (markerArray[0].latitude!==null) ? markerArray[0].latitude : currentLocation.latitude, // Assuming the first marker's latitude
        longitude: (markerArray[0].longitude!==null) ? markerArray[0].longitude : currentLocation.longitude, // Assuming the first marker's longitude
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      let showPoly = false
      markerArray.forEach(element => {
        if(element.latitude === null){
          setShowPolyLine(false)
          showPoly = false
          return
        }else{
          showPoly = true
        }
      });
      if(showPoly){
        function transformObject(obj) {
            return {
              latitude: obj.latitude,
              longitude: obj.longitude
            };
        }
        const newArray = markerArray.map(transformObject);
        setPolyMarkerPoints(newArray)
        setShowPolyLine(true)
      }else{

      }
      setRegion(newRegion);
    }
  }, [markerArray , currentLocation]);

  useEffect(() => {
    //Set RN COnfiguration
    Geolocation.setRNConfiguration(
      config = {
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
        enableBackgroundLocationUpdates: false,
        locationProvider: 'auto'
      }
    )
    // Get the current location
    Geolocation.getCurrentPosition(
      (position) => {
        //console.log('CURRENT LOCATION ', position)
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      },
      (error) => {
        console.log('GEOLOCATION ERROR', error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  const onMapReady = () => {
    // Coordinates of your markers
    const coordinates = [
      { latitude: currentLocation.latitude, longitude: currentLocation.longitude },
      // Add other marker coordinates as needed
    ];

    // Fit the map to the provided coordinates
    mapViewRef.current.fitToCoordinates(coordinates, {
      edgePadding: { top: 200, right: 50, left: 50 },
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      {currentLocation ? <MapView
        ref={mapViewRef}
        style={styles.map}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        onMapReady={onMapReady}
        region={region}
      >
        {(markerArray !== undefined) && markerArray.map((item, index) => {
          if(item.latitude!==null && item.longitude !==null){
            return <Marker
              key={index}
              coordinate={{ latitude: item.latitude, longitude: item.longitude }}
              title={item.description}
              description={item.description}
              style={{ height: 10, width: 1 }}
            />
          }else{
            return null
          }
        })}
        {showPolyLine&& polyMarkerPoints[0].latitude!==null && <Polyline 
          coordinates={polyMarkerPoints}
          strokeWidth={3}
          strokeColor='red'
        />}
      </MapView> : <View style={styles.acontainer}><ActivityIndicator /></View>}
    </View>
  );
};

const styles = StyleSheet.create({
  acontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    height: 550,
  }
});

export default MapComponent;
