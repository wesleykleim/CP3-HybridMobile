import { TouchableOpacity, Text, View, StyleSheet, TextInput } from "react-native";

export default function CadastrarScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cadastrar</Text>
            <View style={styles.separator} />
            <TextInput placeholder="Username" style={styles.input}/>
            <TextInput placeholder="Email" style={styles.input}/>
            <TextInput placeholder="Nome Completo" style={styles.input}/>
            <TextInput placeholder="Password" style={styles.input}/>
            <TextInput placeholder="Confirm Password" style={styles.input}/>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn}>
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