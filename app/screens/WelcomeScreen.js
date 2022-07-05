import React from "react";
import { Alert, TouchableHighlight, Button, View, ImageBackground , StyleSheet, Image, Text} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";


function WelcomeScreen(props) {
    const {landscape} = useDeviceOrientation();

    return (
        <ImageBackground style={styles.background}
            source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/icon.png")} />
                <Text>Nothing to see here...</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
            <View>
                <Text>Welcome</Text>
                <TouchableHighlight>
                    <Image source={{
                    width: landscape ? 300 : 300,
                    height: landscape ? 200 : 200,
                    uri: "https://picsum.photos/200/300",
                    }} />
                </TouchableHighlight>
                <Button color="orange" title="Click Me"
                    onPress={() => Alert.alert("My title", "My message", [
                        {text: "Yes", onPress: () => console.log("Yes")},
                        {text: "No"},
                    ])} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65"
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    }
});

export default WelcomeScreen;