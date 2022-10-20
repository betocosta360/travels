import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';

const Settings = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <Icon name='chevron-left' style={{ fontSize: 30, color: '#52006A' }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: '#52006A' }}>Configurações</Text>

            </View>
            <View style={styles.containerConfigs}>
                <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{ fontSize: 20, color: '#52006A', marginBottom: 10 }}>País</Text>
                    <Text style={{ fontSize: 20, color: '#52006A', marginBottom: 10 }}>Brasil</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: 20, color: '#52006A', marginBottom: 10 }}>Politica de privacidade</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: 20, color: '#52006A', marginBottom: 10 }}>Suporte</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: 20, color: '#52006A', marginBottom: 10 }}>Alterar Senha</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontSize: 20, color: '#52006A', marginBottom: 10 }}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: '15%',
    },
    iconContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    containerConfigs: {
        margin: 20,
    }
});

export default Settings