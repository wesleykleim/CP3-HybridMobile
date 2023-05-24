import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function ListarScreen({navigation}) {
    return(
        <View style={styles.container}>
           <Text style={styles.title}>Lista</Text>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt} onPress={() => navigation.navigate('Login')}>Sair</Text>
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
