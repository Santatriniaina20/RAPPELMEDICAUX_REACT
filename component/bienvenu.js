import React from 'react';
import { View, Image, Text, StatusBar, TouchableOpacity } from 'react-native';
import { s } from '../component/style';
import { t } from '../component/text';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';


const Accueil = ({ navigation }) => {

  const handleButtonPress = () => {
    console.log('Bouton appuyé !');
    navigation.navigate('Sign');
  };

  return (
    <View style={s.container}>

      <View style={s.fullScreen}>
        <Image source={require('../assets/ima.png')} style={t.b} />
        <Text style={[t.text, { fontSize: wp('9%') }]}> MedMemo </Text>
        <Text style={t.texte}> Organisation médicale et pré-inscription. </Text>
        <TouchableOpacity style={s.button} onPress={handleButtonPress}>
          <Text style={t.buttonText}>Start</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  );
};

export default Accueil;
