import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function PerguntasFrequentes(props){
    return (
        <View style={styles.container}>
            <StatusBar hidden></StatusBar>
            <View style={styles.headerTela}>
                <Text style={{ fontSize: 20,fontFamily:'Inter_500Medium' }}>Perguntas Frequentes</Text>
            </View>
            <View style={styles.bottomNav}>
                    <TouchableOpacity style={styles.btnInfo} onPress={() => props.setTela('DicasCulturais')}>
                        <Image style={styles.iconStyle} source={require('./assets/newIcons/dicasOff.png')}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnTrilha} onPress={()=> props.setTela('Trilha')}>
                        <Image style={styles.iconStyleTrilha} source={require('./assets/newIcons/trilhaOff.png')}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnPerfil} onPress={() => props.setTela('PerguntasFrequentes')}>
                        <Image style={styles.iconStyle} source={require('./assets/newIcons/duvidasOn.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerTela: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        zIndex: 99,
        borderBottomWidth: 1
    },
    inputTextStyle: {
        width: '80%',
        height: 50,
        borderWidth: 1
    },
    btnInfo: {
        position: 'absolute',
        left: 20
    },
    btnPerfil: {
        position: 'absolute',
        right: 20
    },
    bottomNav: {
        width: '100%',
        height: 70,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        zIndex: 99
    },
    btnTrilha: {
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: '#f78b0d',
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20,
        borderWidth: 4,
        borderColor: '#f7f7f7',
        elevation:5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1
    },
    btnBalaoTrilhaL: {
        height: 120,
        width: 120,
        borderWidth: 2,
        borderRadius: 100,
        right: 90
    },
    btnBalaoTrilhaR: {
        height: 120,
        width: 120,
        borderWidth: 2,
        borderRadius: 100,
        left: 90
    },
    iconStyle: {
        width: 42,
        height: 42
    },
    iconStyleTrilha: {
        width: 70,
        height: 70
    },
    iconTemplate:{
        width:100,
        height:150,
        borderWidth:1,
        marginLeft:10,
        marginRight:10
    }

});