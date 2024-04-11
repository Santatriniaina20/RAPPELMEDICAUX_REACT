import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SearchBar from './searcBar';

const DATA = [
  { id: '1', title: 'Dr. Robinson' },
  { id: '2', title: 'Dr. Mamy' },
  { id: '3', title: 'Dr. Hervé' },
  { id: '4', title: 'Dr. Sitraka' },
  { id: '5', title: 'Dr. Fanja' },
];

const ListItem = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Contact = ({navigation}) => {
  const renderItem = ({ item }) => (
    <ListItem title={item.title} />
  );
  const [searchQuery, setSearchQuery]= useState('');
  const handleSearchChange = (text) =>{
    setSearchQuery(text);
  };


  return (
    <View style={styles.container}>
      <SearchBar onChangeText={handleSearchChange}/>
      {/* <Text>Résultats de recherche pour : {searchQuery}</Text> */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity onPress={() => {navigation.navigate('Sign')}}>
        <Text style={styles.back}>Retour</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor : '#fff',
  },
  item: {
    backgroundColor: '#9925be',
    padding: 30,
    marginVertical: 2,
    marginHorizontal: 16,
    borderRadius : 25,
    borderWidth : 1,
    borderBottomWidth : 4,
    marginTop : 20,
  },
  title: {
    fontSize: 16,
    color : 'white',

  },
  back : {
    position :'relative',
    marginHorizontal : '5%',
    marginVertical : 20,
    borderWidth : 1,
    width : '10%',
    textAlign :'center',
    backgroundColor : '#9925be',
    color : 'white',
    borderRadius : 25,
    borderBottomWidth : 3,
    
  },
});

export default Contact;