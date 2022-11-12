import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";

import { AddParty } from "./src/screens/AddParty";
import { Home } from "./src/screens/Home";
import { PartyList } from "./src/screens/PartyList";

import { PartyContextProvider } from "./src/contexts/partyContext";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <RootSiblingParent>
      <PartyContextProvider>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              presentation: "transparentModal",
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddParty" component={AddParty} />
            <Stack.Screen name="PartyList" component={PartyList} />
          </Stack.Navigator>
        </NavigationContainer>
      </PartyContextProvider>
    </RootSiblingParent>
  );
}
