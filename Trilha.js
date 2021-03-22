import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function Trilha(props) {

    return (
        <View style={styles.container}>
            <StatusBar hidden></StatusBar>
            <View style={styles.headerTela}>
                <TouchableOpacity style={styles.btnInfo} onPress={() => props.setTela('Contato')}>
                    <Image style={styles.iconStyle} source={require('./assets/icones-20.png')}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnPerfil} onPress={() => props.setTela('Perfilusuario')}>
                    <Image style={styles.iconStyle} source={require('./assets/icones-21.png')}>
                    </Image>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontFamily: 'Inter_500Medium' }}>Adoção de bolso</Text>
            </View>
            <ScrollView>
                <View style={{ paddingTop: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <TouchableOpacity style={styles.btnBalaoTrilhaL}>
                            <Image style={styles.iconEtapaTrilha} source={require('./assets/newIcons/trilha/etp1.png')} ></Image>
                        </TouchableOpacity>
                        <Text style={{ right: 50, paddingTop: 10 }}>Passo 1</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnBalaoTrilhaR}>
                            <Image style={styles.iconEtapaTrilha} source={require('./assets/newIcons/trilha/etp2.png')} ></Image>
                        </TouchableOpacity>
                        <Text style={{ left: 125, paddingTop: 10 }}>Passo 2</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnBalaoTrilhaL}>
                            <Image style={styles.iconEtapaTrilha} source={require('./assets/newIcons/trilha/etp3.png')} ></Image>
                        </TouchableOpacity>
                        <Text style={{ right: 50, paddingTop: 10 }}>Passo 3</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnBalaoTrilhaR}>
                            <Image style={styles.iconEtapaTrilha} source={require('./assets/newIcons/trilha/etp4.png')} ></Image>
                        </TouchableOpacity>
                        <Text style={{ left: 125, paddingTop: 10 }}>Passo 4</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnBalaoTrilhaL}>
                            <Image style={styles.iconEtapaTrilha} source={require('./assets/newIcons/trilha/etp5.png')} ></Image>
                        </TouchableOpacity>
                        <Text style={{ right: 50, paddingTop: 10 }}>Passo 5</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnBalaoTrilhaR}>
                            <Image style={styles.iconEtapaTrilha} source={require('./assets/newIcons/trilha/etp6.png')} ></Image>
                        </TouchableOpacity>
                        <Text style={{ left: 125, paddingTop: 10 }}>Passo 6</Text>
                    </View>
                    <View style={{ paddingBottom: 100 }}></View>
                </View>
            </ScrollView>
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.btnInfo} onPress={() => props.setTela('DicasCulturais')}>
                    <Image style={styles.iconStyle} source={require('./assets/icones-18.png')}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTrilha}>
                    <Image style={styles.iconStyleTrilha} source={require('./assets/icones-17.png')}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnPerfil} onPress={() => props.setTela('PerguntasFrequentes')}>
                    <Image style={styles.iconStyle} source={require('./assets/icones-16.png')}>
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
        zIndex: 99,
        borderTopWidth: 1
    },
    btnTrilha: {
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: 'white',
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnBalaoTrilhaL: {
        height: 120,
        width: 120,
        borderWidth: 2,
        borderRadius: 100,
        right: 90,
        backgroundColor: '#f78b0d',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnBalaoTrilhaR: {
        height: 120,
        width: 120,
        borderWidth: 2,
        borderRadius: 100,
        left: 90,
        backgroundColor: '#f78b0d',
        alignItems: 'center',
        justifyContent: 'center'
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
