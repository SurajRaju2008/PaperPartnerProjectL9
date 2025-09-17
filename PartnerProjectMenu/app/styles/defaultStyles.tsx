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
        color: colors.dark,
    },

    titleText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.dark,
    },

    card: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
  },
})

export default defaultStyles;