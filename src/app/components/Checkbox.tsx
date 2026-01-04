import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
};

export function Checkbox({ label, checked, onChange }: Props) {
  return (
    <Pressable onPress={() => onChange(!checked)}>
      <View style={styles.container}>
        <Ionicons
          name={checked ? "checkbox" : "square-outline"}
          size={30} 
          color={checked ? "#38a69d" : "#01A5B1"}
        />
        <Text style={styles.text}>{label}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    marginLeft:18
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
  },
});
