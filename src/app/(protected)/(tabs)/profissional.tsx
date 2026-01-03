import { CardPages } from "@/app/components/CardPages";
import { BoxProfissional } from "@/app/components/profissional/boxProfissional";
import { PostItSection } from "@/app/components/profissional/PostItTarefa";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function Profissional() {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState<string[]>([]);

  const [textoPendente, setTextoPendente] = useState("");
  const [pendentes, setPendentes] = useState<string[]>([]);

  const [textoAndamento, setTextoAndamento] = useState("");
  const [andamento, setAndamento] = useState<string[]>([]);

  const [textoConcluido, setTextoConcluido] = useState("");
  const [concluidos, setConcluidos] = useState<string[]>([]);


  function adicionarPendente() {
    if (!textoPendente.trim()) return;
    setPendentes(prev => [...prev, textoPendente]);
    setTextoPendente("");
  }

  function removerPendente(index: number) {
    setPendentes(prev => prev.filter((_, i) => i !== index));
  }




  function adicionarAndamento() {
    if (!textoAndamento.trim()) return;
    setAndamento(prev => [...prev, textoAndamento]);
    setTextoAndamento("");
  }

  function removerAndamento(index: number) {
    setAndamento(prev => prev.filter((_, i) => i !== index));
  }


  function adicionarConcluido() {
    if (!textoConcluido.trim()) return;
    setConcluidos(prev => [...prev, textoConcluido]);
    setTextoConcluido("");
  }

  function removerConcluido(index: number) {
    setConcluidos(prev => prev.filter((_, i) => i !== index));
  }



  function moverParaAndamento(index: number) {
    console.log("Mover tarefa:", index);
    // depois você implementa a lógica real
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="black"
      />
      <View style={styles.header}>
        <Ionicons name="stats-chart" size={80} color="#3597cf" />
        <Text style={styles.title}>Profissional</Text>
        <View style={{ width: "40%", height: 1, backgroundColor: "#505050ff" }}></View>
        <Text style={styles.subtitle}>Organize suas tarefas do dia a dia</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 4, justifyContent: "center" }}>
        <BoxProfissional
          title="pendentes"
          temp={3}
          icon={<Ionicons name="warning" size={20} color="#8d1d1dff" />}
          text=""
        />

        <BoxProfissional
          title="Em Andamento"
          temp={2}
          icon={<Ionicons name="time-outline" size={20} color="#c1cacfff" />}
          text="40 min"
        />

        <BoxProfissional
          title="Concluidas"
          temp={5}
          icon={<Ionicons name="star" size={20} color="#e9f818ff" />}
          text="1h 30 min"
        />
      </View>

      <CardPages
        title="Tempo Profissional"
        subTitle="Tempo dedicado a tarefas Profissionais"
        plannedHours={5}
        hour={1}
        minutes={10}
        percentage={80}
        color="#3597cf"
        icon={
          <Ionicons name="stats-chart" size={42} color="#3597cf" />
        } />

      <View style={{ marginTop: 16 }}>
        <PostItSection
          title="Pendentes"
          color="#e98888ff"
          placeholder="Escreva sua tarefa..."
          texto={textoPendente}
          setTexto={setTextoPendente}
          tarefas={pendentes}
          adicionarTarefa={adicionarPendente}
          removerTarefa={removerPendente}
        />
      </View>

      <View style={{ marginTop: 24 }}>

        <PostItSection
          title="Em andamento"
          color="#F7E27C"
          placeholder="Escreva sua tarefa em andamento..."
          texto={textoAndamento}
          setTexto={setTextoAndamento}
          tarefas={andamento}
          adicionarTarefa={adicionarAndamento}
          removerTarefa={removerAndamento}
        />
      </View>

      <View style={{ marginTop: 24 }}>

        <PostItSection
          title="Concluídas"
          color="#B6F2C2"
          placeholder="Escreva sua tarefa concluida..."
          texto={textoConcluido}
          setTexto={setTextoConcluido}
          tarefas={concluidos}
          adicionarTarefa={adicionarConcluido}
          removerTarefa={removerConcluido}
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 8
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
  boxTitleTarefas: {
    gap: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  titleTarefas: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600"
  },
  linha: {
    width: "75%",
    height: 1,
    backgroundColor: "#505050ff"
  }
});
