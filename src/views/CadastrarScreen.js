import { TouchableOpacity, Text, View, StyleSheet, TextInput } from "react-native";
import React, { useState, } from 'react';

export default function CadastrarScreen({navigation}) {

    const [username, setUsername] = useState ('');
    const [email, setEmail] = useState ('');
    const [nomeCompleto, setNomeCompleto] = useState ('');
    const [password, setPassword] = useState ('');
    const [confirmPassword, setConfirmPassword] = useState ('');

    const cadastrar = async () =>  {
        const response = await fetch('http://profkaz-api.keepinvest.com.br/user/sign-up', {
            method: 'POST',
            headers: {
                
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                nomeCompleto: nomeCompleto,
                password: password,
                confirmPassword: confirmPassword,
            })
        });
        
        if(response.status == 200) {
            alert("Cadastrado com sucesso!")
            navigation.goBack('Login')
        } else {
            alert("Erro ao fazer o cadastro")
        }

    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cadastrar</Text>
            <View style={styles.separator} />
            <TextInput placeholder="Username" style={styles.input} value={ username } onChangeText={(value) => setUsername(value)}/>
            <TextInput placeholder="Email" style={styles.input} value={ email } onChangeText={(value) => setEmail(value)}/>
            <TextInput placeholder="Nome Completo" style={styles.input} value={ nomeCompleto } onChangeText={(value) => setNomeCompleto(value)}/>
            <TextInput placeholder="Password" style={styles.input} value={ password } onChangeText={(value) => setPassword(value)}/>
            <TextInput placeholder="Confirm Password" style={styles.input} value={ confirmPassword } onChangeText={(value) => setConfirmPassword(value)}/>
            <TouchableOpacity onPress={()=>cadastrar()} style={styles.btn}>
                <Text style={styles.txt}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
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
        color: '#FFFFFF',
    }
})