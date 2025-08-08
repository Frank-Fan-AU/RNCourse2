import { Text, StyleSheet } from "react-native";

const CardTitle = ({ children,style }) => {
    return <Text style={[styles.title,style]}>{children}</Text>;
};

export default CardTitle;

const styles = StyleSheet.create({
    title: {
        color: "#ddb52f",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
      }, 
});