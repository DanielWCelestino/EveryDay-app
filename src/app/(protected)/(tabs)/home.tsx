import { useAuth } from "@/app/hooks/useAuth";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
      const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏠 Home</Text>
       <Button title="Sair" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
