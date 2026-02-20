import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuScreen from "./src/screens/MenuScreen";
import OrderScreen from "./src/screens/OrderScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}