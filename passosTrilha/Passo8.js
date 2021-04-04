import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Passo8(props) {
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 8</Text>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Nesta fase a guarda provisória da criança expedida pelo Setor de cadastro
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    A sentença de adoção será lavrada pelo juiz após visitas domiciliares ou entrevistas realizadas por uma equipe, por um tempo determinado, isso varia de caso a caso.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Normalmente, ela se dá por um período em torno de um ano.
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    Segundo o ECA, se a criança tiver menos de um ano de idade ou se já estiver na companhia do adotante com vinculação afetiva suficientemente constituída, este estágio será dispensado.
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    No caso de adoção internacional, este estágio deverá ser cumprido em território nacional e será de, no mínimo, 15 dias para crianças de até 2 anos de idade e de, no mínimo 30 dias, para crianças acima de 2 anos.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setSimNao('continuar')}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Continuar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ paddingBottom: 20 }}></View>
                    </View>
                </ScrollView>
            </View>
        )
    }
    else if (SimNao == 'continuar') {
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 8</Text>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    As informações pertinentes ao acompanhamento são registradas em relatórios técnicos, que são disponibilizados à apreciação do juiz e do representante do Ministério Público.
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    Quando há evidências suficientes acerca da formação de vínculos afetivos entre adotantes e adotando, existindo ali uma verdadeira relação de pai(s) e filho(s), a família será orientada a dar entrada na Ação de Adoção propriamente dita.
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    Pode-se iniciar a Ação de Adoção através de advogado particular ou mesmo através da Defensoria Pública.
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    Nesta ocasião, é possível que seja também necessário entrar com um pedido de Destituição do Poder Familiar dos genitores do(a) adotado(a), caso isto ainda não tenha ocorrido.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Se você conseguiu concluir todos os passos até aqui, significa que você conseguiu o processo de adoção. Meus parabéns a você, mas ainda não acabou, vá para o passo 9 na trilha, para aprender sobre pós-adoção.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setSimNao(0)}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Voltar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => props.setTela('Trilha')}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Ir para trilha</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ paddingBottom: 20 }}></View>
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
        backgroundColor: 'rgb(17,69,91)',
        borderRadius: 15
    },
    modalDisplay2: {
        marginTop: 20,
        width: 290,
        backgroundColor: 'rgb(17,69,91)',
        borderRadius: 15
    },
    btnmodalDisplay: {
        padding: 15,
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