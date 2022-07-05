import React from "react";
import { Image, StyleSheet } from "react-native";
import colors from "../config/colors";

function ViewImageScreen(props) {
    return <Image 
        resizeMode="contain"
        style={styles.image} 
        source={require("../assets/background.jpg")}
    />

}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
    },
    colorPalette: {
        color: colors.primary
    },
    otherColor: {
        color: colors.secondary
    }
});

export default ViewImageScreen;