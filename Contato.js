import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



export default function Contato(props) {
    
    return (
        <View style={styles.container}>
            <StatusBar hidden></StatusBar>
            <View style={styles.headerTela}>
                <TouchableOpacity style={styles.btnInfo} onPress={() => props.setTela('Trilha')}>
                    <AntDesign name="back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>Contatos</Text>
            </View>
            <ScrollView>
                <View style={{ paddingTop: 100, paddingLeft: 20, paddingRight: 20 }}>
                    <Text style={{ fontSize: 24 }}>Rede adotiva</Text>
                    <Text style={{ fontSize: 18, paddingTop: 15 }}>(85) 98976.7183</Text>
                    <Text style={{ fontSize: 18, paddingTop: 15 }}>redeadotiva@gmail.com</Text>
                    <Text style={{ fontSize: 18, paddingTop: 15 }}>
                        Facebook/Instagram: redeadotiva
                    </Text>
                    <Text style={{ fontSize: 24, paddingTop: 20 }}>
                        Setor de Cadastro de Adoção de Fortaleza (Fórum)
                    </Text>
                    <Text style={{ fontSize: 18, paddingTop: 15 }}>
                        (85) 3278.3578
                    </Text>

                    <Text style={{ fontSize: 24, paddingTop: 20 }}>
                        Núcleo de Atendimento da Defensoria Pública da Infância e da Juventude (NADIJ)
                    </Text>
                    <Text style={{ fontSize: 18, paddingTop: 15 }}>
                        nadij@defensoria.ce.def.br
                    </Text>
                    <Text style={{ fontSize: 18, paddingTop: 15 }}>
                        (85) 99220-4953 – 8h às 14h
                    </Text>
                    <Text style={{ fontSize: 18, paddingTop: 15 }}>
                        (85) 98895-5716 – 14h às 16h40
                    </Text>

                    <Text style={{ fontSize: 24, paddingTop: 20 }}>
                        Mais grupos de apoio à adoção no Brasil, acesse:
                    </Text>
                    <Text style={{ fontSize: 18, paddingTop: 15 }}>
                        Associação Nacional de Grupos de Apoio à Adoção (ANGAAD)
                    </Text>
                    <Text style={{ fontSize: 18, paddingTop: 15 }}>
                        www.angaad.org.br
                    </Text>


                </View>
                <View style={{ paddingTop: 30, paddingLeft: 20, paddingRight: 20 }}>
                    <Text style={{ fontSize: 24 }}>Mande uma mensagem</Text>
                    <Text style={{ fontSize: 18, paddingTop: 15 }}>*Preencha os campos corretamente</Text>
                    <Text style={{ fontSize: 18, paddingTop: 15 }}>Nome</Text>
                    <TextInput style={{ width: '100%', height: 50, borderWidth: 1, marginTop: 15 }}></TextInput>
                    <Text style={{ fontSize: 18, paddingTop: 15 }}>E-mail</Text>
                    <TextInput style={{ width: '100%', height: 50, borderWidth: 1, marginTop: 15 }}></TextInput>
                    <Text style={{ fontSize: 18, paddingTop: 15 }}>Mensagem</Text>
                    <TextInput style={{ width: '100%', height: 150, borderWidth: 1, marginTop: 15 }}></TextInput>

                    <View style={{justifyContent:'center',width:'30%',paddingTop:30,position:'relative',left:'35%'}}>
                        <Button title="Enviar" onPress={()=>props.setTela('MensagemEnviada')}></Button>
                    </View>

                </View>
                <View style={{ paddingBottom: 100 }}></View>
            </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
    headerTela: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        zIndex: 99
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
