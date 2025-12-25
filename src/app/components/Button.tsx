import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  buttonText: string;
  onPress: () => void;
};

export default function Button({ buttonText, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    button: {
    top: 250,
    width: '80%',
    height: 55,
    padding: 10,
    backgroundColor: '#01A5B1',
    borderRadius: 25,
    marginVertical: 10,
    marginBottom: 30,
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
})
