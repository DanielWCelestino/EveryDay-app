import React from "react";
import { StyleSheet, Text, View } from "react-native";


interface AreaBoxProps{
    title:string;
    text:string;
}

export function BoxSocial({title,text}:AreaBoxProps) {
    return (

        <View style={{ flexDirection: "row", gap: 12, marginTop: 12 }}>
            <View style={styles.box}>
                <Text style={styles.textBoxTitle}>{title}</Text>
                <Text style={styles.textBox}>{text}</Text>
                <View style={{ width: "50%", height: 1, backgroundColor: "#505050ff", marginTop: 5 }}></View>
            </View>
        </View>






    );
}

const styles = StyleSheet.create({
  box: {
    width: 135,
    height: 80,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#222222ff",
    justifyContent: "center",
    alignItems: "center"
  },
  textBoxTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  textBox: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold"
  },
});
