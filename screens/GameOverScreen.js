import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
    return (
        <View style={styles.rootScreen}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/images/success.png")} />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
                 guess the number <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={onStartNewGame} >Start New Game</PrimaryButton>
            </View>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        marginTop: 100,
        alignItems: "center",
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: "#3b021f",
        overflow: "hidden",
        margin: 36,
    },
    image:{
        width: "100%",
        height: "100%",
    },
    highlight: {
        fontFamily: "open-sans-bold",
        color: "#72063c",
    },
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: "center",
    },
    buttonContainer: {
        marginTop: 24,
    },
});