import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Passo3(props) {
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 3</Text>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', padding: 40 }}>
                                    Seus documentos foram aprovados?
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 3</Text>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', padding: 40 }}>
                                    Seus documentos foram aprovados?
                                    </Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay} >
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} >
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Não</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 25 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Oba! Em breve você será convocado para participar do curso preparatório
                                    </Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setSimNao('saberMais')}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Quero saber Mais</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setSimNao('vemDepois')}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>O que vem depois?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
    else if (SimNao == 'não') {
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 3</Text>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', padding: 40 }}>
                                    Seus documentos foram aprovados?
                                    </Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay} >
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} >
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Não</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 25 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Que chatiação!, mas não se preocupe, entre em contato com a rede adotiva, eles iram ajudar,
                                    clique no botão abaixo para ver o contato da ONG.
                                    </Text>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={()=>props.setTela('Contato')}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Informações</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
    else if (SimNao == 'saberMais') {
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 3</Text>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', padding: 40 }}>
                                    Seus documentos foram aprovados?
                                    </Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay} >
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} >
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Não</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 25 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Oba! Em breve você será convocado para participar do curso preparatório
                                    </Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay} >
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Quero saber Mais</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} >
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>O que vem depois?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 25 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingBottom: 10 }}>
                                Após análise e aprovação da documentação, os pretendentes são convocados pelo Setor de Cadastro para participarem do curso preparatório. Em Fortaleza, esta etapa é feita através de uma parceria entre o TJCE e os Grupos de Apoio à Adoção de Fortaleza e realizada em dois dias distintos.
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingBottom: 10 }}>
                                    O curso é dividido em 2 módulos, sendo um dia para cada:
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    •	Aspectos jurídico-legais da adoção
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    •	Aspectos psicossociais da adoção
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    •	Para saber mais sobre o curso vá para o passo 4
                                    </Text>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => props.setTela('Trilha')}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Voltar a trilha</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
    else if (SimNao == 'vemDepois') {
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 3</Text>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', padding: 40 }}>
                                    Seus documentos foram aprovados?
                                    </Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay} >
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} >
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Não</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 25 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Oba! Em breve você será convocado para participar do curso preparatório
                                    </Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay} >
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Quero saber Mais</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} >
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>O que vem depois?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 25 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingBottom: 10 }}>
                                    O próximo passo é a visita da equipe técnica, para entender como ela funciona acesse o passo 4 na trilha
                                    </Text>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => props.setTela('Trilha')} >
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Voltar para trilha</Text>
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