import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



export default function DicasCulturais(props) {

    return (
        <View style={styles.container}>
            <StatusBar hidden></StatusBar>
            <View style={styles.headerTela}>
                <Text style={{ fontSize: 20, fontFamily: 'Inter_500Medium' }}>Dicas Culturais</Text>
            </View>
            <ScrollView>
                <View style={{ paddingTop: 70 }}>
                    <View>
                        <Text style={{ marginLeft: 10, marginBottom: 10 }}>Documentários</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/documentarios/doc1.png')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/documentarios/doc2.png')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/documentarios/doc3.png')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/documentarios/doc4.png')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/documentarios/doc5.png')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/documentarios/doc6.png')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/documentarios/doc7.png')}></Image>
                        </View>

                    </ScrollView>
                </View>
                <View style={{ paddingTop: 30 }}>
                    <View>
                        <Text style={{ marginLeft: 10, marginBottom: 10 }}>Filmes</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/filmes/filme1.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/filmes/filme2.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/filmes/filme3.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/filmes/filme4.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/filmes/filme5.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/filmes/filme6.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/filmes/filme7.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/filmes/filme8.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/filmes/filme9.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/filmes/filme10.jpg')}></Image>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ paddingTop: 30 }}>
                    <View>
                        <Text style={{ marginLeft: 10, marginBottom: 10 }}>Séries</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/series/ser1.jpeg')}></Image>
                        </View>
                        
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/series/ser2.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/series/ser3.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/series/ser4.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/series/ser5.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/series/ser6.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/series/ser7.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/series/ser8.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/series/ser9.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/series/ser10.png')}></Image>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ paddingTop: 30, paddingBottom: 100 }}>
                    <View>
                        <Text style={{ marginLeft: 10, marginBottom: 10 }}>Livros</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/livros/liv1.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/livros/liv2.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/livros/liv3.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/livros/liv4.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/livros/liv5.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/livros/liv6.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/livros/liv7.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/livros/liv8.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/livros/liv9.jpg')}></Image>
                        </View>
                        <View style={styles.iconTemplate}>
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch' }} source={require('./assets/livros/liv10.jpg')}></Image>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.btnInfo} onPress={() => props.setTela('DicasCulturais')}>
                    <Image style={styles.iconStyle} source={require('./assets/icones-18.png')}>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTrilha} onPress={() => props.setTela('Trilha')}>
                    <Image style={styles.iconStyleTrilha} source={require('./assets/icones-22.png')}>
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
        zIndex: 99,
        borderBottomWidth: 1
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
    }

});