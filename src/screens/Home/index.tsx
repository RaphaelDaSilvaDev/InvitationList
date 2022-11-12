import { useContext } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { PartyContext } from "../../contexts/partyContext";
import { Parties } from "./components/Parties";
import { Styles } from "./styles";

export function Home({ navigation }) {
  const { parties } = useContext(PartyContext);
  return (
    <View style={Styles.Container}>
      <Text style={Styles.Title}>Minhas Festas</Text>
      <Text style={Styles.Description}>
        {parties.length === 1 ? `${parties.length} festa` : `${parties.length} festas`}
      </Text>

      <FlatList
        style={Styles.List}
        data={parties}
        renderItem={({ item }) => <Parties id={item.id} name={item.name} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={Styles.EmptyList}>
            <Text style={Styles.EmptyListText}>Você não tem festas agendadas. Agende uma!</Text>
          </View>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate("AddParty")} style={Styles.Button}>
        <Text style={Styles.ButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
