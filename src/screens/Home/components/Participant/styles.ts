import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Container: {
    width: "100%",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  NameContainer: {
    flex: 1,
    height: 56,
    justifyContent: "center",
    paddingLeft: 8,
    borderRadius: 5,
    backgroundColor: "#1f1e25",
  },
  Name: {
    color: "#f5f5f5",
  },
  Button: {
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    backgroundColor: "#E23C44",
    borderRadius: 5,
    marginLeft: 8,
  },
  ButtonText: {
    fontSize: 20,
    color: "#f5f5f5",
  },
});
