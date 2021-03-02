import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function Cadastro() {

    return (
        <ScrollView style={{ backgroundColor: 'gray' }}>
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

                    <Text style={{ paddingTop: 25 }}>Sexo</Text>

                    <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                        <TouchableOpacity style={{ width: '40%', height: 50, borderWidth: 1, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center' }}>Menino</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '40%', height: 50, borderWidth: 1, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center' }}>Menina</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={{ paddingTop: 25 }}>Idade</Text>
                    <View style={{paddingTop: 15}}>
                        <View style={{ flexDirection: 'row'}}>
                            <View style={{ flexDirection: 'row', width: '40%' }}>
                                <CheckBox>
                                </CheckBox>
                                <Text style={{ paddingTop: 7 }}>0~1 ano</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '40%' }}>
                                <CheckBox>
                                </CheckBox>
                                <Text style={{ paddingTop: 7 }}>1~3 anos</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <View style={{ flexDirection: 'row', width: '40%' }}>
                                <CheckBox>
                                </CheckBox>
                                <Text style={{ paddingTop: 7 }}>3~5 anos</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: '40%' }}>
                                <CheckBox>
                                </CheckBox>
                                <Text style={{ paddingTop: 7 }}>5~10 anos</Text>
                            </View>
                        </View>
                    </View>


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
