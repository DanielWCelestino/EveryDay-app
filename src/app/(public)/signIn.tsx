import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../components/Button";
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
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                />

                <Text style={styles.subTitle}>Senha:</Text>
                <TextInput
                    placeholder="Senha"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />


            </View>

            <Button
                buttonText="Entrar"
                onPress={signIn}
            />

            <View style={styles.messagem}>
                <Text style={styles.novo}>Você é novo por aqui?</Text>

                <TouchableOpacity onPress={()=>router.push("/cadastro")}>
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
        paddingLeft: 18,
        paddingRight: 18,
    },
    header: {
        top: '5%',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 26,
        marginTop: 32,
    },
    messagem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        top: 250,
    },
    containerform: {
        top: '20%',
        justifyContent: 'center',
    },
    novo: {
        color: '#fff',
        fontSize: 18,
    },
    cadastre: {
        color: '#41688C',
        fontSize: 18,
    },
    input: {
        color: '#fff',
        height: 40,
        width: 380,
        fontSize: 18,
        marginBottom: 12,
        borderBottomWidth: 1,
        borderColor: '#AABCD0',
    },
    subTitle: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 15,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        marginTop: 10,
    },
});