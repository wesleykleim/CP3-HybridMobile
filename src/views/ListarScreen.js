import { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";

export default function ListarScreen({navigation}) {

    const [lista, setLista] = useState(true)

    const getLista = async ()=> {

        const response = await fetch('http://profkaz-api.keepinvest.com.br/item', {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer TOKEN",
                    'Content-Type': 'application/json',
                },
                
            });

    }
    
    useEffect(()=> {

        getLista();
    }, [])





    return(
        <View style={styles.container}>
            {lista ? <ActivityIndicator/> : (
                <FlatList
                
                keyExtractor={({ id }) => id}
                descricao={({ item }) => (
                  <Text>{id.id}, {item.descricao}</Text>
                )}
              />


            )}



           <Text style={styles.title}>Lista</Text>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt} onPress={() => navigation.replace('Login')}>Sair</Text>
            </TouchableOpacity>
            <Text style={styles.lista}>Exemplo 1</Text>
            <Text style={styles.lista}>Exemplo 2</Text>
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
    btn: {
        marginTop: 20,
        padding: 20,
        width: 300,
        backgroundColor: '#000000',
        alignItems: "center",
        borderRadius: 5,
    },
    txt: {
        color: '#FFFFFF',
    },
    lista: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#D3D3D3',
        width: 300,
        borderRadius: 5,
    }
})
