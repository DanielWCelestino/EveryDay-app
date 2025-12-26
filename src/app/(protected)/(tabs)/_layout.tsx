import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 68,
                    backgroundColor: "#000",
                    borderTopColor: "#222",
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            size={26}
                            color={focused ? "#01A5B1" : "#999"}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="intelectual"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "book" : "book-outline"}
                            size={26}
                            color={focused ? "#01A5B1" : "#999"}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="profissional"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "stats-chart" : "stats-chart-outline"}
                            size={26}
                            color={focused ? "#01A5B1" : "#999"}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="social"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "people" : "people-outline"}
                            size={26}
                            color={focused ? "#01A5B1" : "#999"}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="fisico"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "fitness" : "fitness-outline"}
                            size={26}
                            color={focused ? "#01A5B1" : "#999"}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
