import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
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
  if (!fontsLoaded) {
    return (<AppLoading></AppLoading>)
  } else {
    if (tela == 'inicio') {
      return (
        <View style={styles.container}>
          <StatusBar hidden />
          <View style={{ alignItems: 'center' }}>
            <View style={{ justifyContent: 'center', width: 150, height: 150, borderWidth: 1 }}>
              <Text style={{ textAlign: 'center' }}>Logo</Text>
            </View>

            <View style={{ alignItems: 'center', paddingTop: 50 }}>
              <TextInput value="login" style={{ width: 250, height: 40, borderWidth: 1, marginTop: 15, paddingLeft: 5, borderRadius: 25 }}></TextInput>
              <TextInput value="senha" style={{ width: 250, height: 40, borderWidth: 1, marginTop: 15, paddingLeft: 5, borderRadius: 25 }}></TextInput>
              <View style={{ width: 100, paddingTop: 25 }}>
                <TouchableOpacity style={{ width: '100%', backgroundColor: 'black', height: 30, borderRadius: 25 }} onPress={() => setTela('Trilha')}>
                  <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>Login</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={{ paddingTop: 50 }} onPress={()=>setTela('NovaSenha')}>
                <Text style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>Esqueci minha senha</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setTela('cadastro')} style={{ paddingTop: 10 }}>
                <Text style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>Novo usuário</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
    else if (tela == 'cadastro') {
      return (
        <Cadastro tela={tela} setTela={setTela}></Cadastro>
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
    else if(tela =='NovaSenha'){
      return(
        <NovaSenha tela={tela} setTela={setTela}></NovaSenha>
      )
    }
    else if(tela == 'Perfilusuario'){
      return(
        <Perfilusuario tela={tela} setTela={setTela}></Perfilusuario>
      )
    }
    else if(tela =='DicasCulturais'){
      return(
        <DicasCulturais tela={tela} setTela={setTela} ></DicasCulturais>
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
