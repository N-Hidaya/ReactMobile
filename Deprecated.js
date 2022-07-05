import React, {useState} from 'react';
import { Text, View, Image, TextInput, ScrollView, Button} from 'react-native';
import {FlatListBasics, SectionListBasic} from './second';


const Cat = (props) => {
  const [hungry, setHungry] = useState(true);

  return (
  <View>
    <Text>I am {props.name}. I am {hungry ? "hungry" : "full"}!</Text>
    <Button onPress={() => {setHungry(false);}} disabled={!hungry} title={hungry ? "Pour me some milk please!" : "Thank you"} />
  </View>
  );
  
}

const Translator = () => {
  const [text, setText] = useState('');

  return (
    <View style={{padding:10}}>
      <TextInput style={{height:40}} placeholder="Type something here for surprise" 
        onChangeText={newText => setText(newText)} defaultValue={text} />
      <Text style={{padding:10, fontSize:42}}>
        {text.split(' ').map((word) => word && '대박').join(' ')}
      </Text>
    </View>
  );
}

const FirstApp = () => {
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
      <Translator />
    </ScrollView>
    
  );
}

export default function Deprecated() {
  return (
    <ScrollView>
      <FirstApp />
      <SectionListBasic />
    </ScrollView>
  );
}