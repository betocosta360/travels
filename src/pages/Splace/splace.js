import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Icon } from 'react-native'
import React from 'react'

const Splace = () => {
    return (
        <ImageBackground source={require('../../assets/images/montanhas.jpg')} style={styles.container}>
            <View style={styles.overlayBackground}>

                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.buttonProcess}>
                        <Text style={styles.textButtonProcess}>CRIE SUA CONTA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonProcess}>
                        <Text style={styles.textButtonProcess}>ACESSAR</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',


    },
    overlayBackground: {
        flex: 1,
        backgroundColor: 'rgba(161,164,106, .2)',

    },

    inputContainer: {
        flex: 1,
        flexDirection: 'column-reverse',
        margin: 30,
    },

    
    buttonProcess: {
        backgroundColor: '#F38000',
        alignItems: 'center',
        borderRadius: 25,
        padding: 15,
        marginBottom: 10
    },
    textButtonProcess: {
        fontSize: 15,
        color: '#FFF',
        fontWeight: 'bold'
    },
    
})


export default Splace