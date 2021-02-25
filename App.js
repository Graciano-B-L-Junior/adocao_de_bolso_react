import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View>
        <Text style={{ textAlign: 'center' }}>Logo</Text>
        <View style={{alignItems:'center'}}>
          <View style={{ width: '30%', paddingTop: 50 }}>
            <Button title="Login" style={styles.button}></Button>
          </View>

          <TouchableOpacity style={{paddingTop:50}}>
            <Text style={{borderBottomWidth:1,borderBottomColor:'black'}}>Esqueci minha senha</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{paddingTop:50}}>
            <Text style={{borderBottomWidth:1,borderBottomColor:'black'}}>Novo usuário</Text>
          </TouchableOpacity>
        </View>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  button: {

  }
});
