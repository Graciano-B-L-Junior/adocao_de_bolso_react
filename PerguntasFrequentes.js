import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function PerguntasFrequentes(props) {
    return (
        <View style={styles.container}>
            <StatusBar hidden></StatusBar>
            <View style={styles.headerTela}>
                <Text style={{ fontSize: 20, fontFamily: 'Inter_700Bold' }}>Perguntas Frequentes</Text>
            </View>
            <ScrollView>
                <View style={{ paddingTop: 70, paddingLeft: 20, paddingRight: 80, justifyContent: 'center' }}>

                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', alignSelf: 'flex-start', fontSize: 100 }}>1</Text>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}> O que é adoção?</Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}> É uma forma admitida pela lei de uma pessoa assumir como filho uma criança ou adolescente nascida de outra ...</Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}> Todas as crianças e adolescentes que se encontram nos abrigos podem ser adotadas?</Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>
                                Não, pois muitas têm vínculos jurídicos com a sua família de origem e, por isso, não estão disponíveis à adoção ...
                            </Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', fontSize: 100 }}>2</Text>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', alignSelf: 'flex-start', fontSize: 100 }}>3</Text>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}> Quem pode adotar?</Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>Toda pessoa com mais de 18 anos de idade, seja ela ...</Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}> É possível registrar como filho uma criança nascida de outra pessoa?</Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}> Não. Essa conduta é ilegal, constitui crime, previsto no Código Penal ...</Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', fontSize: 100 }}>4</Text>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', alignSelf: 'flex-start', fontSize: 100 }}>5</Text>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}> Filhos adotivos dão mais problemas que filhos biológicos?</Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>
                                Não. Estudos e pesquisas mostram que os problemas de famílias adotivas e biológicas são os mesmos ...
                                </Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}>
                                A criança / adolescente deve saber que é adotada?
                            </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}> Sim e quem deve lhes revelar essa condição são os próprios pais, de forma natural e verdadeira, o mais cedo possível ...</Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', fontSize: 100 }}>6</Text>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', alignSelf: 'flex-start', fontSize: 100 }}>7</Text>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}>
                                Os estrangeiros, residentes em outros países, podem adotar crianças/adolescentes brasileiros?
                            </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>
                                Sim, podem adotar, quando não existam famílias brasileiras que queiram adotá-los, pois há uma preferência legal para os nacionais ...
                                </Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}>
                                Quais os procedimentos necessários para adoção?
                            </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>
                                Os pretendentes devem comparecer ao Cartório do Juizado da Infância e da Juventude com a documentação exigida.
                            </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>
                                Os pretendentes serão encaminhados ao setor técnico para estudos sociais e psicológicos.
                            </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'rgb(247,139,13)', paddingTop: 15 }}>
                                Veja informação completa em Saiba mais
                            </Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', fontSize: 100 }}>8</Text>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: 'row' }}>
                        <Text style={{ color: 'rgb(247,139,13)', fontFamily: 'Inter_700Bold', alignSelf: 'flex-start', fontSize: 100 }}>9</Text>
                        <View style={styles.modalDisplay3}>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', textAlign: 'center' }}>
                                Quais são os documentos necessários para habilitação de Adoção?
                            </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>
                                Cópia de Identidade de cada requerente;
                                </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>
                                Cópia de CPF de cada requerente
                                </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'white', paddingTop: 15 }}>
                                Cópia de Certidão de Casamento (ou Declaração de União Estável) ou Certidão de Nascimento (se solteiros);
                                </Text>
                            <Text style={{ fontFamily: 'Inter_700Bold', color: 'rgb(247,139,13)', paddingTop: 15 }}>
                                Veja informação completa em Saiba mais
                            </Text>
                            <TouchableOpacity style={styles.btnmodalDisplay} >
                                <Text style={{ color: '#f7f7f7', fontFamily: 'Inter_700Bold' }}>Saiba Mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ paddingBottom: 150 }}></View>
                </View>
            </ScrollView>
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.btnInfo} onPress={() => props.setTela('DicasCulturais')}>
                    <Image style={styles.iconStyle} source={require('./assets/newIcons/dicasOff.png')}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTrilha} onPress={() => props.setTela('Trilha')}>
                    <Image style={styles.iconStyleTrilha} source={require('./assets/newIcons/trilhaOff.png')}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnPerfil} onPress={() => props.setTela('PerguntasFrequentes')}>
                    <Image style={styles.iconStyle} source={require('./assets/newIcons/duvidasOn.png')}>
                    </Image>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerTela: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        zIndex: 99,
        borderBottomWidth: 3,
        borderColor: 'rgb(247,139,13)'
    },
    inputTextStyle: {
        width: '0%',
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
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        zIndex: 99
    },
    btnTrilha: {
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: '#f78b0d',
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20,
        borderWidth: 4,
        borderColor: '#f7f7f7',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1
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
    iconStyle: {
        width: 42,
        height: 42
    },
    iconStyleTrilha: {
        width: 70,
        height: 70
    },
    iconTemplate: {
        width: 100,
        height: 150,
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10
    },
    modalDisplay3: {
        marginTop: 20,
        backgroundColor: 'rgb(17,69,91)',
        borderRadius: 15,
        padding: 15
    },
    btnmodalDisplay: {
        padding: 15,
        height: 30,
        backgroundColor: 'rgb(247,139,13)',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }

});