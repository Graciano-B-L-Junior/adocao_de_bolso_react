import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Trilha(props) {

   

    return (
        <View style={styles.container}>
            <LinearGradient colors={['rgb(255,85,0)', 'rgb(247,139,13)']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.99 }}>
                <StatusBar hidden></StatusBar>
                <View style={styles.headerTela}>
                    <TouchableOpacity style={styles.btnInfo} onPress={() => props.setTela('Contato')}>
                        <Image style={styles.iconStyle} source={require('./assets/newIcons/infoW.png')}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnPerfil} onPress={() => props.setTela('Perfilusuario')}>
                        <Image style={styles.iconStyle} source={require('./assets/newIcons/perfilW.png')}>
                        </Image>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontFamily: 'Inter_500Medium', color: 'white' }}><Text style={{ fontFamily: 'Inter_700Bold', color: 'white' }}>Adoção</Text> de bolso</Text>
                </View>
                <ScrollView>
                    <View style={{ paddingTop: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <View>
                            <TouchableOpacity style={styles.btnBalaoTrilhaL}>
                                <Image style={styles.iconEtapaTrilha} source={require('./assets/newIcons/trilha/etp1.png')} ></Image>
                            </TouchableOpacity>
                            <Text style={{ right: 56, paddingTop: 10, color: 'white', fontFamily: 'Inter_700Bold' }}>Passo 1</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btnBalaoTrilhaR}>
                                <Image style={styles.iconEtapaTrilha} source={require('./assets/newIcons/trilha/etp2.png')} ></Image>
                            </TouchableOpacity>
                            <Text style={{ left: 125, paddingTop: 10, color: 'white', fontFamily: 'Inter_700Bold' }}>Passo 2</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btnBalaoTrilhaL}>
                                <Image style={styles.iconEtapaTrilha} source={require('./assets/newIcons/trilha/etp3.png')} ></Image>
                            </TouchableOpacity>
                            <Text style={{ right: 56, paddingTop: 10, color: 'white', fontFamily: 'Inter_700Bold' }}>Passo 3</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btnBalaoTrilhaR}>
                                <Image style={styles.iconEtapaTrilha} source={require('./assets/newIcons/trilha/etp4.png')} ></Image>
                            </TouchableOpacity>
                            <Text style={{ left: 125, paddingTop: 10, color: 'white', fontFamily: 'Inter_700Bold' }}>Passo 4</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btnBalaoTrilhaL}>
                                <Image style={styles.iconEtapaTrilha} source={require('./assets/newIcons/trilha/etp5.png')} ></Image>
                            </TouchableOpacity>
                            <Text style={{ right: 56, paddingTop: 10, color: 'white', fontFamily: 'Inter_700Bold' }}>Passo 5</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btnBalaoTrilhaR}>
                                <Image style={styles.iconEtapaTrilha} source={require('./assets/newIcons/trilha/etp6.png')} ></Image>
                            </TouchableOpacity>
                            <Text style={{ left: 125, paddingTop: 10, color: 'white', fontFamily: 'Inter_700Bold' }}>Passo 6</Text>
                        </View>
                        <View style={{ paddingBottom: 100 }}></View>
                    </View>
                </ScrollView>
                <View style={styles.bottomNav}>
                    <TouchableOpacity style={styles.btnInfo} onPress={() => props.setTela('DicasCulturais')}>
                        <Image style={styles.iconStyle} source={require('./assets/newIcons/dicasOff.png')}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnTrilha}>
                        <Image style={styles.iconStyleTrilha} source={require('./assets/newIcons/trilhaOn.png')}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnPerfil} onPress={() => props.setTela('PerguntasFrequentes')}>
                        <Image style={styles.iconStyle} source={require('./assets/newIcons/duvidasOff.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255,85,0)'
    },
    headerTela: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        zIndex: 99,
        backgroundColor: 'rgb(255,85,0)'
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
        elevation: 5
    },
    btnBalaoTrilhaL: {
        height: 120,
        width: 120,
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 100,
        right: 90,
        backgroundColor: '#f78b0d',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,

    },
    btnBalaoTrilhaR: {
        height: 120,
        width: 120,
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 100,
        left: 90,
        backgroundColor: '#f78b0d',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    iconStyle: {
        width: 42,
        height: 42
    },
    iconStyleTrilha: {
        width: 70,
        height: 70
    },
    iconEtapaTrilha: {
        width: '70%',
        height: '70%'
    }

});
