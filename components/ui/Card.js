import { View, StyleSheet } from "react-native";

const Card = ({ children }) => {
    return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
    card: {
        padding: 16,
        width: "90%",
        marginTop: 36,
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
}); 