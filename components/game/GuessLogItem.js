import { View, Text, StyleSheet } from "react-native";

const GuessLogItem = ({roundNumber, guess}) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>Round {roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: <Text style={styles.highlight}>{guess}</Text></Text>
        </View>
    )
}

export default GuessLogItem;    

const styles = StyleSheet.create({
    listItem: {
        borderColor: "#3b021f",
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        alignItems: "center",
        marginHorizontal: 24,
        marginVertical: 8,
        backgroundColor: "#ddb52f",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        height: 80,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    itemText: {
        fontFamily: "open-sans",
    },
    highlight: {
        fontFamily: "open-sans-bold",
        color: "#72063c",
    },
});