import { BoxFisico } from "@/app/components/fisico/boxFisico";
import CardTreino from "@/app/components/fisico/CardTreino";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type DayStatus = "done" | "pending" | "today";

type CalendarDay = {
  label: string;
  dayNumber: number;
  status: DayStatus;
};

type Treino = {
  id: string;
  title: string;
  time: number;
  gif: any;
  done: boolean;
};





const WEEK_DAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const treinosPorDia: Treino[][] = [
  [
    { id: "1", title: "Aquecimento", time: 5, gif: require("@/../assets/images/giff.gif"), done: false },
    { id: "2", title: "Agachamento", time: 10, gif: require("@/../assets/images/agachamento.gif"), done: false },
  ],
  [
    { id: "3", title: "Alongamento", time: 8, gif: require("@/../assets/images/giff.gif"), done: false },
  ],
  [
    { id: "4", title: "Mobilidade", time: 12, gif: require("@/../assets/images/giff.gif"), done: false },
  ],
  [
    { id: "5", title: "Caminhada leve", time: 15, gif: require("@/../assets/images/giff.gif"), done: false },
  ],
  [
    { id: "6", title: "Alongamento", time: 10, gif: require("@/../assets/images/giff.gif"), done: false },
  ],
  [
    { id: "7", title: "Livre", time: 5, gif: require("@/../assets/images/giff.gif"), done: false },
  ],
  [],
];

function generateWeek(): CalendarDay[] {
  const today = new Date();
  const todayIndex = today.getDay();

  return WEEK_DAYS.map((label, index) => {
    const date = new Date();
    date.setDate(today.getDate() - todayIndex + index);

    return {
      label,
      dayNumber: date.getDate(),
      status: index === todayIndex ? "today" : "pending",
    };
  });
}

export default function Fisico() {
  const [days, setDays] = useState<CalendarDay[]>(generateWeek());
  const [selectedIndex, setSelectedIndex] = useState(new Date().getDay());
  const [treinos, setTreinos] = useState<Treino[][]>(treinosPorDia);


const treinosDoDia = treinos[selectedIndex] || [];

const sessoes = treinosDoDia.filter(t => t.done).length;

const tempoTotal = treinosDoDia
  .filter(t => t.done)
  .reduce((acc, t) => acc + t.time, 0);

const constancia =
  treinosDoDia.length === 0
    ? 0
    : Math.round((sessoes / treinosDoDia.length) * 100);
    

  function toggleTreino(id: string) {
    setTreinos(prev => {
      const updated = prev.map((day, dayIndex) =>
        dayIndex !== selectedIndex
          ? day
          : day.map(t =>
            t.id === id ? { ...t, done: !t.done } : t
          )
      );

      const dayDone =
        updated[selectedIndex].length > 0 &&
        updated[selectedIndex].every(t => t.done);

      setDays(prevDays =>
        prevDays.map((d, i) =>
          i === selectedIndex
            ? { ...d, status: dayDone ? "done" : "today" }
            : d
        )
      );

      return updated;
    });
  }


  function finalizarDia() {
    setDays(prev =>
      prev.map((day, index) =>
        index === selectedIndex ? { ...day, status: "done" } : day
      )
    );
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />

      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons name="fitness" size={72} color="#e24e4f" />
        <Text style={styles.title}>Físico</Text>
        <View style={styles.divider} />
        <Text style={styles.subtitle}>Mova o seu corpo todos os dias</Text>
      </View>

      {/* BOXES */}
      <View style={styles.boxRow}>
        <BoxFisico
          title={sessoes}
          icon={<Ionicons name="flame" size={20} color="#e24e4f" />}
          text="Sessões"
        />

        <BoxFisico
          title={tempoTotal}
          icon={<Ionicons name="time-outline" size={20} color="#c1cacf" />}
          subTtxt="min"
          text="Tempo total"
        />

        <BoxFisico
          title={constancia}
          icon={<Ionicons name="star" size={20} color="#e9f818" />}
          subTtxt="%"
          text="Constância"
        />
      </View>


      {/* CALENDÁRIO */}
      <View style={styles.calendar}>
        {days.map((day, index) => (
          <Pressable key={index} onPress={() => setSelectedIndex(index)} style={styles.dayContainer}>
            <Text style={[styles.dayLabel, day.status === "today" && styles.todayLabel]}>
              {day.label}
            </Text>

            <View
              style={[
                styles.circle,
                day.status === "done" && styles.doneCircle,
                index === selectedIndex && styles.selectedCircle,
              ]}
            >
              {day.status === "done" ? (
                <Text style={styles.check}>✓</Text>
              ) : (
                <Text style={styles.dayNumber}>{day.dayNumber}</Text>
              )}
            </View>
          </Pressable>
        ))}
      </View>

      {/* TREINOS DO DIA */}
      {treinos[selectedIndex]?.length === 0 ? (
        <Text style={styles.empty}>Nenhum treino para este dia</Text>
      ) : (
        treinos[selectedIndex].map(treino => (
          <CardTreino
            key={treino.id}
            title={treino.title}
            time={treino.time}
            gif={treino.gif}
            done={treino.done}
            onPress={() => toggleTreino(treino.id)}
          />
        ))
      )}

      <TouchableOpacity style={styles.finishButton} onPress={finalizarDia}>
        <Text style={styles.finishButtonText}>Finalizar treino</Text>
      </TouchableOpacity>
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
    height: 185,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#a7a7a7",
    fontSize: 14,
  },

  divider: {
    width: "40%",
    height: 1,
    backgroundColor: "#505050",
    marginVertical: 6,
  },

  boxRow: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 16,
  },

  calendar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1E1E1E",
    padding: 12,
    borderRadius: 14,
    marginBottom: 24,
  },

  dayContainer: {
    alignItems: "center",
    width: 42,
  },

  dayLabel: {
    color: "#9E9E9E",
    fontSize: 12,
    marginBottom: 6,
  },

  todayLabel: {
    color: "#e24e4f",
    fontWeight: "600",
  },

  circle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#2A2A2A",
    alignItems: "center",
    justifyContent: "center",
  },

  selectedCircle: {
    borderWidth: 2,
    borderColor: "#e24e4f",
  },

  doneCircle: {
    backgroundColor: "#e24e4f",
  },

  dayNumber: {
    color: "#fff",
    fontSize: 14,
  },

  check: {
    color: "#0E0E0E",
    fontSize: 16,
    fontWeight: "bold",
  },

  finishButton: {
    backgroundColor: "#e24e4f",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 40,
  },

  finishButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  boxAtividade: {
    gap: 6,
    padding: 8,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",

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
  empty: {
    color: "#a7a7a7",
    textAlign: "center",
    marginTop: 24,
    marginBottom: 24,
    fontSize: 14,
  },
});
