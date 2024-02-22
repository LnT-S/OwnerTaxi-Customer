import React from 'react'
import { Text, View } from 'react-native'
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout'

const MyProfile = () => {
    return (
        <AuthenticatedLayout>
            <View>
                <Text>
                    MyProfile Page
                </Text>
            </View>
        </AuthenticatedLayout>
    )
}

export default MyProfile