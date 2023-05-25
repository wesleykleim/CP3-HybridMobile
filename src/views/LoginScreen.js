import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { postLogin, } from '../api/api';
import React, { useState, } from 'react';

export default function LoginScreen({ navigation }) {

  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');

  
  const logar = async () => {


    // const usernameString = JSON.stringify(username)
     
    // const passwordString = JSON.stringify(password) 
    
    const response = await fetch('http://profkaz-api.keepinvest.com.br/login', {
      method: 'POST',
      headers: {
        
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "username": setUsername,
        "password": setPassword,
      })
      


        
      
      
    }
    
    
    );
    if (response.status != 200) {
      console.error(`Erro : ${response.status}`);
      console.log(typeof username, typeof password)
      console.log(response)
      // alert('Login incorreto')


      return;
      
    } else {
      navigation.push('Lista')
    }
    

    // const response = await fetch('http://profkaz-api.keepinvest.com.br/login/' + username);

  }

  // {console.log(username, password)}




  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.separator} />
      <TextInput placeholder="Username" style={styles.input} value={username} 
      onChangeText={(value) => setUsername(value) }
      />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} value={password} onChangeText={(value) => setPassword(value) }/>
        <TouchableOpacity onPress={()=> logar()} style={styles.btn}>
            <Text style={styles.txt}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Cadastro')} style={styles.btn}>
            <Text style={styles.txt}>Cadastrar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    
    
  },
  title: {
    marginTop: 20,
    fontSize: 32,
    
  },
  separator: {
    marginTop: 20,
    borderWidth: 1,
    width: 350,
    
  },
  input: {
    marginTop: 20,
    borderWidth: 2,
    padding: 10,
    width: 300,
  },
  btn: {
    marginTop: 20,
    padding: 10,
    width: 300,
    backgroundColor: '#000000',
    alignItems: "center",
    borderRadius: 5,
    
  },
  txt: {
    color:'red',
  }
});
