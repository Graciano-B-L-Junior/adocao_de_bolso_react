import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';

export default function Cadastro(props) {
    /*
    const [idades, setIdades] = useState({
        idade_0_1: false,
        idade_1_3: false,
        idade_3_5: false,
        idade_5_10: false,
        idade_10_15: false,
        idade_15_18: false,

    })
    */
    const [idade_0_1, setIdade_0_1] = useState(false)
    const [idade_1_3, setIdade_1_3] = useState(false)
    const [idade_3_5, setIdade_3_5] = useState(false)
    const [idade_5_10, setIdade_5_10] = useState(false)
    const [idade_10_15, setIdade_10_15] = useState(false)
    const [idade_15_18, setIdade_15_18] = useState(false)

    const [estadoCivil, setEstadoCivil] = useState()
    const [sexoCrianca, setSexoCrianca] = useState()

    function validarCadastro() {

        //console.warn(typeof props.novoUsuarioNome)
        //console.warn(typeof props.novoUsuarioEmail)
        //console.warn(typeof props.novoUsuarioSenha)
        //console.warn(typeof props.novoUsuarioIdade)
        //console.warn(typeof props.novoUsuarioEstadoCivil)
        //console.warn(typeof props.novoUsuarioPefilCriancaSexo)

        if(props.novoUsuarioNome == ''){
            Alert.alert('Preencha o campo Nome')
            return
        }
        if(props.novoUsuarioEmail == ''){
            Alert.alert('Preencha o campo Email')
            return
        }
        if(props.novoUsuarioSenha == ''){
            Alert.alert('Preencha o campo Senha')
            return
        }
        if(props.novoUsuarioIdade == ''){
            Alert.alert('Preencha o campo Idade')
            return
        }
        if(props.novoUsuarioEstadoCivil == ''){
            Alert.alert('Preencha o campo Estado civil')
            return
        }
        if(props.novoUsuarioPefilCriancaSexo == ''){
            Alert.alert('Preencha o campo Perfil da criança')
            return
        }
        if(props.novoUsuarioPefilCriancaIdade == ''){
            Alert.alert('Preencha o campo idade em Perfil da criança')
            return
        }



        
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={['rgb(17,69,91)', 'rgb(64,129,156)']} start={{ x: 0, y: 0.05 }} end={{ x: 0, y: 0.95 }} style={{ width: '100%' }}>
                <StatusBar hidden></StatusBar>
                <View style={styles.headerTela}>
                    <TouchableOpacity style={styles.btnVoltar} onPress={() => props.setTela('inicio')}>
                        <AntDesign name="back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontFamily: 'Inter_700Bold', color: '#f7f7f7' }}>Cadastro de Usuário</Text>
                </View>
                <ScrollView>

                    <View style={{ padding: 20 }}>
                        <StatusBar hidden />

                        <View style={{ marginLeft: 20, marginTop: 100, width: '100%' }}>
                            <View>
                                <Text style={{ fontFamily: 'Inter_500Medium', color: '#f7f7f7', textAlign: 'center', paddingRight: 60 }}>Infomações do usuário</Text>
                            </View>
                            <View style={{ paddingTop: 20 }}>
                                <Text style={{ fontFamily: 'Inter_500Medium', color: '#f7f7f7', paddingLeft: 15 }}>Nome</Text>
                                <TextInput style={styles.inputTextStyle} onChangeText={(text) => props.setNovoUsuarioNome(text)}></TextInput>
                            </View>

                            <View style={{ paddingTop: 20 }}>
                                <Text style={{ fontFamily: 'Inter_500Medium', color: '#f7f7f7', paddingLeft: 15 }}>Email</Text>
                                <TextInput style={styles.inputTextStyle} onChangeText={(text) => props.setNovoUsuarioEmail(text)}></TextInput>
                            </View>
                            <View style={{ paddingTop: 20 }}>
                                <Text style={{ fontFamily: 'Inter_500Medium', color: '#f7f7f7', paddingLeft: 15 }}>Senha</Text>
                                <TextInput style={styles.inputTextStyle} secureTextEntry={true} onChangeText={(text) => props.setNovoUsuarioSenha(text)}></TextInput>
                            </View>

                            <Text style={{ paddingTop: 50, fontFamily: 'Inter_500Medium', paddingLeft: 55, color: '#f7f7f7' }}>Informações pessoais</Text>

                            <View style={{ paddingTop: 20 }}>
                                <Text style={{ fontFamily: 'Inter_500Medium', paddingLeft: 15, color: '#f7f7f7' }} >idade</Text>
                                <TextInput style={styles.inputTextStyle} numeric keyboardType={'numeric'} onChangeText={(text) => props.setNovoUsuarioIdade(text)} ></TextInput>
                            </View>
                            <View style={{ paddingTop: 20 }}>
                                <Text style={{ fontFamily: 'Inter_500Medium', paddingLeft: 15, color: '#f7f7f7' }}>Estado civil</Text>
                                <View style={styles.inputPickerStyle}>
                                    <Picker style={{ color: 'white' }} dropdownIconColor='white'
                                        selectedValue={props.novoUsuarioEstadoCivil}
                                        onValueChange={(value, index) => {
                                            props.setNovoUsuarioEstadoCivil(value)
                                        }}>
                                        <Picker.Item label="Selecione"></Picker.Item>
                                        <Picker.Item label="Solteiro(a)" value="Solteiro(a)"></Picker.Item>
                                        <Picker.Item label="Casado(a)" value="Casado(a)"></Picker.Item>
                                        <Picker.Item label="Separado(a)" value="Separado(a)"></Picker.Item>
                                        <Picker.Item label="Divorciado(a)" value="Divorciado(a)"></Picker.Item>
                                        <Picker.Item label="Viúvo(a)" value="Viúvo(a)"></Picker.Item>
                                    </Picker>
                                </View>
                            </View>

                            <Text style={{ paddingTop: 50, fontFamily: 'Inter_500Medium', paddingLeft: 75, color: '#f7f7f7' }}>Perfil da criança</Text>

                            <Text style={{ paddingTop: 25, fontFamily: 'Inter_500Medium', paddingLeft: 15, color: '#f7f7f7' }}>Sexo</Text>

                            <View style={styles.inputPickerStyle}>
                                <Picker style={{ color: 'white' }} dropdownIconColor='white'
                                    selectedValue={props.novoUsuarioPefilCriancaSexo}
                                    onValueChange={(value, index) => {
                                        props.setNovoUsuarioPefilCriancaSexo(value)
                                    }}>
                                    <Picker.Item label="Selecione"></Picker.Item>
                                    <Picker.Item label="Menino" value="Menino"></Picker.Item>
                                    <Picker.Item label="Menina" value="Menina"></Picker.Item>
                                </Picker>
                            </View>

                            <Text style={{ color: '#f7f7f7', paddingTop: 25, fontFamily: 'Inter_500Medium', paddingLeft: 15 }}>Idade</Text>
                            <View style={{ paddingTop: 15, paddingLeft: 15 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row', width: '40%' }}>
                                        {
                                            idade_0_1 ?
                                                <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_0_1(false)}>
                                                    <Text style={{ textAlign: 'center', color: '#f7f7f7', fontFamily: 'Inter_700Bold', fontSize: 20 }}>X</Text>
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_0_1(true)}>
                                                    <Text style={{ textAlign: 'center', color: '#f7f7f7', fontFamily: 'Inter_700Bold', fontSize: 20 }}></Text>
                                                </TouchableOpacity>
                                        }
                                        <Text style={{ color: '#f7f7f7', paddingTop: 7 }}>0~1 ano</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '40%' }}>
                                        {
                                            idade_1_3 ?
                                                <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_1_3(false)}>
                                                    <Text style={{ textAlign: 'center', color: '#f7f7f7', fontFamily: 'Inter_700Bold', fontSize: 20 }}>X</Text>
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_1_3(true)}>

                                                </TouchableOpacity>
                                        }
                                        <Text style={{ color: '#f7f7f7', paddingTop: 7 }}>1~3 anos</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row', width: '40%' }}>
                                        {
                                            idade_3_5 ?
                                                <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_3_5(false)}>
                                                    <Text style={{ textAlign: 'center', color: '#f7f7f7', fontFamily: 'Inter_700Bold', fontSize: 20 }}>X</Text>
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_3_5(true)}>

                                                </TouchableOpacity>
                                        }
                                        <Text style={{ paddingTop: 7, fontFamily: 'Inter_500Medium', color: '#f7f7f7' }}>3~5 anos</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '40%' }}>
                                        {
                                            idade_5_10 ?
                                                <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_5_10(false)}>
                                                    <Text style={{ textAlign: 'center', color: '#f7f7f7', fontFamily: 'Inter_700Bold', fontSize: 20 }}>X</Text>
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_5_10(true)}>

                                                </TouchableOpacity>
                                        }
                                        <Text style={{ paddingTop: 7, fontFamily: 'Inter_500Medium', color: '#f7f7f7' }}>5~10 anos</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flexDirection: 'row', width: '40%' }}>
                                        {
                                            idade_10_15 ?
                                                <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_10_15(false)}>
                                                    <Text style={{ textAlign: 'center', color: '#f7f7f7', fontFamily: 'Inter_700Bold', fontSize: 20 }}>X</Text>
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_10_15(true)}>

                                                </TouchableOpacity>
                                        }
                                        <Text style={{ paddingTop: 7, fontFamily: 'Inter_500Medium', color: '#f7f7f7' }}>10~15 anos</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '40%' }}>
                                        {
                                            idade_15_18 ?
                                                <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_15_18(false)}>
                                                    <Text style={{ textAlign: 'center', color: '#f7f7f7', fontFamily: 'Inter_700Bold', fontSize: 20 }}>X</Text>
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_15_18(true)}>

                                                </TouchableOpacity>
                                        }
                                        <Text style={{ paddingTop: 7, fontFamily: 'Inter_500Medium', color: '#f7f7f7' }}>15~18 anos</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: '80%', marginTop: 15, marginBottom: 15, justifyContent: 'center' }}>
                                <Button title="Cadastrar" onPress={() => validarCadastro()}></Button>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(17,69,91)'
    },
    headerTela: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 99,
        borderBottomWidth: 2,
        borderColor: '#f7f7f7',
        backgroundColor: 'rgb(17,69,91)'

    },
    inputTextStyle: {
        width: '90%',
        height: 40,
        borderWidth: 1,
        borderRadius: 50,
        paddingLeft: 30,
        color: '#f7f7f7',
        borderColor: '#f7f7f7'
    },
    inputPickerStyle: {
        width: '90%',
        height: 40,
        borderWidth: 1,
        borderRadius: 50,
        paddingLeft: 20,
        color: '#f7f7f7',
        borderColor: '#f7f7f7',
        justifyContent: 'center'
    },
    btnVoltar: {
        position: 'absolute',
        left: 20
    },
    checkBox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        top: 7,
        borderColor: '#f7f7f7',
        justifyContent: 'center',
        marginRight: 10

    }

});
