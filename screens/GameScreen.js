import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const GameScreen = () => {
    return (
        <SafeAreaView style={styles.gameScreen}>
            <Text>Guess My Number</Text>
            <View>
                <Text>Opponent's Guess</Text>
            </View>
            <View>
                <Text>Higher or Lower?</Text>
            </View>
            <View>
                <PrimaryButton>Lower</PrimaryButton>
                <PrimaryButton>Higher</PrimaryButton>
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
        padding: 16,
    },
});