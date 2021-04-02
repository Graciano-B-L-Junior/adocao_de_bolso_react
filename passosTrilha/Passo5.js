import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Passo5(props) {
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 5</Text>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Após participação no curso e avaliação da equipe técnica, o pretendente passa a integrar o cadastro de habilitados.
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    OBS: em Fortaleza, o Setor de Cadastro pede que os pretendentes frequentem os encontros dos Grupos de Apoio à Adoção e apresentem declaração de participação em, pelo menos, quatro encontros.
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    A Acalanto Fortaleza fornece certificado de participação nos encontros do Bate-Papo Adotivo, que são realizados mensalmente.
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    Mais informações através do telefone <Text style={{ color: 'rgb(247,139,13)' }}> (85) 98854.6476 (WhatsApp)</Text>
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    Já possui 4 documentos de declaração dos encontros com os Grupos de adoção?
                                </Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setSimNao('sim')}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setSimNao('não')}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Não</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ paddingBottom: 20 }}></View>
                    </View>
                </ScrollView>
            </View>
        )
    }
    else if (SimNao == 'sim') {
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 5</Text>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Após participação no curso e avaliação da equipe técnica, o pretendente passa a integrar o cadastro de habilitados.
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    OBS: em Fortaleza, o Setor de Cadastro pede que os pretendentes frequentem os encontros dos Grupos de Apoio à Adoção e apresentem declaração de participação em, pelo menos, quatro encontros.
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    A Acalanto Fortaleza fornece certificado de participação nos encontros do Bate-Papo Adotivo, que são realizados mensalmente.
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    Mais informações através do telefone <Text style={{ color: 'rgb(247,139,13)' }}> (85) 98854.6476 (WhatsApp)</Text>
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    Já possui 4 documentos de declaração dos encontros com os Grupos de adoção?
                                </Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Não</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Que ótimo! Apresente os documentos ao setor de cadastro e passe para o passo 6  
                                </Text>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={()=>props.setTela('Trilha')}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Voltar para trilha</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ paddingBottom: 20 }}></View>
                    </View>
                </ScrollView>
            </View>
        )
    }
    else if (SimNao == 'não') {
        return(
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 5</Text>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Após participação no curso e avaliação da equipe técnica, o pretendente passa a integrar o cadastro de habilitados.
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    OBS: em Fortaleza, o Setor de Cadastro pede que os pretendentes frequentem os encontros dos Grupos de Apoio à Adoção e apresentem declaração de participação em, pelo menos, quatro encontros.
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    A Acalanto Fortaleza fornece certificado de participação nos encontros do Bate-Papo Adotivo, que são realizados mensalmente.
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    Mais informações através do telefone <Text style={{ color: 'rgb(247,139,13)' }}> (85) 98854.6476 (WhatsApp)</Text>
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    Já possui 4 documentos de declaração dos encontros com os Grupos de adoção?
                                </Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Não</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Entre em contato com a Acalanto para participar dos encontros e conseguir os 4 documentos de participação dos encontros, e após isso volte ao passo 5
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    Mais informações sobre a Acalanto através do telefone <Text style={{ color: 'rgb(247,139,13)' }}> (85) 98854.6476 (WhatsApp)</Text>
                                </Text>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={()=>props.setTela('Trilha')}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Voltar para trilha</Text>
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