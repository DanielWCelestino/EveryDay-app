import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CircularProgress } from "./CirculoProgresso";



interface AreaProgressCardProps {
    title: string;
    plannedHours: number;
    spentMinutes: number;
    percentage: number;
    color: string;
    icon: React.ReactNode;
    onPress?: () => void;
}

export function AreaProgressCard({
    title,
    plannedHours,
    spentMinutes,
    percentage,
    color,
    icon,
    onPress,
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
                            <Text style={styles.subtitle}>Progresso semanal</Text>
                        </View>
                    </View>

                    <Text style={styles.planned}>
                        {Math.floor(spentMinutes / 60)}h de {plannedHours}h planejadas
                    </Text>

                    <View style={styles.progressBarBackground}>
                        <View
                            style={[
                                styles.progressBarFill,
                                { width: `${percentage}%`, backgroundColor: color },
                            ]}
                        />
                    </View>
                </View>

                {/* Progresso circular */}
                <CircularProgress
                    percentage={percentage}
                    color={color}
                    icon={icon}
                />
            </View>

            {/* Botão */}
            <TouchableOpacity
                style={[styles.button, { backgroundColor: color }]}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>Iniciar sessão</Text>
            </TouchableOpacity>
        </View>
    );
}


export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1C1C1E",
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
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
        fontSize: 18,
        fontWeight: "600",
    },

    subtitle: {
        color: "#A1A1AA",
        fontSize: 16,
    },

    planned: {
        color: "#E5E7EB",
        marginVertical: 2,
        fontSize: 16
    },

    progressBarBackground: {
        height: 6,
        backgroundColor: "#2A2A2E",
        borderRadius: 4,
        overflow: "hidden",
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
