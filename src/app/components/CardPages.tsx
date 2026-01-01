import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface AreaProgressCardProps {
    title: string;
    subTitle: string;
    hour: number;
    minutes: number;
    plannedHours: number;
    percentage: number;
    color: string;
    icon: React.ReactNode;
    onPress?: () => void;
}

export function CardPages({
    title,
    subTitle,
    hour,
    plannedHours,
    minutes,
    percentage,
    color,
    icon,
}: AreaProgressCardProps) {
    return (
        <View style={styles.container}>
            {/* Linha superior*/}
            <View style={styles.topRow}>
                {/* Conteúdo esquerdo */}
                <View style={styles.leftContent}>
                    <View style={styles.header}>
                        <View style={styles.iconContainer}>{icon}</View>

                        <View>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.subtitle}>{subTitle}</Text>
                        </View>
                    </View>
                    <View style={{ width: "100%", height: 1, backgroundColor: "#505050ff", margin: 8 }}></View>

                    <View style={{ flexDirection: "row", gap: 250, width: "100%" }}>
                        <Text style={styles.planned}>
                            {hour}h {minutes} min de {plannedHours}h
                        </Text>
                        <Text style={styles.porcentage}>
                            {percentage}%
                        </Text>
                    </View>

                    <View style={styles.progressBarBackground}>
                        <View
                            style={[
                                styles.progressBarFill,
                                { width: `${percentage}%`, backgroundColor: color },
                            ]}
                        />
                    </View>
                </View>


            </View>


        </View>
    );
}


export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 160,
        padding: 10,
        borderRadius: 16,
        marginVertical: 12,
        backgroundColor: "#1C1C1E",
        justifyContent: "center"
    },

    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    leftContent: {
        flex: 1,
        paddingRight: 16,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },

    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "600",
    },

    subtitle: {
        color: "#A1A1AA",
        fontSize: 18,
    },

    planned: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
    porcentage: {
        color: "#f2941f",
        fontSize: 16,
        fontWeight: "bold"
    }
    ,
    progressBarBackground: {
        height: 6,
        borderRadius: 4,
        marginTop: 8,
        overflow: "hidden",
        backgroundColor: "#2A2A2E",
    },

    progressBarFill: {
        height: "100%",
        borderRadius: 4,
    },

    button: {
        marginTop: 16,
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontWeight: "600",
    },
});
