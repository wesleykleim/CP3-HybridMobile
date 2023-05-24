import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.separator} />
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
        <TouchableOpacity onPress={() => navigation.navigate('Lista')} style={styles.btn}>
            <Text style={styles.txt}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.btn}>
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
    color: '#FFFFFF',
  }
});
