import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Passo6(props) {
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 6</Text>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Após o deferimento da habilitação pela autoridade judicial, os pretendentes deverão aguardar o chamado do Setor de Cadastro, que comunicará a sua vinculação à criança ou ao adolescente com o perfil desejado, respeitando-se a ordem de classificação no cadastro.
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    A Vara de Infância vai avisá-lo que existe uma criança com o perfil compatível ao indicado por você. O histórico de vida da criança é apresentado ao adotante; se houver interesse, ambos são apresentados.
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    É muito mais fácil encontrar uma criança que se adapte ao perfil de um candidato que tenha poucas restrições quanto à criança/adolescente que se disponha a adotar.
                                    </Text>

                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    O setor de cadastro já entrou em contato com você?
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 6</Text>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Após o deferimento da habilitação pela autoridade judicial, os pretendentes deverão aguardar o chamado do Setor de Cadastro, que comunicará a sua vinculação à criança ou ao adolescente com o perfil desejado, respeitando-se a ordem de classificação no cadastro.
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    A Vara de Infância vai avisá-lo que existe uma criança com o perfil compatível ao indicado por você. O histórico de vida da criança é apresentado ao adotante; se houver interesse, ambos são apresentados.
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    É muito mais fácil encontrar uma criança que se adapte ao perfil de um candidato que tenha poucas restrições quanto à criança/adolescente que se disponha a adotar.
                                    </Text>

                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    O setor de cadastro já entrou em contato com você?
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
                                    O histórico da vida criança ou adolescente é apresentado a você se houver interesse ambos são apresentados.
                                    Para saber mais vá para o passo 7
                                    </Text>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => props.setTela('Trilha')}>
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 6</Text>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Após o deferimento da habilitação pela autoridade judicial, os pretendentes deverão aguardar o chamado do Setor de Cadastro, que comunicará a sua vinculação à criança ou ao adolescente com o perfil desejado, respeitando-se a ordem de classificação no cadastro.
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    A Vara de Infância vai avisá-lo que existe uma criança com o perfil compatível ao indicado por você. O histórico de vida da criança é apresentado ao adotante; se houver interesse, ambos são apresentados.
                                    </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    É muito mais fácil encontrar uma criança que se adapte ao perfil de um candidato que tenha poucas restrições quanto à criança/adolescente que se disponha a adotar.
                                    </Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    O setor de cadastro já entrou em contato com você?
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
                                    Aguarde o setor de cadastro entrar em contato, por enquanto acesse outras áreas do aplicativo como por exemplo as <Text style={{color:'rgb(247,139,13)'}}>Dicas culturais</Text>
                                    </Text>
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