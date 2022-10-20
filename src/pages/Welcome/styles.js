import { StyleSheet} from 'react-native'
import React from 'react'

export default  styles = ()=> StyleSheet.create({
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

