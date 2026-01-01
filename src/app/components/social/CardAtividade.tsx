import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export function CardAtividade() {
  return (
    <View style={styles.card}>
      <Ionicons name="people" size={26} color="#f2941f" />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Encontro com amigos</Text>
        <Text style={styles.subtitle}>Café com João e Ana</Text>
      </View>

      <Text style={styles.time}>45 min</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 64,
    paddingHorizontal: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333333ff",
    marginBottom: 12,
  },

  textContainer: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  subtitle: {
    color: "#a7a7a7ff",
    fontSize: 13,
    marginTop: 2,
  },

  time: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
