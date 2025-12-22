import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

type AuthState = {
    isLoggedIn: boolean
    isReady: Boolean
    signIn: () => void
    signOut: () => void
}

const AUTH_STOREGE_KEY = "@EveryDay:auth-state"

export const AuthContext = createContext<AuthState>({} as AuthState)

export function AuthProvider({ children }: PropsWithChildren) {
    const [isLoggedIn, setIsloggedIn] = useState(false)
    const [isReady, setIsReady] = useState(false)
    async function storageState(newState: { isLoggedIn: boolean }) {
        try {
            await AsyncStorage.setItem(AUTH_STOREGE_KEY, JSON.stringify(newState))
        } catch (error) {
            console.log("ERROR_SET_STORAGE_AUTH:", error)
        }

    }

    function signIn() {
        setIsloggedIn(true)
        storageState({ isLoggedIn: true })
        router.replace("/")
    }

    function signOut() {
        setIsloggedIn(false)
        storageState({ isLoggedIn: false })
        router.replace("/(public)/signIn")
    }


    useEffect(() => {
        async function loadStorageState() {
            try {
                const storedState = await AsyncStorage.getItem(AUTH_STOREGE_KEY)
                const state = storedState ? JSON.parse(storedState) : null
                console.log("STORAGE =>", state)
                setIsloggedIn(state?.isLoggedIn ?? false)
            } catch (error) {
                console.log("ERROR_SET_STORAGE_AUTH:", error)
                setIsloggedIn(false)
            }finally{
                setIsReady(true)
            }
        }
        loadStorageState()
    }, [])

    return (
        <AuthContext.Provider value={{ isLoggedIn, signIn, signOut, isReady}}>
            {children}
        </AuthContext.Provider>
    )
}