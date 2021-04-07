import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Cadastro from './Cadastro';
import Contato from './Contato';
import Trilha from './Trilha';
import MensagemEnviada from './MensagemEnviada';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import NovaSenha from './NovaSenha';
import Perfilusuario from './Perfilusuario';
import DicasCulturais from './DicasCulturais';
import PerguntasFrequentes from './PerguntasFrequentes';
import Passo1 from './passosTrilha/Passo1';
import Passo2 from './passosTrilha/Passo2';
import Passo3 from './passosTrilha/Passo3';
import Passo4 from './passosTrilha/Passo4';
import Passo5 from './passosTrilha/Passo5';
import Passo6 from './passosTrilha/Passo6';
import Passo7 from './passosTrilha/Passo7';
import Passo8 from './passosTrilha/Passo8';
import Passo9 from './passosTrilha/Passo9';




export default function App() {

  
  //função que pega todos os usuários
  const getUsuarios = async () => {
    try {
      const value = await AsyncStorage.getItem('usuarios')

      if(value == null){
        await AsyncStorage.setItem('usuarios',JSON.stringify(usuarios))

      }else{
        const result = JSON.parse(value)
        setUsuarios(result)

      } 
    } catch (e) {

    }
  }
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  const [tela, setTela] = useState('inicio')
  const [usuarios, setUsuarios] = useState([
    {
      nome: 'Graciano',
      email: 'graciano@gmail.com',
      senha: '123',
      idade: '24',
      estadoCivil: 'Solteiro',
      perfilCrianca: {
        sexo: 'Masculino',
        idade: {
          idade_0_1: false,
          idade_1_3: false,
          idade_3_5: false,
          idade_5_10: false,
          idade_10_15: false,
          idade_15_18: false
        }
      }
    }])
  //hooks para validar as entradas de login
  const [usuario, setUsuario] = useState()
  const [senha, setSenha] = useState()


  const [novoUsuario, setNovoUsuario] = useState(
    {
      nome: '',
      email: '',
      senha: '',
      idade: '',
      estadoCivil: '',
      perfilCrianca: {
        sexo: '',
        idade: {
          idade_0_1: false,
          idade_1_3: false,
          idade_3_5: false,
          idade_5_10: false,
          idade_10_15: false,
          idade_15_18: false
        }
      }
    }
  )

  const [usuarioAtual,setUsuarioAtual] =useState({})

  const [novoUsuarioNome, setNovoUsuarioNome] = useState('')
  const [novoUsuarioEmail, setNovoUsuarioEmail] = useState('')
  const [novoUsuarioSenha, setNovoUsuarioSenha] = useState('')
  const [novoUsuarioIdade, setNovoUsuarioIdade] = useState('')
  const [novoUsuarioEstadoCivil, setNovoUsuarioEstadoCivil] = useState('')
  const [novoUsuarioPefilCriancaSexo, setNovoUsuarioPefilCriancaSexo] = useState('')
  const [novoUsuarioPefilCriancaIdade, setNovoUsuarioPefilCriancaIdade] = useState('')



  function Logar(usuario, senha) {
    const allUsers = usuarios;
    let indice=0;
    let troca = false
    allUsers.forEach((user,index) => {
      if (user.email == usuario && user.senha == senha) {
        indice = index
        setUsuarioAtual(allUsers[indice])
        troca = true
      }
    })
    if (troca) {
      Alert.alert('Usuário logado com sucesso')
      setTela('Trilha')
    } else {
      Alert.alert('Login ou Senha incorretos')
    }

  }
  useEffect(() => {
    getUsuarios();
  },[])
  if (!fontsLoaded) {
    return (<AppLoading></AppLoading>)
  } else {
    if (tela == 'inicio') {
      return (
        <View style={styles.container}>
          <LinearGradient colors={['rgb(247,139,13)', 'rgb(64,129,156)']} start={{ x: 0, y: 0.2 }} style={{ height: '100%', paddingTop: 50 }}>
            <StatusBar hidden />
            <View style={{ alignItems: 'center' }}>
              <View style={{ justifyContent: 'center', width: 200, height: 200 }}>
                <Image source={require('./assets/newIcons/logoAdB.png')} style={{ resizeMode: 'stretch', width: '100%', height: '100%' }}></Image>
              </View>

              <View style={{ alignItems: 'center', paddingTop: 20 }}>
                <TextInput placeholder="usuario" placeholderTextColor="#f7f7f7" onChangeText={text => setUsuario(text)}
                  style={{
                    width: 290, height: 40, borderWidth: 1, marginTop: 15, paddingLeft: 5, borderRadius: 25,
                    borderColor: '#f7f7f7', color: '#f7f7f7', textAlign: 'center'
                  }}></TextInput>
                <TextInput placeholder="senha" placeholderTextColor="#f7f7f7" onChangeText={text => setSenha(text)} secureTextEntry={true}
                  style={{ width: 290, height: 40, borderWidth: 1, marginTop: 15, paddingLeft: 5, borderRadius: 25, borderColor: '#f7f7f7', color: '#f7f7f7', textAlign: 'center' }}></TextInput>
                <View style={{ width: 100, paddingTop: 25 }}>
                  <TouchableOpacity style={{ width: '100%', backgroundColor: 'rgb(247,139,13)', height: 30, borderRadius: 25 }} onPress={() => Logar(usuario, senha)}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>Login</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ paddingTop: 90 }} onPress={() => setTela('NovaSenha')}>
                  <Text style={{ borderBottomWidth: 1, borderBottomColor: '#f7f7f7', color: '#f7f7f7' }}>Esqueci a senha</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setTela('cadastro')} style={{ paddingTop: 10 }}>
                  <Text style={{ borderBottomWidth: 1, borderBottomColor: '#f7f7f7', color: '#f7f7f7' }}>Criar uma conta</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
      );
    }
    else if (tela == 'cadastro') {
      return (
        <Cadastro tela={tela} setTela={setTela}
          novoUsuarioNome={novoUsuarioNome} setNovoUsuarioNome={setNovoUsuarioNome}
          novoUsuarioEmail={novoUsuarioEmail} setNovoUsuarioEmail={setNovoUsuarioEmail}
          novoUsuarioSenha={novoUsuarioSenha} setNovoUsuarioSenha={setNovoUsuarioSenha}
          novoUsuarioIdade={novoUsuarioIdade} setNovoUsuarioIdade={setNovoUsuarioIdade}
          novoUsuarioEstadoCivil={novoUsuarioEstadoCivil} setNovoUsuarioEstadoCivil={setNovoUsuarioEstadoCivil}
          novoUsuarioPefilCriancaSexo={novoUsuarioPefilCriancaSexo} setNovoUsuarioPefilCriancaSexo={setNovoUsuarioPefilCriancaSexo}
          novoUsuarioPefilCriancaIdade={novoUsuarioPefilCriancaIdade} setNovoUsuarioPefilCriancaIdade={setNovoUsuarioPefilCriancaIdade}
          novoUsuario={novoUsuario} setNovoUsuario={setNovoUsuario}
          usuarios={usuarios} setUsuarios={setUsuarios}
        ></Cadastro>
      )
    }
    else if (tela == 'Trilha') {
      return (
        <Trilha tela={tela} setTela={setTela}></Trilha>
      )
    }else if(tela == 'Passo1'){
      return(
        <Passo1 tela={tela} setTela={setTela}></Passo1>
      )
    }
    else if(tela == 'Passo2'){
      return(
        <Passo2 tela={tela} setTela={setTela}></Passo2>
      )
    }
    else if(tela == 'Passo3'){
      return(
        <Passo3 tela={tela} setTela={setTela}></Passo3>
      )
    }
    else if(tela == 'Passo4'){
      return(
        <Passo4 tela={tela} setTela={setTela}></Passo4>
      )
    }
    else if(tela == 'Passo5'){
      return(
        <Passo5 tela={tela} setTela={setTela}></Passo5>
      )
    }
    else if(tela == 'Passo6'){
      return(
        <Passo6 tela={tela} setTela={setTela}></Passo6>
      )
    }
    else if(tela == 'Passo7'){
      return(
        <Passo7 tela={tela} setTela={setTela}></Passo7>
      )
    }
    else if(tela == 'Passo8'){
      return(
        <Passo8 tela={tela} setTela={setTela}></Passo8>
      )
    }
    else if(tela == 'Passo9'){
      return(
        <Passo9 tela={tela} setTela={setTela}></Passo9>
      )
    }
    else if (tela == 'Contato') {
      return (
        <Contato tela={tela} setTela={setTela}></Contato>
      )
    }
    else if (tela == 'MensagemEnviada') {
      return (
        <MensagemEnviada tela={tela} setTela={setTela}></MensagemEnviada>
      )

    }
    else if (tela == 'NovaSenha') {
      return (
        <NovaSenha tela={tela} setTela={setTela}></NovaSenha>
      )
    }
    else if (tela == 'Perfilusuario') {
      return (
        <Perfilusuario usuarioAtual={usuarioAtual} setUsuarioAtual={setUsuarioAtual} tela={tela} setTela={setTela}></Perfilusuario>
      )
    }
    else if (tela == 'DicasCulturais') {
      return (
        <DicasCulturais tela={tela} setTela={setTela} ></DicasCulturais>
      )
    }
    else if (tela == 'PerguntasFrequentes') {
      return (
        <PerguntasFrequentes tela={tela} setTela={setTela} ></PerguntasFrequentes>
      )
    }
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  }
});
