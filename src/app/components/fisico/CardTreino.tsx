import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CardTreinoProps = {
  title: string;
  time: number;
  gif: any;
  done?: boolean;
  onPress?: () => void;
};

export default function CardTreino({
  title,
  time,
  gif,
  done = false,
  onPress,
}: CardTreinoProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.gifs} source={gif} />

      <View style={styles.info}>
        <Text style={styles.titleBox}>{title}</Text>
        <Text style={styles.time}>{time} min</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, done && styles.buttonDone]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        {done && (
          <Ionicons name="checkmark" size={18} color="#000" />
        )}
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    width: "100%",
    height: 90,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: "#222",
  },

  gifs: {
    width: 100,
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },

  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },

  titleBox: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  time: {
    color: "#e24e4f",
    fontSize: 14,
    marginTop: 2,
  },

  button: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#e24e4f",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonDone: {
    backgroundColor: "#e24e4f",
  },
});
