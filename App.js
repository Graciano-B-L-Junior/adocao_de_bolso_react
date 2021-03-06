import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import Cadastro from './Cadastro';
import Contato from './Contato';
import Trilha from './Trilha';
import MensagemEnviada from './MensagemEnviada';

export default function App() {

  const [tela, setTela] = useState('inicio')

  if (tela == 'inicio') {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={{ alignItems: 'center' }}>
          <View style={{ justifyContent: 'center', width: 150, height: 150, borderWidth: 1 }}>
            <Text style={{ textAlign: 'center' }}>Logo</Text>
          </View>

          <View style={{ alignItems: 'center', paddingTop: 50 }}>
            <TextInput value="login" style={{ width: 150, height: 50, borderWidth: 1, marginTop: 15, paddingLeft: 5 }}></TextInput>
            <TextInput value="senha" style={{ width: 150, height: 50, borderWidth: 1, marginTop: 15, paddingLeft: 5 }}></TextInput>
            <View style={{ width: 100, paddingTop: 25 }}>
              <Button title="Login" onPress={() => setTela('Trilha')}></Button>
            </View>

            <TouchableOpacity style={{ paddingTop: 50 }}>
              <Text style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setTela('cadastro')} style={{ paddingTop: 50 }}>
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
  else if(tela=='MensagemEnviada'){
    return(
      <MensagemEnviada tela={tela} setTela={setTela}></MensagemEnviada>
    )
    
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
  }
});
