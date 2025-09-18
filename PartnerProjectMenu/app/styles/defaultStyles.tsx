import { StyleSheet } from "react-native";
import colors from "./colors";

const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        backgroundColor: colors.background
    },

    text: {
        fontSize: 16,
        color: colors.text,
        fontWeight: 'bold'
    },

    subHeader: {
        fontSize: 24,
        color: colors.text,
    },

    titleText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.text,
    },
    buttonHolder: {
        textAlign: 'center',
        backgroundColor: colors.secondary,
        height: '60%',
        width: '60%',
        borderColor: colors.border,
        borderWidth:20,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
})

export default defaultStyles;