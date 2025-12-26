import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";





export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/ed.png")}
          style={{ width: 365, height: 230 }}
        />
      </View>

      <View style={styles.containerform}>
        <Text style={styles.subTitle}>Nome:</Text>
        <TextInput
          placeholder="Nome"
          placeholderTextColor={"#c7c7c7ff"}
          value={nome}
          onChangeText={setNome}
          autoCapitalize="none"
          style={styles.input}
        />

        <Text style={styles.subTitle}>Email:</Text>
        <TextInput
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor={"#c7c7c7ff"}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          style={styles.input}
        />

        <Text style={styles.subTitle}>Senha:</Text>
        <TextInput
          placeholder="Senha"
          placeholderTextColor={"#c7c7c7ff"}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          style={styles.input}
        />

        <Text style={styles.subTitle}>Confirme a Senha:</Text>
        <TextInput
          placeholder="Confirme sua senha"
          placeholderTextColor={"#c7c7c7ff"}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/questionario")}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonGoogle} onPress={() => console.log("Entrar com a conta google foi acionado")}>
        <Text style={styles.buttonTextGoogle}>Cadastar com o Google</Text>
      </TouchableOpacity>


      <View style={styles.messagem}>
        <Text style={styles.novo}>Já tem cadastro?</Text>

        <TouchableOpacity onPress={() => router.push("/signIn")}>
          <Text style={styles.cadastre}>Entrar</Text>
        </TouchableOpacity>
      </View>

    </View>



  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  header: {
    top: '5%',
    alignItems: 'center',
    width: "100%"
  },
  containerform: {
    top: '3%',
    padding: 12,
    justifyContent: 'center',
    width: "100%",

  },
  input: {
    color: '#fff',
    height: 50,
    width: "100%",
    fontSize: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
    borderRadius: 50,
    backgroundColor: "#6d6d6dff",

  },
  subTitle: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  button: {
    top: "4%",
    width: '80%',
    height: 55,
    padding: 10,
    backgroundColor: '#01A5B1',
    borderRadius: 25,
    marginBottom: "10%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonGoogle: {
    width: '80%',
    height: 55,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextGoogle: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  cadastre: {
    textAlign: "left",
    color: '#41688C',
    fontSize: 18,
  },
  messagem: {
    gap: 8,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  novo: {
    color: '#fff',
    fontSize: 18,
  },
});