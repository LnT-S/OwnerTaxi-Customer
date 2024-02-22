import React from 'react'
import { View, ScrollView } from 'react-native'
import MapComponent from '../map/MapComponent'
import PlacesAutoComplete from '../map/PlacesAutoComplete'
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout'


const SourceDestinationForm = () => {
  return (
    <AuthenticatedLayout >
      <View>
        <View style={{zIndex : 500}}>
          <PlacesAutoComplete placeholder={'Source'}/>
        </View>
        <View style={{ zIndex: 400 }}>
          <PlacesAutoComplete placeholder={'Destination'}/>
        </View>
        <View style={{marginTop:10, borderColor:'black',margin:5,borderWidth:5}}>
          <MapComponent />
        </View>
      </View>
    </AuthenticatedLayout>

  )
}

export default SourceDestinationForm