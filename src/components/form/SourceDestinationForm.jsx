import React from 'react'
import { View, ScrollView } from 'react-native'
import MapComponent from '../map/MapComponent'
import PlacesAutoComplete from '../map/PlacesAutoComplete'


const SourceDestinationForm = () => {
  return (
   
      <View style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'green' }}>
        <View style={{ height: '50%',position: 'relative' , zIndex : 2}}>
          <PlacesAutoComplete />
        </View>
        <View style={{ height: '50%',position: 'relative' }}>
          <MapComponent />
        </View>

      </View>
  )
}

export default SourceDestinationForm