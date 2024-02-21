import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'

const ModeCards = (props) => {

    const { image, mode, subMode } = props
    return (
        <TouchableOpacity style={styles.card}>
            <ImageBackground source={image} style={styles.image} imageStyle={{ opacity: 0.55 }}>
                <View style={styles.innerCard}>
                    <View style={styles.mode}>
                        <Text style={styles.modeText}>
                            {mode}
                        </Text>
                    </View>
                    <View style={styles.subMode}>
                        <Text style={styles.subModeText}>
                            {subMode}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        width: '45%',
        height: 150,
    },
    imageContainer: {
        width: '100%',
        height: '100%'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    innerCard: {
        zIndex: 2,
        position: 'absolute',
        bottom: '0%',
        left: '0%',
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 2
    },
    mode: {
        padding: 2,
        backfaceVisibility: 'hidden'
    },
    modeText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '900',
        textDecorationLine: 'underline'
    },
    subMode: {
        padding: 2,
        backfaceVisibility: 'hidden'
    },
    subModeText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
    }
})

export default ModeCards