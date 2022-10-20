import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';

const ForgetPass = () => {
    return (
        <ImageBackground source={require('../../assets/images/montanhas.jpg')} style={styles.container}>
            <View style={styles.overlayBackground}>

                <View style={styles.boxTitle}>
                    <Text style={styles.title}>Esqueceu a senha</Text>
                </View>
                <View style={[styles.boxForm, styles.shadowProp]}>

                    <View style={styles.inputForm}>
                    <View style={styles.boxUser}>
                            <TextInput style={styles.formUser} placeholder='Digite o seu número...' />
                            <Icon name='phone' style={{ alignItems: 'center', fontSize: 18, padding: 15, color: '#312DA4' }} />
                        </View>
                        
                        <View style={styles.boxButtom}>
                            <View style={styles.buttonLogin}>

                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.textButton}>Enviar</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </View>

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
        backgroundColor: 'rgba(255,255,255, .7)',
    },
    boxTitle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: '25%',
        fontSize: 30,
        color: '#F38000',
        fontWeight: 'bold'
    },
    boxForm: {
        justifyContent: 'center',
        backgroundColor: '#FFF',
        margin: 20,
        borderRadius: 10,
        padding: 20,
    },
    shadowProp: {

        shadowOffset: { width: -4, height: 8 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 20,
        shadowColor: '#52006A',
    },
    inputForm: {
        padding: 20,
    },
    boxUser: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxPass: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },


    formUser: {
        justifyContent: 'space-between',
        fontSize: 16,
        padding: 7,
        marginBottom: 15,
        

    },
    formPass: {
        justifyContent: 'space-between',
        fontSize: 16,
        padding: 7,
        marginBottom: 15
    },

    boxButtom: {
        paddingVertical: '20%',
        position: 'absolute',
        justifyContent: 'flex-end',
        alignSelf: 'center'
    },

    buttonLogin: {
        padding: 15,
        backgroundColor: '#F38000',
        borderRadius: 24
    },
    button: {

        paddingLeft: 10,
        paddingRight: 10

    },
    textButton: {
        color: '#FFF',
        fontSize: 16,
        paddingRight: 10,
        paddingLeft: 10
    },
    

})


export default ForgetPass