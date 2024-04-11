import React from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet, ScrollView } from 'react-native';
import { d } from '../component/desing'; // Assurez-vous d'importer correctement votre fichier de styles
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons';


const Sign = ({ navigation, route }) => {



  return (

    <View style={d.container}>
                <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <AntDesign name="arrowleft" size={wp('8%')} color='#fff' style={{ marginLeft: wp('2%'), marginTop: hp('2.5%'), marginVertical : wp('6%'), margin :wp('90%')}} />
                </TouchableOpacity>
            </View>
      <ScrollView style={{flex : 1}}>
      <View style={d.titleContainer}>
        <Text style={d.title}>Organiser votre rendez-vous et votre traitement!</Text>
      </View>
    
      <View style={d.row}>
  
        <TouchableOpacity onPress={()=>{navigation.navigate('RendezVous')}} style={d.item}>
          <Image source={require('../assets/rendez-vous.png')} style={d.image} />
          <Text style={d.caption}>Rendez-vous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Traitement')}} style={d.item}>
          <Image source={require('../assets/traitement.png')} style={d.image} />
          <Text style={d.caption}>Traitement</Text>
        </TouchableOpacity>
      </View>
      <View style={d.row1}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Hopital')}} style={d.item}>
          <Image source={require('../assets/Hopital.png')} style={d.image} />
          <Text style={d.caption}>Hopital</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Contact')}} style={d.item}>
          <Image source={require('../assets/liste.png')} style={d.image} />
          <Text style={d.caption}>Contact</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

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
      justifyContent : 'flex-start'
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
      marginVertical: hp('6%'),
  },
  inputContainer: {
      marginBottom: hp('1.5%'),
  },
  label: {
      fontSize: hp('2.5%'),
      marginBottom: hp('3.5%'),
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

export default Sign;
