import { StyleSheet, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from "./screens/StartGameScreen";
export default function App() {
  return (
    <LinearGradient colors={['#72063c','#ddb52f']} style={styles.appContainer}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 16,
  },
});
