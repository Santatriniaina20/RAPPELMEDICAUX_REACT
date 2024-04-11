import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const d = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  image: {
    width: wp('25%'), // Utilisation de widthPercentageToDP pour ajuster la largeur en pourcentage
    height: wp('25%'), // Utilisation de widthPercentageToDP pour ajuster la hauteur en pourcentage
    marginVertical: hp('3%'), // Utilisation de heightPercentageToDP pour ajuster la marge en pourcentage
    borderRadius: wp('50%'), // Utilisation de widthPercentageToDP pour ajuster le rayon en pourcentage
    margin : wp('30%'),
    justifyContent : 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: hp('35%'),
    marginHorizontal : wp('15%'),
    justifyContent : 'space-around',
  },
  row1: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: hp('62%'),
    justifyContent : 'space-around',
    marginHorizontal : wp('10%'),
  },
  caption: {
    textAlign: 'center',
    color: 'white',
    fontSize: hp('2%'), // Utilisation de heightPercentageToDP pour ajuster la taille de la police en pourcentage
    textTransform: 'uppercase',
    fontWeight: 'bold',
    padding: hp('0.5%'), // Utilisation de heightPercentageToDP pour ajuster le rembourrage en pourcentage
    borderBottomWidth: hp('0.3%'), // Utilisation de heightPercentageToDP pour ajuster l'épaisseur de la bordure en pourcentage
    borderRadius: wp('8%'), // Utilisation de widthPercentageToDP pour ajuster le rayon de la bordure en pourcentage
    backgroundColor: '#3398BF',
    width: wp('30%'),
    marginHorizontal: wp('28%'),
    marginVertical: hp('1%'),
  },
  title: {
    position: 'absolute',
    top: hp('6%'),
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: hp('2.5%'), // Utilisation de heightPercentageToDP pour ajuster la taille de la police en pourcentage
    textAlign: 'center',
    padding: hp('1%'), // Utilisation de heightPercentageToDP pour ajuster le rembourrage en pourcentage
    width: wp('100%'), // Ajuste la largeur à 100% de la largeur de l'écran
  },
  titleContainer: {
    position: 'absolute',
    borderWidth: hp('0.3%'), // Utilisation de heightPercentageToDP pour ajuster l'épaisseur de la bordure en pourcentage
    borderRadius: wp('8%'), // Utilisation de widthPercentageToDP pour ajuster le rayon de la bordure en pourcentage
    width: wp('95%'),
    height: hp('20%'),
    textAlign: 'center',
    alignItems: 'center',
    top: hp('15%'),
    backgroundColor: '#56A828',
  },
});

export { d };
