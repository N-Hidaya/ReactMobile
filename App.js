import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <ScrollView>
      <Text>Daya's App</Text>
      <View>
        <Text>My favourite thing</Text>
        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png',}}
              style={{width: 200, height: 200}} />
      </View>
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
                defaultValue="Enter your favourite thing" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
