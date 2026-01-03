import React from "react";
import { StyleSheet, Text, View } from "react-native";



interface AreaBoxProps {
    title: string;
    temp: number;
    text: string;
    icon: React.ReactNode;

}

export function BoxProfissional({ title, text, temp, icon }: AreaBoxProps) {
    return (

        <View style={{ flexDirection: "row", gap: 12, marginTop: 12 }}>
            <View style={styles.box}>
                <Text style={styles.textBoxTitle}>{title}</Text>
                <Text style={styles.textBoxTemp}>{temp}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={styles.iconContainer}>{icon}</View>
                    <Text style={styles.textBox}>{text}</Text>
                </View>
            </View>
        </View>





    );
}

const styles = StyleSheet.create({
    box: {
        width: 135,
        height: 80,
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#222222ff",
        justifyContent: "center",
        alignItems: "center"
    },
    textBoxTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    textBoxTemp: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },
    textBox: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold"
    },
    iconContainer: {
        width: 30,
        height: 30,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
});
