import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Passo1(props) {
    const [semMensagem, setSemMensagem] = useState(true)
    const [SimNao, setSimNao] = useState(0)

    if (SimNao == 0) {
        return (
            <View style={styles.container}>
                <StatusBar hidden></StatusBar>
                <View style={styles.headerTela}>
                    <TouchableOpacity style={styles.btnVoltar} onPress={() => props.setTela('Trilha')}>
                        <AntDesign name="back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontFamily: 'Inter_700Bold', color: 'rgb(17,69,91)' }}>Trilha adoção</Text>
                </View>
                <ScrollView>
                    <View style={{ paddingTop: 70, justifyContent: 'center', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 1</Text>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Você decidiu adotar?</Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setSimNao(1)}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setSimNao(2)}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Não</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    } else if (SimNao == 1) {
        return (
            <View style={styles.container}>
                <StatusBar hidden></StatusBar>
                <View style={styles.headerTela}>
                    <TouchableOpacity style={styles.btnVoltar} onPress={() => props.setTela('Trilha')}>
                        <AntDesign name="back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontFamily: 'Inter_700Bold', color: 'rgb(17,69,91)' }}>Trilha adoção</Text>
                </View>
                <ScrollView>
                    <View style={{ paddingTop: 70, justifyContent: 'center', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 1</Text>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Você decidiu adotar?</Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setSimNao(1)}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setSimNao(2)}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Não</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.modalDisplay2}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 20 }}>

                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Realize o pré-cadastro no Sistema Nacional de Adoção, através do site do Conselho Nacional de Justiça - CNJ
                                (<Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>www.cnj.jus.br/sna</Text>).
                                Não esqueça de anotar o número de protocolo gerado.</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    } else if (SimNao == 2) {
        return (
            <View style={styles.container}>
                <StatusBar hidden></StatusBar>
                <View style={styles.headerTela}>
                    <TouchableOpacity style={styles.btnVoltar} onPress={() => props.setTela('Trilha')}>
                        <AntDesign name="back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontFamily: 'Inter_700Bold', color: 'rgb(17,69,91)' }}>Trilha adoção</Text>
                </View>
                <ScrollView>
                    <View style={{ paddingTop: 70, justifyContent: 'center', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 1</Text>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Você decidiu adotar?</Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setSimNao(1)}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setSimNao(2)}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Não</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ alignItems: 'center', padding: 15 }}>
                                <Image style={styles.iconStyle} source={require('../assets/newIcons/duvidasOn.png')}>
                                </Image>
                                <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', fontSize: 18, textAlign: 'center' }}>o que ainda falta para tomar essa decisão?</Text>
                                <Text style={{ color: 'rgb(17,69,91)', fontFamily: 'Inter_700Bold', fontSize: 14, textAlign: 'justify' }}>Visite nossa área de Perguntas Frequentes e tire suas dúvidas, caso
                                não encontre seu questionamento mande sua pergunta para gente na área de Contatos</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setSimNao(0)}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Voltar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => props.setTela('PerguntasFrequentes')}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>FAQ</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    headerTela: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        zIndex: 99,
        borderBottomWidth: 3,
        borderColor: 'rgb(247,139,13)'
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
    },
    modalDisplay: {
        marginTop: 20,
        width: 290,
        height: 60,
        backgroundColor: 'rgb(17,69,91)',
        borderRadius: 15
    },
    modalDisplay3: {
        marginTop: 20,
        width: 290,
        backgroundColor: '#f7f7f7',
        borderRadius: 15
    },
    modalDisplay2: {
        marginTop: 20,
        width: 290,
        backgroundColor: 'rgb(17,69,91)',
        borderRadius: 15
    },
    btnmodalDisplay: {
        width: 80,
        height: 30,
        backgroundColor: 'rgb(247,139,13)',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    iconStyle: {
        width: 92,
        height: 92
    }

});