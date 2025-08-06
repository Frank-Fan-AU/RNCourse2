import { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  return (
    <LinearGradient colors={['#72063c','#ddb52f']} style={styles.appContainer}>
      <ImageBackground source={require('./assets/dices.jpg')} resizeMode="cover" style={styles.appContainer} imageStyle={styles.backgroundImage}>
        {userNumber ? <GameScreen /> : <StartGameScreen onPickNumber={pickedNumberHandler} />}
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
