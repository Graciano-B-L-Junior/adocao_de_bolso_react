import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CheckBox from '@react-native-community/checkbox';

export default function Trilha(props) {

    return (
        <View style={styles.container}>
            <View style={styles.headerTela}>
                <TouchableOpacity style={styles.btnInfo} onPress={() => props.setTela('inicio')}>
                    <FontAwesome5 name="info-circle" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnPerfil} onPress={() => props.setTela('inicio')}>
                    <Ionicons name="person" size={24} color="black" />
                </TouchableOpacity>
                <Text>Adoção de bolso</Text>
            </View>
            <ScrollView>
                <View style={{ paddingTop: 120,justifyContent:'center',alignItems:'center' }}>
                    <TouchableOpacity style={styles.btnBalaoTrilhaL}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnBalaoTrilhaR}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnBalaoTrilhaL}>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnBalaoTrilhaR}>
                    </TouchableOpacity>
                    <View style={{paddingBottom:150}}></View>
                </View>
            </ScrollView>
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.btnInfo} onPress={() => props.setTela('inicio')}>
                    <MaterialCommunityIcons name="lightbulb-on-outline" size={40} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTrilha}>
                    <Ionicons name="trail-sign" size={80} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnPerfil} onPress={() => props.setTela('inicio')}>
                    <AntDesign name="questioncircle" size={40} color="black" />
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
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
        zIndex: 99
    },
    btnTrilha: {
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: 'white'
    },
    btnBalaoTrilhaL: {
        height: 120,
        width: 120,
        borderWidth: 2,
        borderRadius: 100,
        right:90
    },
    btnBalaoTrilhaR: {
        height: 120,
        width: 120,
        borderWidth: 2,
        borderRadius: 100,
        left:90
    },


});
