import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function Cadastro() {

    return (
        <ScrollView style={{backgroundColor:'gray'}}>
            <View style={styles.container}>
                <StatusBar hidden />
                <View style={styles.headerTela}>
                    <Text>Tela de cadastro</Text>
                </View>
                <View style={{ marginLeft: 50, marginTop: 100, width: '100%' }}>
                    <View style={{ paddingTop: 20 }}>
                        <Text>Nome</Text>
                        <TextInput style={styles.inputTextStyle}></TextInput>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Text>Email</Text>
                        <TextInput style={styles.inputTextStyle}></TextInput>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Text>Senha</Text>
                        <TextInput style={styles.inputTextStyle}></TextInput>
                    </View>

                    <Text style={{ paddingTop: 50 }}>Informações pessoais</Text>

                    <View style={{ paddingTop: 20 }}>
                        <Text>idade</Text>
                        <TextInput style={styles.inputTextStyle}></TextInput>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Text>Estado civil</Text>
                        <TextInput style={styles.inputTextStyle}></TextInput>
                    </View>

                    <Text style={{ paddingTop: 50 }}>Perfil da criança</Text>

                </View>

            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center'
    },
    headerTela: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0
    },
    inputTextStyle: {
        width: '80%',
        height: 50,
        borderWidth: 1
    }

});
