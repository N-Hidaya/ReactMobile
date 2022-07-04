import React, {useState} from 'react';
import { SectionList, FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)'
    }
});
  
  //FlatList component displays a scrolling list of changing, but similarly structured data.
  //Works well for long lists of data, where the number of item might change over time
export const FlatListBasics = () => {
    return (
      <View style={styles.container}>
        <FlatList data={[
          {key: 'Devin'},
          {key: 'Daya'},
          {key: 'Jaja'},
          {key: 'Nobody'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>
            {item.key}</Text>}  
        />
      </View>
    );
}

//SectionList is used to render a set of data broken into logical sections (maybe with section headers)
export const SectionListBasic = () => {
    return (
        <View style={styles.container}>
            <SectionList sections={[
                {title: 'D', data: ['Devin', 'Daya']},
                {title: 'J', data: ['Jaja', 'Jaryl']},
                {title: 'N', data: ['Nobody', 'Natasha']}
            ]}
            renderItem={({item}) => <Text style={styles.item}>
                {item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>
                {section.title}</Text>}
            keyExtractor={(item) => `basicListEntry-${item.title}`}
            />
        </View>
    );
}




