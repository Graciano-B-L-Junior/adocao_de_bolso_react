import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Passo7(props) {
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
                            <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold' }}>Passo 7</Text>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Neste passo já foi apresentado a você o histórico da criança e existe por sua parte interesse em adota-lá.
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    Agora neste estágio é permitido a sua aproximação para a criança.
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    Durante esse estágio de convivência, ele é monitorado pela Justiça e pela equipe técnica.
                                </Text>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify', paddingTop: 10 }}>
                                    É permitido visitar o abrigo onde ela/ele mora; dar pequenos passeios para que vocês se aproximem e se conheçam melhor.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.modalDisplay3}>
                            <View style={{ justifyContent: 'center', padding: 15 }}>
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold', textAlign: 'justify' }}>
                                    Se chegou neste estágio, você está muito proximo de realizar a adoção.
                                    Prossiga para o passo 8 da trilha
                                </Text>
                                <TouchableOpacity style={styles.btnmodalDisplay} onPress={() => props.setTela('Trilha')}>
                                    <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Voltar para Trilha</Text>
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