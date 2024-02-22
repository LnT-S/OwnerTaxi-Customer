import React from 'react'
import { Text, View } from 'react-native'
import AuthenticatedLayout from '../../screens/layout/AuthenticatedLayout'

const Settings = () => {
    return (
        <AuthenticatedLayout>
            <View>
                <Text>
                    Settings Page
                </Text>
            </View>
        </AuthenticatedLayout>
    )
}

export default Settings