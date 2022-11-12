import { useContext, useEffect, useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import DatePiker from "@react-native-community/datetimepicker";
import moment from "moment";
import "moment/locale/pt-br";
import Toast from "react-native-root-toast";

import { PartyContext } from "../../contexts/partyContext";
import { Styles } from "./style";

export function AddParty({ navigation }) {
  const firstRender = useRef(true);
  const { createParty } = useContext(PartyContext);

  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const [date, setDate] = useState(new Date());
  const [convertedDate, setConvertedDateDate] = useState<string>("");

  const [partyName, setPartyName] = useState<string>("");
  const [partyLocation, setPartyLocation] = useState<string>("");

  function onChangeDate(event, selectedDate) {
    const currentDate = selectedDate;
    setDate(currentDate);
    setShowDate(false);
    setShowTime(true);
  }

  function onChangeTime(event, selectedDate) {
    const currentDate = selectedDate;
    setDate(currentDate);
    setShowTime(false);
  }

  function showDatepicker() {
    setShowDate(true);
  }

  function handleCreateParty() {
    if (partyName.length === 0 || partyLocation.length === 0 || convertedDate.length === 0) {
      return Toast.show("Preencha todos os campos.", {
        duration: Toast.durations.LONG,
      });
    }
    createParty({ name: partyName, address: partyLocation, date, navigation });
  }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      setConvertedDateDate(moment(date).locale("pt-br").format("LLLL"));
    }
  }, [date]);

  return (
    <View style={Styles.Container}>
      <Text style={Styles.Title}>Adicionar Festas</Text>

      <View style={Styles.InputContainer}>
        <TextInput
          style={Styles.Input}
          placeholder="Nome do Evento"
          placeholderTextColor="#6b6b6b"
          value={partyName}
          onChangeText={setPartyName}
        />
        <TouchableOpacity style={Styles.Input} onPress={showDatepicker}>
          {convertedDate.length === 0 ? (
            <Text style={Styles.InputPlaceholder}>Selecione uma data</Text>
          ) : (
            <Text style={Styles.InputText}>{convertedDate}</Text>
          )}
        </TouchableOpacity>
        <TextInput
          style={Styles.Input}
          placeholder="Endereço"
          placeholderTextColor="#6b6b6b"
          value={partyLocation}
          onChangeText={setPartyLocation}
        />
      </View>

      <TouchableOpacity onPress={handleCreateParty} style={Styles.AddButton}>
        <Text style={Styles.ButtonText}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={Styles.RemoveButton}>
        <Text style={Styles.ButtonText}>-</Text>
      </TouchableOpacity>

      {showDate && <DatePiker value={date} mode={"date"} onChange={onChangeDate} />}
      {showTime && <DatePiker value={date} mode={"time"} onChange={onChangeTime} />}
    </View>
  );
}
