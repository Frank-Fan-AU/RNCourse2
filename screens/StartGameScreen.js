import { View, StyleSheet,TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
            <View style={styles.buttonsContainer}>
                <PrimaryButton>Start Game</PrimaryButton>
                <PrimaryButton>End Game</PrimaryButton>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: "#270516",
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: "center",
        justifyContent: "center",
    },
    numberInput: {
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonsContainer: {
        marginTop: 24,
        flexDirection: "row",
    },
});