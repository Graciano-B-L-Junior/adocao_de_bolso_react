import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Cadastro from './Cadastro';
import Contato from './Contato';
import Trilha from './Trilha';
import MensagemEnviada from './MensagemEnviada';
import AppLoading from 'expo-app-loading';
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

export default function App() {

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
        idade: '0~1'
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
        idade: ''
      }
    }
  )

  const [novoUsuarioNome, setNovoUsuarioNome] = useState()
  const [novoUsuarioEmail, setNovoUsuarioEmail] = useState()
  const [novoUsuarioSenha, setNovoUsuarioSenha] = useState()
  const [novoUsuarioIdade, setNovoUsuarioIdade] = useState()
  const [novoUsuarioEstadoCivil, setNovoUsuarioEstadoCivil] = useState()
  const [novoUsuarioPefilCriancaSexo, setNovoUsuarioPefilCriancaSexo] = useState()
  const [novoUsuarioPefilCriancaIdade, setNovoUsuarioPefilCriancaIdade] = useState()



  function Logar(usuario, senha) {
    const allUsers = usuarios;
    allUsers.forEach((user) => {
      if (user.email == usuario && user.senha == senha) {
        Alert.alert("Usuário logado com sucesso")
        setTela('Trilha')
        return
      }
      Alert.alert("Usuário ou senha incorretos")
    })
  }
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
        ></Cadastro>
      )
    }
    else if (tela == 'Trilha') {
      return (
        <Trilha tela={tela} setTela={setTela}></Trilha>
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
        <Perfilusuario tela={tela} setTela={setTela}></Perfilusuario>
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
