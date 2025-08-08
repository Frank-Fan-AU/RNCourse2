import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGameIsOver(false);
    setRoundsNumber(0);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setRoundsNumber(numberOfRounds);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }
  if (gameIsOver) {
    screen = <GameOverScreen roundsNumber={roundsNumber} userNumber={userNumber} onStartNewGame={startNewGameHandler} />;
  }
  return (
    <LinearGradient colors={['#72063c','#ddb52f']} style={styles.appContainer}>
      <ImageBackground source={require('./assets/dices.jpg')} resizeMode="cover" style={styles.appContainer} imageStyle={styles.backgroundImage}>
        {screen}
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
