import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button} from 'react-native';


const Cat = (props) => {
  const [hungry, setHungry] = useState(true);

  return (
  <View>
    <Text>I am {props.name}. I am {hungry ? "hungry" : "full"}!</Text>
    <Button onPress={() => {setHungry(false);}} disabled={!hungry} title={hungry ? "Pour me some milk please!" : "Thank you"} />
  </View>
  );
  
}

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

      <Cat name="Fluffy" />
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
