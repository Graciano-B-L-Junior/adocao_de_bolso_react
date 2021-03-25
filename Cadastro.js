import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CheckBox from '@react-native-community/checkbox';
import { LinearGradient } from 'expo-linear-gradient';

export default function Cadastro(props) {

    return (
        <View style={styles.container}>
            <LinearGradient colors={['rgb(17,69,91)', 'rgb(64,129,156)']} start={{ x: 0, y: 0.05 }} end={{ x: 0, y: 0.95 }} style={{ width: '100%' }}>
                <StatusBar hidden></StatusBar>
                <View style={styles.headerTela}>
                    <TouchableOpacity style={styles.btnVoltar} onPress={() => props.setTela('inicio')}>
                        <AntDesign name="back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontFamily: 'Inter_700Bold', color: '#f7f7f7' }}>Cadastro de Usuário</Text>
                </View>
                <ScrollView>

                    <View style={{padding:20}}>
                        <StatusBar hidden />

                        <View style={{ marginLeft: 20, marginTop: 100, width: '100%' }}>
                            <View>
                                <Text style={{ fontFamily: 'Inter_500Medium', color: '#f7f7f7', textAlign: 'center', paddingRight: 60 }}>Infomações do usuário</Text>
                            </View>
                            <View style={{ paddingTop: 20 }}>
                                <Text style={{ fontFamily: 'Inter_500Medium', color: '#f7f7f7', paddingLeft: 15 }}>Nome</Text>
                                <TextInput style={styles.inputTextStyle}></TextInput>
                            </View>
                            <View style={{ paddingTop: 20 }}>
                                <Text style={{ fontFamily: 'Inter_500Medium', color: '#f7f7f7', paddingLeft: 15 }}>Email</Text>
                                <TextInput style={styles.inputTextStyle}></TextInput>
                            </View>
                            <View style={{ paddingTop: 20 }}>
                                <Text style={{ fontFamily: 'Inter_500Medium', color: '#f7f7f7', paddingLeft: 15 }}>Senha</Text>
                                <TextInput style={styles.inputTextStyle}></TextInput>
                            </View>

                            <Text style={{ paddingTop: 50, fontFamily: 'Inter_500Medium', paddingLeft: 55, color: '#f7f7f7' }}>Informações pessoais</Text>

                            <View style={{ paddingTop: 20 }}>
                                <Text style={{ fontFamily: 'Inter_500Medium', paddingLeft: 15, color: '#f7f7f7' }}>idade</Text>
                                <TextInput style={styles.inputTextStyle}></TextInput>
                            </View>
                            <View style={{ paddingTop: 20 }}>
                                <Text style={{ fontFamily: 'Inter_500Medium', paddingLeft: 15, color: '#f7f7f7' }}>Estado civil</Text>
                                <TextInput style={styles.inputTextStyle}></TextInput>
                            </View>

                            <Text style={{ paddingTop: 50, fontFamily: 'Inter_500Medium', paddingLeft: 75, color: '#f7f7f7' }}>Perfil da criança</Text>

                            <Text style={{ paddingTop: 25, fontFamily: 'Inter_500Medium', paddingLeft: 15, color: '#f7f7f7' }}>Sexo</Text>

                            <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                                <TouchableOpacity style={{ width: '40%', height: 50, borderWidth: 1, justifyContent: 'center' }}>
                                    <Text style={{ color: '#f7f7f7', textAlign: 'center', fontFamily: 'Inter_500Medium' }}>Menino</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '40%', height: 50, borderWidth: 1, justifyContent: 'center' }}>
                                    <Text style={{ color: '#f7f7f7', textAlign: 'center', fontFamily: 'Inter_500Medium' }}>Menina</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={{ color: '#f7f7f7', paddingTop: 25, fontFamily: 'Inter_500Medium', paddingLeft: 15 }}>Idade</Text>
                            <View style={{ paddingTop: 15, paddingLeft: 15 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row', width: '40%' }}>
                                        <CheckBox>
                                        </CheckBox>
                                        <Text style={{ color: '#f7f7f7', paddingTop: 7 }}>0~1 ano</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '40%' }}>
                                        <CheckBox>
                                        </CheckBox>
                                        <Text style={{ color: '#f7f7f7', paddingTop: 7 }}>1~3 anos</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row', width: '40%' }}>
                                        <CheckBox>
                                        </CheckBox>
                                        <Text style={{ paddingTop: 7, fontFamily: 'Inter_500Medium', color: '#f7f7f7' }}>3~5 anos</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '40%' }}>
                                        <CheckBox>
                                        </CheckBox>
                                        <Text style={{ paddingTop: 7, fontFamily: 'Inter_500Medium', color: '#f7f7f7' }}>5~10 anos</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row', width: '40%' }}>
                                        <CheckBox>
                                        </CheckBox>
                                        <Text style={{ paddingTop: 7, fontFamily: 'Inter_500Medium', color: '#f7f7f7' }}>10~15 anos</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '40%' }}>
                                        <CheckBox>
                                        </CheckBox>
                                        <Text style={{ paddingTop: 7, fontFamily: 'Inter_500Medium', color: '#f7f7f7' }}>15~18 anos</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: '80%', marginTop: 15, marginBottom: 15, justifyContent: 'center' }}>
                                <Button title="Atualizar" onPress={() => props.setTela('Trilha')}></Button>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(17,69,91)'
    },
    headerTela: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 99,
        borderBottomWidth: 2,
        borderColor: '#f7f7f7',
        backgroundColor: 'rgb(17,69,91)'

    },
    inputTextStyle: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderRadius: 50
    },
    btnVoltar: {
        position: 'absolute',
        left: 20
    }

});
