import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "./components/Participant";
import { Styles } from "./styles";

export function Home() {
  const [participantsList, setParticipantsList] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>("");
  const [error, setError] = useState<string>("");

  function handleParticipantAdd() {
    if (participantName.length !== 0) {
      setParticipantsList((prev) => [...prev, participantName]);
      setParticipantName("");
    } else {
      createError("Insira um nome!");
    }
  }

  function handleParticipantDelete(index: number) {
    Alert.alert("Atenção", `Deseja deletar o participante ${participantsList[index]}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          setParticipantsList((prev) => prev.filter((item, indexFilter) => indexFilter !== index));
        },
      },
    ]);
  }

  function createError(text: string) {
    setError(text);
    setTimeout(() => {
      setError("");
    }, 1500);
  }

  return (
    <View style={Styles.Container}>
      <Text style={Styles.Title}>Festa da Tia Joana</Text>
      <Text style={Styles.Description}>Lista de Participantes</Text>
      <Text style={Styles.Date}>Sexta, 11 de Novembro de 2022</Text>

      <View style={Styles.InputContainer}>
        <TextInput
          style={Styles.Input}
          placeholder="Nome do usuário"
          placeholderTextColor="#6b6b6b"
          value={participantName}
          onChangeText={setParticipantName}
          onSubmitEditing={handleParticipantAdd}
        />
        <TouchableOpacity style={Styles.Button} onPress={handleParticipantAdd}>
          <Text style={Styles.ButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      {error && <Text style={Styles.ErrorText}>{error}</Text>}

      <Text style={Styles.Quantity}>{participantsList.length} Pessoas</Text>

      <FlatList
        data={participantsList}
        renderItem={({ item, index }) => (
          <Participant name={item} onRemove={() => handleParticipantDelete(index)} key={index} />
        )}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={Styles.EmptyList}>
            <Text style={Styles.EmptyListText}>
              Não tem ninguém na festa, adicione pessoas a ela.
            </Text>
          </View>
        )}
      />
    </View>
  );
}
