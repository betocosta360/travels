import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, SafeAreaView } from 'react-native'
import React, { useState } from "react"
import { Searchbar } from 'react-native-paper'

import Icon from 'react-native-vector-icons/FontAwesome';
import Photo from '../../componets/foto/photo';
import Main from '../../main';
//import SearchBar from '../../componets/searchBar/searchBar';

const Countrys = [
    {
        index: '1',
        image: require('../../assets/images/canada.jpg'),
        title: 'Canada',
        desc: 'Toronto'
    },
    {
        index: ' 2',
        image: require('../../assets/images/franca.jpg'),
        title: 'França',
        desc: 'Paris'
    },
    {
        index: '3',
        image: require('../../assets/images/bali.jpg'),
        title: 'Bali',
        desc: 'Indonesia'
    },
    {
        index: '4',
        image: require('../../assets/images/italia.jpg'),
        title: 'Italia',
        desc: 'Roma'
    },
    {
        index: '5',
        image: require('../../assets/images/canada.jpg'),
        title: 'Canada',
        desc: 'Toronto'
    },
    {
        index: '6',
        image: require('../../assets/images/franca.jpg'),
        title: 'França',
        desc: 'Paris'
    },
    {
        index: '7',
        image: require('../../assets/images/bali.jpg'),
        title: 'Bali',
        desc: 'Indonesia'
    },
    {
        index: '8',
        image: require('../../assets/images/italia.jpg'),
        title: 'Italia',
        desc: 'Roma'
    },
    {
        index: '9',
        image: require('../../assets/images/italia.jpg'),
        title: 'Italia',
        desc: 'Roma'
    },

]


const Home = () => {
    const [input, setInput] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.headerContaiener}>
                <TouchableOpacity>
                    <Icon style={styles.icon} name='chevron-left' />
                </TouchableOpacity>
                <Text style={styles.title}>Destinos mais populares</Text>
            </View>
            <View style={[styles.searchContainer, styles.shadowProp]}>
                <Searchbar placeholder="Pesquisar"
                    onChangeText={(text) => {
                        setInput(text);
                    }}
                    value={input} />
            </View>

            <SafeAreaView style={styles.containerSafeArea}>
                <FlatList
                    data={Countrys}
                    renderItem={({ item }) => {
                        console.log(item.image)
                        return (
                            <View style={[styles.boxImage, styles.shadowProp]}>
                                <Image source={item.image} resizeMode={'contain'} style={styles.image} />
                                <Text style={styles.textTitle}>{item.title}</Text>
                                <Text style={styles.textDesc}>{item.desc}</Text>
                            </View>
                        )
                    }}
                />
            </SafeAreaView>



        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: '7%',
        backgroundColor: '#FFF'
    },
    headerContaiener: {
        margin: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    icon: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#312DA4'

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#312DA4',
    },
    searchContainer: {
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10
    },

    boxImage: {
        margin: 20,
        backgroundColor: '#FFF',
        borderRadius: 10


    },
    image: {

        width: '100%',
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 10
    },
    textTitle: {
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 20
    },
    textDesc: {
        fontSize: 12,
        fontWeight: '400',
        marginLeft: 20,
        marginBottom: 10
    },
    shadowProp: {

        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 20,
        shadowColor: '#52006A',
    },

    containerSafeArea:{
       marginBottom: '25%'
    }


})

export default Home