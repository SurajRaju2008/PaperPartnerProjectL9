import { StyleSheet } from "react-native";
import colors from "./colors";

const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
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

    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
  }
})

export default defaultStyles;