import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Cadastro() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tela de Cadastro</Text>

      <Button title="Voltar para Login" onPress={() => router.back()} />
    </View>
  );
}
