import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const Trip = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Planejando uma viagem?</Text>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                    is simply dummy text of the{'\n'}
                    printing and typesetting industry.{'\n'}
                    is simply dummy text of the printing{'\n'}
                    and typesetting industry.
                </Text>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonStart}>
                    <Text style={styles.textButtom}>Vamos começar!</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/images/mapasemfundo.png')} resizeMode={'contain'} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: '10%',
        backgroundColor: '#fff',

    },
    title: {
        fontSize: 30,
        marginLeft: 20,
        marginBottom: 10,
        color: '#312DA4',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14,
        marginLeft: 20,
        fontWeight: '400',
        marginBottom: 10
    },
    containerButton: {
        flex: 1
    },


    textButtom: {
        fontSize: 15,
        fontWeight: '600',
        color: '#FFF'
    },
    buttonStart: {
        backgroundColor: '#F38000',
        borderRadius: 23,
        alignItems: 'center',
        padding: 12,
        marginLeft: '10%',
        marginRight: '50%',
        marginTop: 10
    },
    imageContainer: {
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 500
    }


});


export default Trip