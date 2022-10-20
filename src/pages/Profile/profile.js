import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';


const Profile = ({navigation}) => {
    return (
        <ImageBackground source={require('../../assets/images/bali.jpg')} style={styles.container}>
            <View style={styles.overlayBackground}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                        <Icon name='chevron-left' style={{ fontSize: 30, color: '#FFF' }} />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.boxImage}>
                <View style={styles.buttonLogin}>
                    <Image source={require('../../assets/images/profile/perfil.jpg')}
                        resizeMode={'contain'} style={{ width: 120, height: 120, borderRadius: 120 / 2 }} />
                </View>

            </View>
            <View style={styles.containerName}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Michelle Garrett</Text>
                <Text style={{ fontSize: 14, fontWeight: '400', color: '#888' }}>michelegarret@gmail.com</Text>

            </View>

            <View style={styles.containerLast}>
                <Text style={{ fontSize: 18, fontWeight: '500', marginLeft: 20 }}>Últimas Viajens</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: '#888', marginRight: 20 }}>Veja mais.</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.containerLastImages}>
                <TouchableOpacity>
                    <Image style={[styles.image, styles.shadowProp]} source={require('../../assets/images/hoteis/hotel1.jpg')} resizeMode={'cover'} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={[styles.image, styles.shadowProp]} source={require('../../assets/images/hoteis/hotel1.jpg')} resizeMode={'cover'} />
                </TouchableOpacity>


            </View>

            <View style={styles.containerLastFavoritos}>
                <Text style={{ fontSize: 18, fontWeight: '500', marginLeft: 20 }}>Viajens Favoritas</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: '#888', marginRight: 20 }}>Veja mais.</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.containerLastImagesFavoritos}>
                <Image style={[styles.image, styles.shadowProp]} source={require('../../assets/images/hoteis/hotel1.jpg')} resizeMode={'cover'} />
                <Image style={[styles.image, styles.shadowProp]} source={require('../../assets/images/hoteis/hotel1.jpg')} resizeMode={'cover'} />
            </View>



        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '50%',
    },
    overlayBackground: {
        height: '50%',
        backgroundColor: 'rgba(3,7,30, .5)'
    },
    boxImage: {
        paddingVertical: '15%',
        position: 'absolute',
        justifyContent: 'flex-end',
        alignSelf: 'center',

    },
    containerName: {
        paddingVertical: '13%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerLast: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    containerLastImages: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },

    containerLastFavoritos: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    containerLastImagesFavoritos: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },


    image: {
        margin: 10,
        width: 150,
        height: 100,
        borderRadius: 20
    },

    shadowProp: {

        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10,
        shadowColor: '#52006A',
    },

    containerSafeArea: {
        flexDirection: 'row',
        marginBottom: '40%'
    },
    iconContainer: {
        marginLeft: 20,
        marginTop: '15%'
    }



});

export default Profile