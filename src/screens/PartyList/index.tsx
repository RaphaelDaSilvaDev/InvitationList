import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-root-toast";

import { Participant } from "./components/Participant";

import { PartiesProps, PartyContext } from "../../contexts/partyContext";
import { Styles } from "./styles";

export function PartyList({ route }) {
  const { id } = route.params;
  const { parties, addParticipant, removeParticipant } = useContext(PartyContext);
  const [party, setParty] = useState<PartiesProps>();
  const [participantName, setParticipantName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  async function getParty() {
    const getParty = parties.find((item) => item.id === id);
    if (getParty) {
      setParty(getParty);
      setLoading(false);
    }
  }

  function handleParticipantAdd() {
    if (participantName.length === 0) {
      return Toast.show("Preencha todos os campos.", {
        duration: Toast.durations.LONG,
      });
    }
    addParticipant(id, participantName);
    setParticipantName("");
  }

  function handleParticipantDelete(index: number) {
    removeParticipant(id, index);
  }

  useEffect(() => {
    getParty();
  }, []);

  return (
    <View style={Styles.Container}>
      {loading ? (
        <View style={Styles.Loader}>
          <ActivityIndicator color="#f5f5f5" />
        </View>
      ) : (
        <>
          <Text style={Styles.Title}>{party?.name}</Text>
          <Text style={Styles.Description}>{party?.address}</Text>
          <Text style={Styles.Date}>{moment(party?.date).locale("pt-br").format("LLLL")}</Text>

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

          <Text style={Styles.Quantity}>{party?.participants.length} Pessoas</Text>

          <FlatList
            data={party?.participants}
            renderItem={({ item, index }) => (
              <Participant
                name={item}
                onRemove={() => handleParticipantDelete(index)}
                key={index}
              />
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
        </>
      )}
    </View>
  );
}
