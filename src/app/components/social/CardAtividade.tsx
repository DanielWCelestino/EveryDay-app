import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  subtitle?: string;
  time: number;
  icon: keyof typeof Ionicons.glyphMap;
  onDelete?: () => void;
};
export function CardAtividade({
  title,
  subtitle,
  time,
  icon,
  onDelete,
}: Props) {
  return (
    <View style={styles.card}>
      <Ionicons
        name={icon}
        size={26}
        color={"#f2941f"}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && (
          <Text style={styles.subtitle}>{subtitle}</Text>
        )}
      </View>

      <Text style={styles.time}>{time} min</Text>

      {onDelete && (
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Ionicons name="trash-outline" size={20} color="#ff6b6b" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 64,
    paddingHorizontal: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333333ff",
    marginBottom: 12,
  },

  textContainer: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  subtitle: {
    color: "#a7a7a7ff",
    fontSize: 13,
    marginTop: 2,
  },

  time: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },

  deleteButton: {
    marginLeft: 12,
    padding: 4,
  },
});
