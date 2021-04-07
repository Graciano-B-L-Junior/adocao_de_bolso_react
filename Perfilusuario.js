import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Perfilusuario(props) {

    const atualizar = ()=>{
        let novoUsuarioAtual = {
            nome: novoUsuarioNome,
            email: novoUsuarioEmail,
            senha: novoUsuarioSenha,
            idade: novoUsuarioIdade,
            estadoCivil: estadoCivil,
            perfilCrianca: {
              sexo: sexoCrianca,
              idade: {
                idade_0_1: idade_0_1,
                idade_1_3: idade_1_3,
                idade_3_5: idade_3_5,
                idade_5_10: idade_5_10,
                idade_10_15: idade_10_15,
                idade_15_18: idade_15_18
              }
            }
          }

          console.warn(novoUsuarioAtual)
          let indice;
          const todosUsuarios = props.usuarios
          todosUsuarios.forEach((el,index)=>{
              if(el.email == props.usuarioAtual.email && el.senha == props.usuarioAtual.senha){
                indice=index
              }
          })

          delete todosUsuarios[indice]
          todosUsuarios.push(novoUsuarioAtual)
          props.setUsuarioAtual(novoUsuarioAtual)

          Alert.alert('Usuario Atualizado')
          props.setTela('Trilha')
        
    }
    
    const [idade_0_1, setIdade_0_1] = useState(false)
    const [idade_1_3, setIdade_1_3] = useState(false)
    const [idade_3_5, setIdade_3_5] = useState(false)
    const [idade_5_10, setIdade_5_10] = useState(false)
    const [idade_10_15, setIdade_10_15] = useState(false)
    const [idade_15_18, setIdade_15_18] = useState(false)

    const [estadoCivil, setEstadoCivil] = useState()
    const [sexoCrianca, setSexoCrianca] = useState()

    const [novoUsuarioNome, setNovoUsuarioNome] = useState('')
    const [novoUsuarioEmail, setNovoUsuarioEmail] = useState('')
    const [novoUsuarioSenha, setNovoUsuarioSenha] = useState('')
    const [novoUsuarioIdade, setNovoUsuarioIdade] = useState('')

    useEffect(() => {
        setEstadoCivil(props.usuarioAtual.estadoCivil)
        setSexoCrianca(props.usuarioAtual.perfilCrianca.sexo)
        setIdade_0_1(props.usuarioAtual.perfilCrianca.idade.idade_0_1)
        setIdade_1_3(props.usuarioAtual.perfilCrianca.idade.idade_1_3)
        setIdade_3_5(props.usuarioAtual.perfilCrianca.idade.idade_3_5)
        setIdade_5_10(props.usuarioAtual.perfilCrianca.idade.idade_5_10)
        setIdade_10_15(props.usuarioAtual.perfilCrianca.idade.idade_10_15)
        setIdade_15_18(props.usuarioAtual.perfilCrianca.idade.idade_15_18)
        setNovoUsuarioNome(props.usuarioAtual.nome)
        setNovoUsuarioSenha(props.usuarioAtual.senha)
        setNovoUsuarioIdade(props.usuarioAtual.idade)
        setNovoUsuarioEmail(props.usuarioAtual.email)
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar hidden></StatusBar>
            <View style={styles.headerTela}>
                <TouchableOpacity style={styles.btnVoltar} onPress={() => props.setTela('Trilha')}>
                    <AntDesign name="back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontFamily: 'Inter_700Bold', color: 'black' }}>Perfil de usuário</Text>
            </View>
            <ScrollView>

                <View style={{ padding: 20 }}>
                    <StatusBar hidden />

                    <View style={{ marginLeft: 20, marginTop: 100, width: '100%' }}>
                        <View>
                            <Text style={{ fontFamily: 'Inter_500Medium', color: 'black', textAlign: 'center', paddingRight: 60 }}>Infomações do usuário</Text>
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={{ fontFamily: 'Inter_500Medium', color: 'black', paddingLeft: 15 }}>Nome</Text>
                            <TextInput style={styles.inputTextStyle} onChangeText={(text) => setNovoUsuarioNome(text)}>{novoUsuarioNome}</TextInput>
                        </View>

                        <View style={{ paddingTop: 20 }}>
                            <Text style={{ fontFamily: 'Inter_500Medium', color: 'black', paddingLeft: 15 }}>Email</Text>
                            <TextInput style={styles.inputTextStyle} onChangeText={(text) => setNovoUsuarioEmail(text)}>{novoUsuarioEmail}</TextInput>
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={{ fontFamily: 'Inter_500Medium', color: 'black', paddingLeft: 15 }}>Senha</Text>
                            <TextInput style={styles.inputTextStyle} secureTextEntry={true} onChangeText={(text) => setNovoUsuarioSenha(text)}>{novoUsuarioSenha}</TextInput>
                        </View>

                        <Text style={{ paddingTop: 50, fontFamily: 'Inter_500Medium', paddingLeft: 55, color: 'black' }}>Informações pessoais</Text>

                        <View style={{ paddingTop: 20 }}>
                            <Text style={{ fontFamily: 'Inter_500Medium', paddingLeft: 15, color: 'black' }} >idade</Text>
                            <TextInput style={styles.inputTextStyle} numeric keyboardType={'numeric'} onChangeText={(text) => setNovoUsuarioIdade(text)} >{novoUsuarioIdade}</TextInput>
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={{ fontFamily: 'Inter_500Medium', paddingLeft: 15, color: 'black' }}>Estado civil</Text>
                            <View style={styles.inputPickerStyle}>
                                <Picker style={{ color: 'black' }} dropdownIconColor='black'
                                    selectedValue={estadoCivil}
                                    onValueChange={(value, index) => {
                                        setEstadoCivil(value)
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

                        <Text style={{ paddingTop: 50, fontFamily: 'Inter_500Medium', paddingLeft: 75, color: 'black' }}>Perfil da criança</Text>

                        <Text style={{ paddingTop: 25, fontFamily: 'Inter_500Medium', paddingLeft: 15, color: 'black' }}>Sexo</Text>

                        <View style={styles.inputPickerStyle}>
                            <Picker style={{ color: 'black' }} dropdownIconColor='black'
                                selectedValue={sexoCrianca}
                                onValueChange={(value, index) => {
                                    setSexoCrianca(value)
                                }}>
                                <Picker.Item label="Selecione"></Picker.Item>
                                <Picker.Item label="Menino" value="Menino"></Picker.Item>
                                <Picker.Item label="Menina" value="Menina"></Picker.Item>
                            </Picker>
                        </View>

                        <Text style={{ color: 'black', paddingTop: 25, fontFamily: 'Inter_500Medium', paddingLeft: 15 }}>Idade</Text>
                        <View style={{ paddingTop: 15, paddingLeft: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row', width: '40%' }}>
                                    {
                                        idade_0_1 ?
                                            <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_0_1(false)}>
                                                <Text style={{ textAlign: 'center', color: 'black', fontFamily: 'Inter_700Bold', fontSize: 20 }}>X</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_0_1(true)}>
                                                <Text style={{ textAlign: 'center', color: 'black', fontFamily: 'Inter_700Bold', fontSize: 20 }}></Text>
                                            </TouchableOpacity>
                                    }
                                    <Text style={{ color: 'black', paddingTop: 7 }}>0~1 ano</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '40%' }}>
                                    {
                                        idade_1_3 ?
                                            <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_1_3(false)}>
                                                <Text style={{ textAlign: 'center', color: 'black', fontFamily: 'Inter_700Bold', fontSize: 20 }}>X</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_1_3(true)}>

                                            </TouchableOpacity>
                                    }
                                    <Text style={{ color: 'black', paddingTop: 7 }}>1~3 anos</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row', width: '40%' }}>
                                    {
                                        idade_3_5 ?
                                            <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_3_5(false)}>
                                                <Text style={{ textAlign: 'center', color: 'black', fontFamily: 'Inter_700Bold', fontSize: 20 }}>X</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_3_5(true)}>

                                            </TouchableOpacity>
                                    }
                                    <Text style={{ paddingTop: 7, fontFamily: 'Inter_500Medium', color: 'black' }}>3~5 anos</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '40%' }}>
                                    {
                                        idade_5_10 ?
                                            <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_5_10(false)}>
                                                <Text style={{ textAlign: 'center', color: 'black', fontFamily: 'Inter_700Bold', fontSize: 20 }}>X</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_5_10(true)}>

                                            </TouchableOpacity>
                                    }
                                    <Text style={{ paddingTop: 7, fontFamily: 'Inter_500Medium', color: 'black' }}>5~10 anos</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row', width: '40%' }}>
                                    {
                                        idade_10_15 ?
                                            <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_10_15(false)}>
                                                <Text style={{ textAlign: 'center', color: 'black', fontFamily: 'Inter_700Bold', fontSize: 20 }}>X</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_10_15(true)}>

                                            </TouchableOpacity>
                                    }
                                    <Text style={{ paddingTop: 7, fontFamily: 'Inter_500Medium', color: 'black' }}>10~15 anos</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '40%' }}>
                                    {
                                        idade_15_18 ?
                                            <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_15_18(false)}>
                                                <Text style={{ textAlign: 'center', color: 'black', fontFamily: 'Inter_700Bold', fontSize: 20 }}>X</Text>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity style={styles.checkBox} onPress={() => setIdade_15_18(true)}>

                                            </TouchableOpacity>
                                    }
                                    <Text style={{ paddingTop: 7, fontFamily: 'Inter_500Medium', color: 'black' }}>15~18 anos</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: '80%', marginTop: 15, marginBottom: 15, justifyContent: 'center' }}>
                            <Button title="Atualizar" onPress={()=>atualizar()}></Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
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
        borderBottomWidth: 3,
        borderColor: 'rgb(247,139,13)',
        backgroundColor: '#f7f7f7'

    },
    inputTextStyle: {
        width: '90%',
        height: 40,
        borderWidth: 1,
        borderRadius: 50,
        paddingLeft: 30,
        color: 'black',
        borderColor: 'black'
    },
    inputPickerStyle: {
        width: '90%',
        height: 40,
        borderWidth: 1,
        borderRadius: 50,
        paddingLeft: 20,
        color: 'black',
        borderColor: 'black',
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
        borderColor: 'black',
        justifyContent: 'center',
        marginRight: 10

    }

});
