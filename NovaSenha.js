import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



export default function NovaSenha(props) {

    return (
        <View style={styles.container}>
            <StatusBar hidden></StatusBar>
            <View style={styles.headerTela}>
                <TouchableOpacity style={styles.btnInfo} onPress={() => props.setTela('inicio')}>
                    <AntDesign name="back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontFamily: 'Inter_500Medium' }}>Nova Senha</Text>
            </View>
            <View style={{paddingTop:100,width:'100%',paddingLeft:'10%',paddingRight:'10%'}}>
                <View style={{ paddingTop: 30,width:'100%' }}>
                    <Text style={{ fontFamily: 'Inter_500Medium' }}>Nome</Text>
                    <TextInput style={styles.inputTextStyle}></TextInput>
                </View>
                <View style={{ paddingTop: 30 }}>
                    <Text style={{ fontFamily: 'Inter_500Medium' }}>Email</Text>
                    <TextInput style={styles.inputTextStyle}></TextInput>
                </View>
                <View style={{ paddingTop: 30 }}>
                    <Text style={{ fontFamily: 'Inter_500Medium' }}>Senha</Text>
                    <TextInput style={styles.inputTextStyle}></TextInput>
                </View>
                <View style={{ paddingTop: 30,alignItems:'center' }}>
                    <Text style={{ fontFamily: 'Inter_500Medium',textAlign:'center' }}>Código enviado</Text>
                    <TextInput style={{width:'40%',height:50,borderWidth:1}}></TextInput>
                </View>


                <View style={{ paddingTop: 30,alignItems:'center' }}>
                    <TouchableOpacity style={{width:'30%',height:30,
                    borderWidth:1,alignItems:'center',
                    justifyContent:'center',
                    fontFamily: 'Inter_500Medium',
                    backgroundColor:'black',
                    borderRadius:50}}>
                        <Text style={{color:'white'}}>OK</Text>
                    </TouchableOpacity>
                </View>
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
        width: '100%',
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
        zIndex: 99
    },
    btnTrilha: {
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: 'white'
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


});
