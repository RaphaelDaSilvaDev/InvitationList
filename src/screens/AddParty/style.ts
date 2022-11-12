import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#292929",
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f5f5f5",
    paddingTop: 48,
  },
  InputContainer: {
    height: 200,
    justifyContent: "space-between",
    marginTop: 32,
    marginBottom: 16,
  },
  Input: {
    justifyContent: "center",
    padding: 8,
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#f5f5f5",
  },
  InputPlaceholder: {
    color: "#6b6b6b",
  },
  InputText: {
    color: "#f5f5f5",
  },
  AddButton: {
    width: 56,
    height: 56,
    backgroundColor: "#31cf67",
    borderRadius: 5,

    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    bottom: 20,
    right: 24,
  },
  RemoveButton: {
    width: 56,
    height: 56,
    backgroundColor: "#ff0000",
    borderRadius: 5,

    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    bottom: 20,
    left: 24,
  },
  ButtonText: {
    fontSize: 20,
    color: "#f5f5f5",
  },
});
