import React from "react";
import { StyleSheet, Text, View } from "react-native";


interface AreaBoxProps {
    title: number;
    text: string;
    subTtxt?:string
    
    icon: React.ReactNode;
}

export function BoxFisico({ title, text, icon,subTtxt }: AreaBoxProps) {
    return (

        <View style={{ flexDirection: "row", gap: 12, marginTop: 12 }}>
            <View style={styles.box}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={styles.iconContainer}>{icon}</View>
                    <Text style={styles.textBoxTitle}>{text}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent:"center",alignItems: "flex-end",gap:4 }}>
                    <Text style={styles.textBox}>{title}</Text>
                    <Text style={styles.subTextBox}>{subTtxt}</Text>
                </View>
            </View>
        </View>






    );
}

const styles = StyleSheet.create({
    box: {
        width: 135,
        height: 80,
        padding: 18,
        borderRadius: 8,
        backgroundColor: "#222222ff",
        justifyContent: "center",

    },
    iconContainer: {
        width: 30,
        height: 30,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    textBoxTitle: {
        color: "#989b9cff",
        fontSize: 14,
        fontWeight: "bold"
    },
    textBox: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
    subTextBox: {
        color: "#fff",
        fontSize: 16,
    }
});
