import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useRef, useState } from "react";
import { Alert } from "react-native";
import uuid from "react-native-uuid";
import Toast from "react-native-root-toast";

interface PartyContextProps {
  parties: PartiesProps[];
  createParty({ name, date, address, navigation }: CreatePartyProps): void;
  removeParty(id: string): void;
  addParticipant(id: string, name: string): void;
  removeParticipant(id: string, index: number): void;
}

interface CreatePartyProps {
  name: string;
  date: Date;
  address: string;
  navigation: any;
}

export interface PartiesProps {
  id: string;
  name: string;
  date: Date;
  address: string;
  participants: string[];
}

export const PartyContext = createContext({} as PartyContextProps);

export function PartyContextProvider({ children }) {
  const firstRender = useRef(true);
  const [parties, setParties] = useState<PartiesProps[]>([]);

  async function getPartiesFromStorage() {
    try {
      const response = await AsyncStorage.getItem("@MyParty_parties");
      if (response) {
        setParties(JSON.parse(response));
      }
    } catch (e) {
      return Toast.show("Não foi carregar salvar as festas da memória.", {
        duration: Toast.durations.LONG,
      });
    }
  }

  async function setPartiesFromStorage() {
    try {
      await AsyncStorage.setItem("@MyParty_parties", JSON.stringify(parties));
    } catch (e) {
      return Toast.show("Não foi possível salvar as festas da memória.", {
        duration: Toast.durations.LONG,
      });
    }
  }

  function createParty({ name, date, address, navigation }: CreatePartyProps) {
    const id = uuid.v4().toString();
    const newParty: PartiesProps = {
      id,
      name,
      date,
      address,
      participants: [],
    };

    setParties((prev) => [...prev, newParty]);
    navigation.replace("PartyList", { id });
  }

  function removeParty(id: string) {
    const partiesArray = Array.from(parties);
    Alert.alert(
      "Atenção",
      `Deseja deletar a festa ${partiesArray.find((item) => item.id === id)?.name}?`,
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            const updatedParties = partiesArray.filter((item) => item.id !== id);
            setParties(updatedParties);
          },
        },
      ]
    );
  }

  function addParticipant(id: string, name: string) {
    const partiesArray = Array.from(parties);
    const newParticipant = partiesArray.find((item) => item.id === id);
    const newParticipantIndex = partiesArray.findIndex((item) => item.id === id);
    if (newParticipant) {
      newParticipant.participants.push(name);
      partiesArray.splice(newParticipantIndex, 1, newParticipant);
      setParties(partiesArray);
    }
  }

  function removeParticipant(id: string, index: number) {
    const partiesArray = Array.from(parties);
    const participantItem = partiesArray.find((item) => item.id === id);
    if (participantItem) {
      Alert.alert(
        "Atenção",
        `Deseja deletar o participante ${participantItem?.participants[index]}?`,
        [
          {
            text: "Não",
            style: "cancel",
          },
          {
            text: "Sim",
            onPress: () => {
              participantItem.participants.splice(index, 1);
              setParties(partiesArray);
            },
          },
        ]
      );
    }
  }

  useEffect(() => {
    getPartiesFromStorage();
  }, []);

  useEffect(() => {
    if (!firstRender.current) {
      setPartiesFromStorage();
    } else {
      firstRender.current = false;
    }
  }, [parties]);
  return (
    <PartyContext.Provider
      value={{
        parties,
        createParty,
        removeParty,
        addParticipant,
        removeParticipant,
      }}
    >
      {children}
    </PartyContext.Provider>
  );
}
