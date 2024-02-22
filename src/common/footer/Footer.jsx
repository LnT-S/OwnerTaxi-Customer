import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { BgColor } from '../../styles/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Footer = () => {
    return (
        <SafeAreaView>
            <View style={styles.footer}>
                <View style={styles.icons}>
                    <Icon name="home" size={40} color="#000" />
                </View>
                <View style={styles.icons}>
                    <Icon name="event" size={40} color="#000" />
                </View>
                <View style={styles.icons}>
                    <Text>ICON3</Text>
                </View>
                <View style={styles.icons}>
                    <Icon name="person" size={40} color="#000" />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: BgColor,
        zIndex: 2
    },
    icons: {
        margin: 5
    }
})

export default Footer