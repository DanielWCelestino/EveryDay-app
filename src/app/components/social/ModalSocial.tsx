import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

type ModalSocialProps = {
    visible: boolean;
    onClose: () => void;
    onAdd: (data: {
        title: string;
        subtitle?: string;
        time: number;
        icon: keyof typeof Ionicons.glyphMap;
    }) => void;
};

export function ModalSocial({ visible, onClose, onAdd }: ModalSocialProps) {
    const [title, setTitle] = useState("Encontro social");
    const [subtitle, setSubtitle] = useState("");
    const [time, setTime] = useState(30);

    function handleSave() {
        onAdd({
            title,
            subtitle: subtitle || "Sessão social registrada",
            time,
            icon: "people",
        });

        // reset simples
        setTitle("Encontro social");
        setSubtitle("");
        setTime(30);

        onClose();
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Nova sessão social</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Ionicons name="close" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    {/* Tipo */}
                    <Text style={styles.label}>Tipo de interação</Text>
                    <View style={styles.typeRow}>
                        {["Amigos", "Família", "Evento", "Outro"].map((item) => (
                            <TouchableOpacity
                                key={item}
                                style={[
                                    styles.typeButton,
                                    title === item && styles.typeButtonActive,
                                ]}
                                onPress={() => setTitle(item)}
                            >
                                <Text style={styles.typeText}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Comentário */}
                    <Text style={styles.label}>Comentário (opcional)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: café com João e Ana"
                        placeholderTextColor="#777"
                        value={subtitle}
                        onChangeText={setSubtitle}
                    />

                    {/* Tempo */}
                    <Text style={styles.label}>Tempo dedicado</Text>
                    <View style={styles.timeRow}>
                        {[15, 30, 45, 60].map((t) => (
                            <TouchableOpacity
                                key={t}
                                style={[
                                    styles.timeButton,
                                    time === t && styles.timeButtonActive,
                                ]}
                                onPress={() => setTime(t)}
                            >
                                <Text style={styles.timeText}>{t} min</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Botão */}
                    <TouchableOpacity
                        style={[styles.saveButton, { backgroundColor: "#f2941f" }]}
                        onPress={handleSave}
                    >
                        <Text style={styles.saveText}>Adicionar sessão</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}





const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "flex-end",
    },

    container: {
        backgroundColor: "#1C1C1E",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },

    headerTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },

    label: {
        color: "#a7a7a7ff",
        fontSize: 14,
        marginTop: 16,
        marginBottom: 8,
    },

    typeRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },

    typeButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        backgroundColor: "#2A2A2E",
    },

    typeButtonActive: {
        backgroundColor: "#f2941f",
    },

    typeText: {
        color: "#fff",
        fontSize: 14,
    },

    input: {
        backgroundColor: "#2A2A2E",
        borderRadius: 10,
        padding: 12,
        color: "#fff",
    },

    timeRow: {
        flexDirection: "row",
        gap: 8,
        marginTop: 4,
    },

    timeButton: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 20,
        backgroundColor: "#2A2A2E",
    },

    timeButtonActive: {
        backgroundColor: "#f2941f",
    },

    timeText: {
        color: "#fff",
        fontSize: 14,
    },

    saveButton: {
        marginTop: 24,
        paddingVertical: 14,
        borderRadius: 14,
        alignItems: "center",
    },

    saveText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },

});
