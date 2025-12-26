import { Stack } from "expo-router";

export default function PublicLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" options={{ headerShown: false, animation:"none"}}/>
      <Stack.Screen name="Cadastro" options={{ headerShown: false, animation:"none"}}/>

    </Stack>
  );
}
