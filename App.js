import React from "react";
import { ScrollView, StyleSheet, StatusBar, Platform, View, Image, SafeAreaView } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {

    return (
        <SafeAreaView style={styles.container} >
            <WelcomeScreen />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        alignContent: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})