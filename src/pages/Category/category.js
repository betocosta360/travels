import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, SafeAreaView, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React, { useState } from "react"

import { Searchbar } from 'react-native-paper'



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
        image: require('../../assets/images/brasil.jpg'),
        title: 'Brasil',
        desc: 'Rio de Janeiro'
    },

]

const Options = [
    {
        item: 'Australia',
        id: 'AU',
    },
    {
        item: 'Bali',
        id: 'BA',
    },
    {
        item: 'Brasil',
        id: 'BR',
    },
    {
        item: 'Canada',
        id: 'CA',
    },
    {
        item: 'França',
        id: 'FR',
    },
    {
        item: 'Italia',
        id: 'IT',
    },
    {
        item: 'Inglaterra',
        id: 'EG',
    },
    {
        item: 'Irlanda',
        id: 'IR',
    },


]


const Category = ({ navigation }) => {
    const [input, setInput] = useState("");

    const [selectedValue, setSelectedValue] = useState("Australia");

    return (
        <View style={styles.container}>
            <View style={styles.headerContaiener}>

                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 15, width: '50%', borderRadius: 10, backgroundColor: '#312DA4', color: '#FFF', marginTop: 10 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Australia" value="Australia" />
                    <Picker.Item label="Brasil" value="Brasil" />
                    <Picker.Item label="Bali" value="Bali" />
                    <Picker.Item label="Canada" value="Canada" />
                    <Picker.Item label="França" value="França" />
                    <Picker.Item label="Italia" value="Italia" />
                    <Picker.Item label="Indonesia" value="Indonesia" />

                </Picker>

                <Text style={styles.title}>Categorias</Text>
            </View>
            <View style={[styles.searchContainer, styles.shadowProp]}>
                <Searchbar placeholder="Pesquisar"
                    onChangeText={(text) => {
                        setInput(text);
                    }}
                    value={input} />
            </View>
            <View style={styles.containerCategory}>
                <ScrollView showsHorizontalScrollIndicator={false}
                    horizontal={true} >
                    <TouchableOpacity style={styles.buttomCategory}>
                        <Text style={styles.textCategory}>Hotel</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={styles.buttomCategory}>
                        <Text style={styles.textCategory} >Rios</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttomCategory}>
                        <Text style={styles.textCategory}>Montanhas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttomCategory}>
                        <Text style={styles.textCategory}>Cidades</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttomCategory}>
                        <Text style={styles.textCategory}>Lagos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttomCategory}>
                        <Text style={styles.textCategory}>Casas</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>

            <View style={styles.containerSafeArea}>
                <SafeAreaView showsVerticalScrollIndicator={false}>
                    <FlatList
                        data={Countrys}
                        renderItem={({ item }) => {
                            console.log(item.image)
                            return (

                                <View style={[styles.boxImage, styles.shadowProp]}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                                        <Image source={item.image} resizeMode={'contain'} style={styles.image} />
                                        </TouchableOpacity>
                                        <Text style={styles.textTitle}>{item.title}</Text>
                                    

                                    <Text style={styles.textDesc}>{item.desc}</Text>
                                </View>
                            )
                        }}
                    />
                </SafeAreaView>
            </View>

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
        height: 135,
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

    containerSafeArea: {
        marginBottom: '30%'
    },
    containerSelectBox: {
        marginRight: 50
    },
    containerCategory: {
        margin: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    buttomCategory: {
        padding: 8,
        marginLeft: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#52006A'
    },
    textCategory: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#52006A'
    }


})

export default Category