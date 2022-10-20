import { View, Text, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, Image, FlatList} from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';


const Hoteis = [
    {
        index: '1',
        image: require('../../assets/images/hoteis/hotel1.jpg'),
        title: 'Bali',
        desc: 'Bali é uma ilha da Indonésia conhecida por suas montanhas vulcânicas repletas de florestas, seus arrozais, suas praias e seus recifes de coral.'
    },
    {
        index: ' 2',
        image: require('../../assets/images/hoteis/hotel2.jpg'),
        title: 'Bali',
        desc: 'Bali é uma ilha da Indonésia conhecida por suas montanhas vulcânicas repletas de florestas, seus arrozais, suas praias e seus recifes de coral.'
    },
    {
        index: '3',
        image: require('../../assets/images/hoteis/hotel-bali.jpg'),
        title: 'Bali',
        desc: 'Bali é uma ilha da Indonésia conhecida por suas montanhas vulcânicas repletas de florestas, seus arrozais, suas praias e seus recifes de coral.'
    },
    {
        index: '4',
        image: require('../../assets/images/hoteis/hotel3.jpg'),
        title: 'Bali',
        desc: 'Bali é uma ilha da Indonésia conhecida por suas montanhas vulcânicas repletas de florestas, seus arrozais, suas praias e seus recifes de coral.'
    },
    {
        index: '5',
        image: require('../../assets/images/hoteis/hotel4.jpg'),
        title: 'Bali',
        desc: 'Bali é uma ilha da Indonésia conhecida por suas montanhas vulcânicas repletas de florestas, seus arrozais, suas praias e seus recifes de coral.'
    },
    {
        index: '6',
        image: require('../../assets/images/hoteis/hotel5.jpg'),
        title: 'Bali',
        desc: 'Bali é uma ilha da Indonésia conhecida por suas montanhas vulcânicas repletas de florestas, seus arrozais, suas praias e seus recifes de coral.'
    },
    {
        index: '7',
        image: require('../../assets/images/hoteis/hotel6.jpg'),
        title: 'Bali',
        desc: 'Bali é uma ilha da Indonésia conhecida por suas montanhas vulcânicas repletas de florestas, seus arrozais, suas praias e seus recifes de coral.'
    },
    {
        index: '8',
        image: require('../../assets/images/hoteis/hotel7.jpg'),
        title: 'Bali',
        desc: 'Bali é uma ilha da Indonésia conhecida por suas montanhas vulcânicas repletas de florestas, seus arrozais, suas praias e seus recifes de coral.'
    },
    {
        index: '9',
        image: require('../../assets/images/hoteis/hotel8.jpg'),
        title: 'Bali',
        desc: 'Bali é uma ilha da Indonésia conhecida por suas montanhas vulcânicas repletas de florestas, seus arrozais, suas praias e seus recifes de coral.'
    },

]

const Details = ({navigation}) => {
    return (
        <ImageBackground source={require('../../assets/images/bali.jpg')} style={styles.container}>
            <View style={styles.overlayBackground}>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                <Icon name='chevron-left' style={{fontSize: 30, color:'#FFF'}}/>
                </TouchableOpacity>
                
            </View>
            </View>
            
            <View style={styles.containerDescription}>
                <View style={styles.description}>
                    <Text style={styles.textTitle}>Bali, Indonesia</Text>
                    <Text style={styles.textDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nunc,
                        aliquam eu urna cursus, ornare posuere leo. Aliquam lorem diam, tincidunt vel sem a,
                        suscipit suscipit tortor. Aliquam lorem diam, tincidunt vel sem a,
                        suscipit suscipit tortor.
                    </Text>
                </View>

            </View>
            <View style={styles.containerHoteis}>
                <Text style={{ fontSize: 16, fontWeight: '400', marginLeft: '3%' }}>Hotéis em Bali</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 14, color: '#888', marginLeft: '60%' }}>Veja Mais.</Text>
                </TouchableOpacity>

            </View>
            
                <SafeAreaView style={styles.containerSafeArea}>
                    <FlatList 
                        data={Hoteis}
                        renderItem={({ item }) => {
                            console.log(item.image)
                            return (
                                <View style={[styles.boxImage, styles.shadowProp]}>
                                    <Image source={item.image} resizeMode={'contain'} style={styles.image} />
                                    <Text style={styles.textTitleBox}>{item.title}</Text>
                                    <Text style={styles.textDescBox}>{item.desc}</Text>
                                </View>
                            )
                        }}
                    />
                </SafeAreaView>


        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '70%',
    },
    overlayBackground: {
        height: '60%',
        backgroundColor: 'rgba(3,7,30, .1.5)'
    },
    containerDescription: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    description: {
        margin: '5%'
    },
    textTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        
    },
    textDescription: {
        fontSize: 13,
        fontWeight: '400'
    },
    containerHoteis: {
        flexDirection: 'row',
        margin: 20,
    },
    boxImage: {
        margin: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10
        
    },
    image: {
        marginLeft: 10,
        width: 100,
        height: 100,
    },

    textTitleBox: {
        position: 'absolute',
        marginTop: '5%',
        fontSize: 14,
        fontWeight: '500',
        marginLeft: '40%',
        
    },
    textDescBox: {
        position: 'absolute',
        marginTop: '12%',
        fontSize: 12,
        fontWeight: '400',
        marginLeft: '40%',
        
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
    iconContainer:{
        marginLeft: 20,
        marginTop: '15%'
    }



});

export default Details