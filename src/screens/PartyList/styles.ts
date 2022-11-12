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
  Description: {
    fontSize: 18,
    color: "#ccc",
    marginTop: 8,
  },
  Date: {
    fontSize: 14,
    color: "#6b6b6b",
    marginTop: 8,
  },
  InputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 32,
    marginBottom: 16,
  },
  Input: {
    flex: 1,
    padding: 8,
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#f5f5f5",
  },
  Quantity: {
    textAlign: "right",
    fontSize: 16,
    color: "#6b6b6b",
    marginBottom: 16,
  },
  Button: {
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    backgroundColor: "#31cf67",
    borderRadius: 5,
    marginLeft: 8,
  },
  ButtonText: {
    fontSize: 20,
    color: "#f5f5f5",
  },
  EmptyList: {
    flex: 1,
    alignItems: "center",
  },
  EmptyListText: {
    width: "80%",
    textAlign: "center",
    fontSize: 18,
    color: "#f5f5f5",
  },
  ErrorText: {
    color: "#ff0000",
    textAlign: "center",
  },
  Loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
