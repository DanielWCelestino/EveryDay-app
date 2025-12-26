import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useAuth } from "../hooks/useAuth";

type Area = "intelectual" | "profissional" | "social" | "fisico";

export default function Questionnaire() {
    const { signIn } = useAuth();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedArea, setSelectedArea] = useState<Area | null>(null);
    
    const [areaAnswers, setAreaAnswers] = useState<Record<Area, number | null>>({
        intelectual: null,
        profissional: null,
        social: null,
        fisico: null,
    });
    const respondidaIntelectual = areaAnswers.intelectual !== null;
    const respondidaProfissional = areaAnswers.profissional !== null;
    const respondidaSocial = areaAnswers.social !== null;
    const respondidaFisico = areaAnswers.fisico !== null;
    const todasRespondidas = Object.values(areaAnswers).every(
  (value) => value !== null
);
    
    const perguntas: Record<Area, string[]> = {
        intelectual: [
            "Tenho me dedicado pouco",
            "Faço esporadicamente",
            "Dedico algum tempo, mas posso melhorar",
            "Tenho uma rotina sólida de aprendizado",
        ],
        profissional: [
            "Dedico pouco tempo ao meu trabalho",
            "Dedico um tempo moderado ao meu trabalho",
            "Dedico um tempo considerável ao meu trabalho",
            "Estou 100% focado no meu trabalho",
        ],
        social: [
            "Não tenho me preocupado com meus relacionamentos",
            "Raramente penso em me socializar",
            "Dedico um tempo médio",
            "Tenho tempo para meus relacionamentos",
        ],
        fisico: [
            "Nunca me exercito",
            "Me cuido bem pouco",
            "Faço atividades físicas regularmente",
            "Tenho rotina sólida de exercícios",
        ],
    };

    function abrirModal(area: Area) {
        setSelectedArea(area);
        setIsModalVisible(true);
    }

    function fecharModal() {
        setIsModalVisible(false);
    }

    function calcularHoras(resposta: number) {
        const horas = [4, 3, 2, 1];
        return horas[resposta] ?? 0;
    }

    function selecionarOpcao(index: number) {
        if (!selectedArea) return;

        const horas = calcularHoras(index);

        setAreaAnswers((prev) => ({
            ...prev,
            [selectedArea]: horas,
        }));

        fecharModal();
    }

    function renderPerguntas() {
        if (!selectedArea) return null;

        return perguntas[selectedArea].map((pergunta, index) => (
            <TouchableOpacity
                key={index}
                style={styles.optionButton}
                onPress={() => selecionarOpcao(index)}
            >
                <Text style={styles.optionText}>{pergunta}</Text>
            </TouchableOpacity>
        ));
    }

    function finalizarQuestionario() {
        const todasRespondidas = Object.values(areaAnswers).every(
            (value) => value !== null
        );

        if (!todasRespondidas) {
            alert("Responda todas as áreas antes de continuar.");
            return;
        }

        // futuramente: salvar no banco
        signIn();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("@/../assets/images/ed.png")}
                    style={{ width: 365, height: 230 }}
                />
            </View>
            <Text style={styles.title}>
                Responda o questionário para definirmos seu foco
            </Text>

            <TouchableOpacity
                style={[
                    styles.button,
                    respondidaIntelectual && styles.buttonCompleted,
                ]}
                onPress={() => abrirModal("intelectual")}
            >
                <Ionicons
                    name={respondidaIntelectual ? "checkmark-circle" : "book"}
                    size={32}
                    color={respondidaIntelectual ? "#4CAF50" : "#4CAF50"}
                />
                <Text style={styles.buttonText}>Área Intelectual</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={[
                    styles.button,
                    respondidaProfissional && styles.buttonCompleted,
                ]}
                onPress={() => abrirModal("profissional")}
            >
                <Ionicons
                    name={respondidaProfissional ? "checkmark-circle" : "briefcase"}
                    size={32}
                    color={respondidaProfissional ? "#4CAF50" : "#2196F3"}
                />
                <Text style={styles.buttonText}>Área Profissional</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={[
                    styles.button,
                    respondidaSocial && styles.buttonCompleted,
                ]}
                onPress={() => abrirModal("social")}
            >
                <Ionicons
                    name={respondidaSocial ? "checkmark-circle" : "people"}
                    size={32}
                    color={respondidaSocial ? "#4CAF50" : "#FF9800"}
                />
                <Text style={styles.buttonText}>Área Social</Text>
            </TouchableOpacity>



            <TouchableOpacity
                style={[
                    styles.button,
                    respondidaFisico && styles.buttonCompleted,
                ]}
                onPress={() => abrirModal("fisico")}
            >
                <Ionicons
                    name={respondidaFisico ? "checkmark-circle" : "fitness"}
                    size={32}
                    color={respondidaFisico ? "#4CAF50" : "#F44336"}
                />
                <Text style={styles.buttonText}>Área Física</Text>
            </TouchableOpacity>



            <TouchableOpacity
                style={[
                    styles.finalButton,
                    !todasRespondidas && styles.finalButtonDisabled,
                ]}
                disabled={!todasRespondidas}
                onPress={finalizarQuestionario}
            >
                <Text style={styles.finalButtonText}>
                    Finalizar
                </Text>
            </TouchableOpacity>

            <Modal transparent visible={isModalVisible} animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Escolha uma opção</Text>

                        {renderPerguntas()}

                        <View style={{ alignItems: "center" }}>
                            <TouchableOpacity style={styles.closeButton} onPress={fecharModal}>
                                <Text style={styles.closeButtonText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    },
    header: {
        marginTop: -50,
        alignItems: 'center',
        width: "100%",
    },
    title: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#222",
        borderRadius: 12,
        padding: 15,
        width: "90%",
        justifyContent: "center",
        marginVertical: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        marginLeft: 12,
    },
    finalButton: {
        marginTop: 25,
        backgroundColor: "#01A5B1",
        padding: 15,
        borderRadius: 25,
        width: "80%",
        alignItems: "center",
    },
    finalButtonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "#111",
        padding: 25,
        borderRadius: 12,
        width: "85%",
        justifyContent: "center",
    },
    modalTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    optionButton: {
        backgroundColor: "#333",
        padding: 15,
        borderRadius: 10,
        marginVertical: 6,
    },
    optionText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
    closeButton: {
        width: 150,
        height: 35,
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#333",
        borderRadius: 10
    },
    closeButtonText: {
        color: "#01A5B1",
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonCompleted: {
        borderWidth: 2,
        borderColor: "#4CAF50",
        backgroundColor: "#1A2E1F",
    },

    finalButtonDisabled: {
        opacity: 0.5,
    },
});
