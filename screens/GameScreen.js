import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

const GameScreen = () => {
    return (
        <SafeAreaView style={styles.gameScreen}>
            
            <View>
                <Title>Opponent's Guess</Title>
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
        padding: 24,
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        color: "#ddb52f",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "#ddb52f",
        padding: 12,
    }
});