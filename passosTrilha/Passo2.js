import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Passo2(props) {
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 2</Text>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', padding: 40 }}>
                                    Você já está com seu número de protocolo?
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 2</Text>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', padding: 40 }}>
                                    Você já está com seu número de protocolo?
                                    </Text>
                            </View>
                        </View>

                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} >
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Não</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.modalDisplay3}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', padding: 20 }}>
                                    Sabe qual a documentação necessária para fazer cadastro no fórum?
                            </Text>
                            </View>
                        </View>

                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setSimNao('sim_sim')}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => setSimNao('sim_não')}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Não</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View>
        )
    }
    else if (SimNao == 'sim_sim') {
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 2</Text>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', padding: 40 }}>
                                    Você já está com seu número de protocolo?
                                    </Text>
                            </View>
                        </View>

                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} >
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Não</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.modalDisplay3}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', padding: 20 }}>
                                    Sabe qual a documentação necessária para fazer cadastro no fórum?
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
                            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Então agora é hora de agendar a documentação, para isso ligue para o forum pelo número:
                                    <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                        (85) 3278-3578
                                        </Text>
                                </Text>

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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 2</Text>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', padding: 40 }}>
                                    Você já está com seu número de protocolo?
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

                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', padding: 40 }}>
                                    Volte para o passo 1
                                    </Text>
                            </View>
                        </View>

                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => props.setTela('Trilha')}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Voltar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => props.setTela('Passo1')}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Passo 1</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View>
        )
    }

    else if (SimNao == 'sim_não') {
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 2</Text>
                        </View>
                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', padding: 40 }}>
                                    Você já está com seu número de protocolo?
                                    </Text>
                            </View>
                        </View>

                        <View style={styles.modalDisplay}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <TouchableOpacity style={styles.btnmodalDisplay}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnmodalDisplay} >
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Não</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.modalDisplay3}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', padding: 20 }}>
                                    Sabe qual a documentação necessária para fazer cadastro no fórum?
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
                            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Então veja aqui a lista de documentos:
                            </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify',marginTop:10,right:10 }}>
                                •	Cópia de CPF de cada requerente;
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify',marginTop:10 }}>
                                •	Cópia de Certidão de Casamento (ou Declaração de União Estável) ou Certidão de Nascimento (se solteiros);
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify',marginTop:10 }}>
                                •	Cópia de comprovante de residência;
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify',marginTop:10 }}>
                                •	Declaração de renda mensal (contra-cheque ou declaração de IR. No caso de trabalhador autônomo, o Setor de Cadastro disponibiliza um modelo para comprovação de renda);
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify',marginTop:10 }}>
                                •	Atestado de sanidade física e mental (pode ser emitida por médico de qualquer especialidade;
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify',marginTop:10 }}>
                                •	Atestado(s) de idoneidade moral de cada pretendente, assinado(s) por pessoas diferentes, sem parentesco, com firma reconhecida ou com cópia do documento do atestante;
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify',marginTop:10 }}>
                                •	Certidões de antecedentes criminais de cada um dos requerentes.
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify',marginTop:10 }}>
                                •	Certidões negativas de distribuição cível de cada um dos requerentes;
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify',marginTop:10 }}>
                                •	Caso já tenha filho, trazer a cópia da Certidão de Nascimento;
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify',marginTop:10 }}>
                                •	Número do protocolo gerado após o pré-cadastro no SNA.
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify',marginTop:10 }}>
                                    Então agora é hora de agendar a documentação, para isso ligue para o forum pelo número:
                                    <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                        (85) 3278-3578
                                        </Text>
                                </Text>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={()=> props.setTela('Trilha')}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Voltar para trilha</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View style={{paddingBottom:70}}></View>
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
        padding:15,
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