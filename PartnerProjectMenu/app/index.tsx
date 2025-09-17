import { View } from "react-native";
import MyComponent from "./components/MyComponent";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyComponent/>
    </View>
  );
}
