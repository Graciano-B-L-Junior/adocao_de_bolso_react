import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';



export default function DicasCulturais(props) {

    return (
        <View style={styles.container}>
            <StatusBar hidden></StatusBar>
            <View style={styles.headerTela}>
                <TouchableOpacity style={styles.btnInfo} onPress={() => props.setTela('Contato')}>
                    <AntDesign name="back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20,fontFamily:'Inter_500Medium' }}>Dicas Culturais</Text>
            </View>
            <View style={{paddingTop:100,alignItems:'center'}}>
                
            </View>
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.btnInfo} onPress={() => props.setTela('DicasCulturais')}>
                    <Image style={styles.iconStyle} source={require('./assets/icones-18.png')}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTrilha} onPress={()=>props.setTela('Trilha')}>
                    <Image style={styles.iconStyleTrilha} source={require('./assets/icones-22.png')}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnPerfil} onPress={() => props.setTela('inicio')}>
                    <Image style={styles.iconStyle} source={require('./assets/icones-16.png')}>
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
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        zIndex: 99,
        borderTopWidth: 1
    },
    btnTrilha: {
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: 'white',
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
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
    }

});