import { View, Text, StyleSheet, SafeAreaView, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    return rndNum;
}


const GameScreen = ({ userNumber, onGameOver }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userNumber));
    const [maxAllowedGuess, setMaxAllowedGuess] = useState(100);
    const [minAllowedGuess, setMinAllowedGuess] = useState(1);

    useEffect(() => {
     if (currentGuess === userNumber) {
        onGameOver();
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
            Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: "Sorry!", style: "cancel" }]);
            return;
        }
        if (direction === "higher" && currentGuess > userNumber) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: "Sorry!", style: "cancel" }]);
            return;
        }
        if (direction === "lower") {
            setMaxAllowedGuess(currentGuess);
            setCurrentGuess(generateRandomBetween(minAllowedGuess, currentGuess, currentGuess));
        }
        if (direction === "higher") {
            setMinAllowedGuess(currentGuess);
            setCurrentGuess(generateRandomBetween(currentGuess, maxAllowedGuess, currentGuess));
        }

    }
    return (
        <SafeAreaView style={styles.gameScreen}>
            
            <View>
                <Title>Opponent's Guess</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
            </View>
            <View>
                <Text>Higher or Lower?</Text>
            </View>
            <View>
                <PrimaryButton onPress={lowerGuessHandler}>Lower</PrimaryButton>
                <PrimaryButton onPress={higherGuessHandler} >Higher</PrimaryButton>
            </View>
            <View>
                <Text>Logger</Text>
            </View>
        </SafeAreaView>
    )
}

export default GameScreen;  

const styles = StyleSheet.create({
    gameScreen: {
        flex: 1,
        padding: 24,
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        color: "#ddb52f",
        textAlign: "center",
        padding: 12,
    }
});