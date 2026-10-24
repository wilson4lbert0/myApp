import { useState } from "react";
import { Image, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Platform, Alert} from "react-native";

import { Input } from "../components/input";
import { Button } from "../components/Button";
import { Link } from "expo-router";

export default function Index() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignIn() {
        if(!email.trim() || !password.trim()){
            return Alert.alert("Entrar", "Preencha o email e a senha para entrar")
        } 
        Alert.alert("Bem-vindo", `Login realizado com: ${email}`) 
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}
        behavior={Platform.select({ios: "padding", android: "height"})}
        > 

        <ScrollView contentContainerStyle={{ flexGrow: 1 }} 
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        >
        <View style={styles.container}>
            <Image
                source={require("../assets/img1.png")}
                style={styles.illustration}
            />
            <Text style={styles.title}>Entrar </Text>
            <Text style={styles.subtitle}>Acesse sua conta com email e senha</Text>

            <View style={styles.form}>
                <Input 
                placeholder="Email" 
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)} 
                //onChangeText={console.log}
                //onChangeText={(text) => console.log(text)}
                />

                <Input 
                placeholder="Senha" 
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                />

                <Button label="Entrar" onPress={handleSignIn} />
            </View>
            <Text style={styles.footerText}>
                Não tem uma conta? {""}
                <Link href="/singup" style={styles.footerlink}>
                Cadastre-se aqui.
                </Link> 
            </Text>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD',
        padding: 32,
    },
    illustration: {
        width: "100%",
        height: 330,
        resizeMode: 'contain',
        marginTop: 62,
    },
    title: {
        fontSize: 32,
        fontWeight: 900,
    },
    subtitle: {
        fontSize: 16,
    },

    form: {
        marginTop: 24,
        gap: 12
    },
    footerText: {
        textAlign: "center",
        marginTop: 24,
        color: "#585860",
    },
    footerlink: {
        color: '#032ad7',
        fontWeight: 700, 
    }

})

