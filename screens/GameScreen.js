import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  FlatList,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import CardTitle from "../components/ui/CardTitle";
import AntDesign from "@expo/vector-icons/AntDesign";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return rndNum;
};

const GameScreen = ({ userNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userNumber)
  );
  const [maxAllowedGuess, setMaxAllowedGuess] = useState(100);
  const [minAllowedGuess, setMinAllowedGuess] = useState(1);
  const [rounds, setRounds] = useState([]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(rounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  function higherGuessHandler() {
    nextGuessHandler("higher");
  }

  function lowerGuessHandler() {
    nextGuessHandler("lower");
  }

  function nextGuessHandler(direction) {
    if (direction === "lower" && currentGuess < userNumber) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "higher" && currentGuess > userNumber) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      setMaxAllowedGuess(currentGuess);
      setCurrentGuess(
        generateRandomBetween(minAllowedGuess, currentGuess, currentGuess)
      );
      setRounds((prevRounds) => [currentGuess, ...prevRounds]);
    }
    if (direction === "higher") {
      setMinAllowedGuess(currentGuess);
      setCurrentGuess(
        generateRandomBetween(currentGuess, maxAllowedGuess, currentGuess)
      );
      setRounds((prevRounds) => [currentGuess, ...prevRounds]);
    }
  }
  return (
    <SafeAreaView style={styles.gameScreen}>
      <View>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>
      <Card>
        <View>
          <CardTitle>Higher or Lower?</CardTitle>
        </View>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={lowerGuessHandler}>
            <AntDesign name="minus" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={higherGuessHandler}>
            <AntDesign name="plus" size={24} color="white" />
          </PrimaryButton>
        </View>
      </Card>

      <View style={styles.guessLogContainer}>
        <FlatList
          data={rounds}
          renderItem={(itemData) => <GuessLogItem roundNumber={itemData.index + 1} guess={itemData.item} />}
          keyExtractor={(item) => item}
        />
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    padding: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  guessLogContainer: {
    flex: 1,
    padding: 24,
  },
});
