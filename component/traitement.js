import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Platform, DatePickerAndroid, Button} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import RappelMedicauxApp from "./Date";


const Traitement = ({ navigation }) => {
    const [pillName, setPillName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const insets = useSafeAreaInsets();

    const handleSaveAppointment = async () => {
        try {
            const appointment = { pillName, date, time };
            await AsyncStorage.setItem('appointment', JSON.stringify(appointment));
            alert('Rendez-Vous enregistré avec succès');
        } catch (error) {
            alert('Une erreur s\'est produite lors de l\'enregistrement');
        }
    };


    return (
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <AntDesign name="arrowleft" size={wp('8%')} color='#fff' style={{ marginLeft: wp('3%'), marginTop: hp('2.5%'), marginVertical : wp('4%')}} />
                </TouchableOpacity>
            </View>
           
                <Text style={styles.texte}>Enregistrer vos traitement</Text>
                <ScrollView contentContainerStyle={{paddingHorizontal:30, paddingVertical:10}}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nom du pilule :</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez le nom du pilule"
                        onChangeText={text => setPillName(text)}
                    />
                </View>

                {/* <View style={styles.inputContainer}> */}
                    {/* <Text style={styles.label}> Sélectionnez une date :</Text> */}
                    {/* {Platform.OS === 'ios' ?(
                        <DatePickerIOS 
                        date={chosenDate}
                        onDateChange={setchosenDate}
                        mode="date"/>
                    ) : (<Button title='ouvrir le selecteur de date' onPress={openDatePicker}/>)} */}
                     {/* <TextInput
                        style={styles.input}
                        placeholder="Entrez la date"
                        onChangeText={text => setDate(text)}
                    /> 
                </View> */}
                <View style={{flex:1, marginTop:hp('4%')}}>
                <RappelMedicauxApp/>
                </View>

                {/* <View style={styles.inputContainer}>
                    <Text style={styles.label}>Heure :</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez l'heure"
                        onChangeText={text => setTime(text)}
                    />
                </View> */}

                <TouchableOpacity onPress={handleSaveAppointment} style={styles.button}>
                    <Text style={styles.buttonText}>Enregistrer</Text>
                </TouchableOpacity>
                </ScrollView>
           
        <View style={{justifyContent:'flex-end'}}>
        <View style={footerStyle.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <AntDesign name="home" style={footerStyle.footerIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Sign')}>
                <AntDesign name="profile" style={footerStyle.footerIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RendezVous')}>
                <AntDesign name="barschart" style={footerStyle.footerIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Traitement')}>
                <AntDesign name="pluscircle" style={footerStyle.footerIcon}/>
            </TouchableOpacity>
        </View>
        </View>


    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#9925be',
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingHorizontal: wp('5%'),
        paddingBottom: wp('5%'),
    },
    texte: {
        fontSize: hp('5%'),
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        marginVertical: hp('5%'),
    },
    inputContainer: {
        marginBottom: hp('0.5%'),
        margin:hp('2%'),
    },
    label: {
        fontSize: hp('2.5%'),
        marginBottom: hp('2.5%'),
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: wp('6%'),
        paddingHorizontal: wp('6%'),
        paddingVertical: hp('0.5%'),
        fontSize: hp('2%'),
    },
    button: {
        backgroundColor: '#9925be',
        borderRadius: wp('25%'),
        paddingVertical: hp('2%'),
        alignItems: 'center',
        justifyContent : 'center',
        width : wp('35%'),
        height : wp('10%'),
        marginTop: hp('6%'),
        marginHorizontal : '29%',
    },
    buttonText: {
        fontSize: hp('2%'),
        marginTop : wp('-2%'),
        color: '#fff',
        textTransform :'uppercase',
        fontWeight : 'bold',

    },
});
const footerStyle = StyleSheet.create({
    footer : {
        flexDirection:'row',
        justifyContent :'space-around',
        alignItems : 'center',
        borderTopWidth : 1,
        borderColor : '#ccc',
        paddingVertical : 20,
    },
    footerIcon : {
        fontSize : 34,
        color : '#2A0431',
    },
});


export default Traitement;
