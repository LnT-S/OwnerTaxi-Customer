import React from 'react'
import { Text, View } from 'react-native'
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout'

const ActiveBooking = () => {
    return (
        <AuthenticatedLayout>
            <View>
                <Text>
                    ActiveBooking Page
                </Text>
            </View>
        </AuthenticatedLayout>
    )
}

export default ActiveBooking