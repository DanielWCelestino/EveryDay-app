import { Redirect, Stack } from "expo-router";
import { ActivityIndicator } from "react-native";
import { useAuth } from "../hooks/useAuth";



export default function ProtectedLayout() {
    const { isLoggedIn, isReady } = useAuth()

    if (!isReady) {
        return <ActivityIndicator style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />
    }

    if (!isLoggedIn) {
        return <Redirect href="/(public)/signIn" />
    }

    return (
        <Stack screenOptions={{ headerShown: false }}>

            <Stack.Screen name="index" options={{ title: "home" }} />
        </Stack>
    )
}