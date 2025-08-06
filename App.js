import { ImageBackground, StyleSheet, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from "./screens/StartGameScreen";
export default function App() {
  return (
    <LinearGradient colors={['#72063c','#ddb52f']} style={styles.appContainer}>
      <ImageBackground source={require('./assets/dices.jpg')} resizeMode="cover" style={styles.appContainer} imageStyle={styles.backgroundImage}>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
