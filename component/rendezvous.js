import React, { useState } from "react";
import { Text, TextInput, View, Button, AsyncStorage, StyleSheet } from "react-native";
const RendezVous = ({navigation}) => {
    const [appointment, setApointment] = useState('');
    const handleSaveAppointment = async () =>{
        try{
            await AsyncStorage.setItem ('appointment', appointment);
            alert ('Rendez-Vous enregistré avec succès');
        } catch (error) {
            alert ('Une erreur s\'est produite lors de l\'enregistrement');
        }
    };
    return (
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Entrez le nom du Docteur"
            value={appointment}
            onChangeText={text => setApointment(text)}/>
            <TextInput
            style={styles.input}
            placeholder="Entrez sa specialité"
            value={appointment}
            onChangeText={text => setApointment(text)}/>
            <TextInput
            style={styles.input}
            placeholder="Entrez la date de rendez-vous"
            value={appointment}
            onChangeText={text => setApointment(text)}/>
            <TextInput
            style={styles.input}
            placeholder="Entrez l'heure du rendez-vous"
            value={appointment}
            onChangeText={text => setApointment(text)}/>
            <Button title="Enregistrer" onPress={handleSaveAppointment}/> 
        </View>
        
    );
};
const styles = StyleSheet.create({
    container :{
        flex : 1,
        justifyContent : 'center',
        alignItems:'center',
    },
    input :{
        width :'80%',
        height : 40,
        borderColor:'gray',
        borderWidth : 1,
        marginBottom: 20,
        paddingHorizontal : 10,
    }
})
export default RendezVous;