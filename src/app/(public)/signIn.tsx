import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "../hooks/useAuth";

export default function SignIn() {
    const { signIn } = useAuth();
    const router = useRouter();



    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (

        <View style={styles.container}>
            <StatusBar backgroundColor="#000" barStyle="light-content" />

            <View style={styles.header}>
                <Image
                    source={require('@/../assets/images/ed.png')}
                    style={{ width: 365, height: 230 }}
                />
                <Text style={styles.title}>Bem-Vindo ao ED</Text>
            </View>

            <View style={styles.containerform}>
                <Text style={styles.subTitle}>Email:</Text>
                <TextInput
                    placeholder="Nome de usuário"
                    placeholderTextColor={"#c7c7c7ff"}
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                />

                <Text style={styles.subTitle}>Senha:</Text>
                <TextInput
                    placeholder="Senha"
                    placeholderTextColor={"#c7c7c7ff"}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={signIn}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonGoogle} onPress={() => console.log("Entrar com a conta google foi acionado")}>
                <Text style={styles.buttonTextGoogle}>Entrar com o Google</Text>
            </TouchableOpacity>

            <View style={styles.messagem}>
                <Text style={styles.novo}>Você é novo por aqui?</Text>

                <TouchableOpacity onPress={() => router.push("/cadastro")}>
                    <Text style={styles.cadastre}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
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
    title: {
        color: '#fff',
        fontSize: 26,
        marginTop: 32,
    },
    containerform: {
        top: '8%',
        width: "100%",
        padding: 12,
        justifyContent: 'center',

    },
    input: {
        color: '#fff',
        height: 54,
        width: "100%",
        fontSize: 18,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 34,
        borderRadius: 50,
        backgroundColor: "#6d6d6dff",
    },
    button: {
        top: "10%",
        width: '80%',
        height: 55,
        padding: 10,
        backgroundColor: '#01A5B1',
        borderRadius: 25,
        marginBottom: "28%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    subTitle: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 15,
        fontWeight: 'bold',
        opacity: 0.85
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
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    buttonTextGoogle: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    cadastre: {
        color: '#41688C',
        fontSize: 18,
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        marginTop: 10,
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
}
);