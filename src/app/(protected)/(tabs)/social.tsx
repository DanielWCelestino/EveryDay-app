import { CardPages } from "@/app/components/CardPages";
import { BoxSocial } from "@/app/components/social/BoxSocial";
import { CardAtividade } from "@/app/components/social/CardAtividade";
import { ModalSocial } from "@/app/components/social/ModalSocial";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Social() {
  const [modalVisible, setModalVisible] = useState(false);

  // estado das atividades
  const [atividades, setAtividades] = useState<
    {
      title: string;
      subtitle?: string;
      time: number;
      icon: keyof typeof Ionicons.glyphMap;
    }[]
  >([]);

  // A FUNÇÃO FICA AQUI
  function handleAddAtividade(data: {
    title: string;
    subtitle?: string;
    time: number;
    icon: keyof typeof Ionicons.glyphMap;
  }) {
    setAtividades((prev) => [data, ...prev]);
  }
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="black"
      />
      <View style={styles.header}>
        <Ionicons name="people" size={80} color="#f2941f" />
        <Text style={styles.title}> Social</Text>
        <View style={{ width: "40%", height: 1, backgroundColor: "#505050ff" }}></View>
        <Text style={styles.subtitle}>conexões e bem estar social</Text>
      </View>


      <View style={{ flexDirection: "row", gap: 4 }}>

        <BoxSocial
          title="3"
          text="Sessões"
        />

        <BoxSocial
          title="2h 30 min"
          text="Tempo acumulado"
        />

        <BoxSocial
          title="5h"
          text="Meta semanal"
        />
      </View>

      <CardPages
        title="Tempo Social"
        subTitle="Tempo dedicado a interacoes sociais nesta semana"
        plannedHours={5}
        hour={1}
        minutes={10}
        percentage={34}
        color="#f2941f"
        icon={
          <Ionicons name="people" size={42} color="#f2941f" />
        } />

      <View style={{
        padding: 8,
        width: "100%",
        height: "100%",
        backgroundColor: "#1C1C1E",
      }}>
        <Text style={styles.titleAtividade}>Atividade Recentes</Text>
        <Text style={styles.SubTitleAtividade}>Momentos sociais resgistrados</Text>
        <View style={styles.boxAtividade}>

          {atividades.map((item, index) => (
            <CardAtividade
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              time={item.time}
              icon={item.icon}
              onDelete={() =>
                setAtividades((prev) =>
                  prev.filter((_, i) => i !== index)
                )
              }
            />
          ))}


          <TouchableOpacity style={[styles.button, { backgroundColor: "#f2941f" }]} onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>Iniciar sessão Social</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ModalSocial
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={handleAddAtividade} // ligando o modal com o cardAtividade
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: "#000",
  },
  header: {
    width: "100%",
    height: 185,
    paddingTop: 18,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    backgroundColor: "#000"
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#a7a7a7ff",
    fontSize: 14
  },
  box: {
    width: 135,
    height: 80,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#222222ff",
    justifyContent: "center",
    alignItems: "center"
  },
  textBoxTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  textBox: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold"
  },
  boxAtividade: {
    padding: 12,
    width: "100%",

  },
  titleAtividade: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600"
  },
  SubTitleAtividade: {
    color: "#a7a7a7ff",
    fontSize: 14
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
