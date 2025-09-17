import { View } from "react-native";
import MyComponent from "./components/MyComponent";
import defaultStyles from "./styles/defaultStyles";

export default function Index() {
  return (
    <View
      style={defaultStyles.container}
    >
      <MyComponent style= {defaultStyles.button}/>
    </View>
  );
}
