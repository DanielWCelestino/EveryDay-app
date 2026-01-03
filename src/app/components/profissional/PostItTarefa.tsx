import { Ionicons } from "@expo/vector-icons";
import { FlatList, Text, TextInput, View } from "react-native";

type Props = {
  title: string;
  color: string;
  texto: string;
  placeholder:string;
  setTexto: (text: string) => void;
  tarefas: string[];
  adicionarTarefa: () => void;
  removerTarefa: (index: number) => void;
};

export function PostItSection({
  title,
  color,
  texto,
  setTexto,
  tarefas,
  placeholder,
  adicionarTarefa,
  removerTarefa,
}: Props) {
  return (
    <>
      {/* TÍTULO */}
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "600" }}>
          {title}
        </Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "#505050ff" }} />
      </View>

      <View style={{ padding: 16 }}>
        {/* INPUT */}
        <View
          style={{
            backgroundColor: color,
            borderRadius: 12,
            padding: 16,
            elevation: 4,
            marginBottom: 16,
          }}
        >
          <TextInput
            placeholder={placeholder}
            placeholderTextColor="#555"
            value={texto}
            onChangeText={setTexto}
            onSubmitEditing={adicionarTarefa}
            style={{ fontSize: 16, color: "#333" }}
          />
        </View>

        {/* LISTA */}
        <FlatList
          data={tarefas}
          keyExtractor={(_, index) => index.toString()}
          scrollEnabled={false}
          renderItem={({ item, index }) => (
            <View
              style={{
                backgroundColor: color,
                borderRadius: 12,
                padding: 16,
                marginBottom: 12,
                elevation: 3,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#333", fontSize: 15, flex: 1 }}>
                {item}
              </Text>

              <Ionicons
                name="trash"
                size={20}
                color="#ec5959ff"
                onPress={() => removerTarefa(index)}
              />

             


            </View>
          )}
        />
      </View>
    </>
  );
}
