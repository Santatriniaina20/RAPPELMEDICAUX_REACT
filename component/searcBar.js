import React, {useState} from "react";
import { View, StyleSheet, TextInput  } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { TextInput} from "react-native-gesture-handler";

const SearchBar =({onChangeText}) =>{
    const [searchText, setSearchText] = useState('');
    const handleSearch = (text) => {
        setSearchText(text);
        onChangeText(text);
    };
    return(
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Rechercher..."
            value={searchText}
            onChangeText={handleSearch}
            />
        </View>
    );
};
const styles= StyleSheet.create({
    container:{
        backgroundColor:'#gray',
        paddingVertical : 10,
        paddingHorizontal: 20,
        borderBottomWidth : 1,
        borderBottomColor :'#ccc',
    },
    input :{
        height : 40,
        borderWidth : 1,
        borderColor:'#ccc',
        borderRadius : 25,
        paddingHorizontal : 10,
    },
});
export default SearchBar;