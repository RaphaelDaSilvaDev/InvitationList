import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { PartyContext } from "../../../../contexts/partyContext";
import { styles } from "./styles";

interface PartiesProps {
  id: string;
  name: string;
  navigation: any;
}

export function Parties({ id, name, navigation }: PartiesProps) {
  const { removeParty } = useContext(PartyContext);
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.ItemContainer}
        onPress={() => navigation.navigate("PartyList", { id })}
      >
        <View style={styles.NameContainer}>
          <Text style={styles.Name}>{name}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={() => removeParty(id)}>
        <Text style={styles.ButtonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
