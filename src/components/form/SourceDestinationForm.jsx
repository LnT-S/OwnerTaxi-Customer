import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MapComponent from '../map/MapComponent'
import PlacesAutoComplete from '../map/PlacesAutoComplete'
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout'
import { ScrollView } from 'react-native-virtualized-view'


const SourceDestinationForm = () => {
  return (
    <AuthenticatedLayout >
      <View>
        <View style={{ zIndex: 500 }}>
          <PlacesAutoComplete placeholder={'Source'} />
        </View>
        <View style={{ zIndex: 400 }}>
          <PlacesAutoComplete placeholder={'Destination'} />
        </View>
        <ScrollView>
          <View style={{ marginTop: 10, borderColor: 'black', margin: 5, borderWidth: 5 , position : 'relative'}}>
            <MapComponent />
            <TouchableOpacity style={{position : 'absolute' , top : 2 , right : 2}}>
              <Text style= {{color : 'red'}}>Reset</Text>
            </TouchableOpacity>
          </View>
          <View>
          
          </View>
        </ScrollView>
      </View>

    </AuthenticatedLayout>

  )
}

export default SourceDestinationForm