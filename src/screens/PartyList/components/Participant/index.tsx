import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

interface ParticipantProps {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.Container}>
      <View style={styles.NameContainer}>
        <Text style={styles.Name}>{name}</Text>
      </View>
      <TouchableOpacity style={styles.Button} onPress={onRemove}>
        <Text style={styles.ButtonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
