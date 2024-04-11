import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const t = StyleSheet.create({
  buttonText: {
    fontSize: hp('5%'),
    textAlign: 'center',
    position: 'relative',
    marginTop: hp('-1%'),
    color: '#ffff',
    fontWeight: 'bold',
  },
  bien: {
    color: '#0000',
    fontSize: hp('5%'),
  },
  image: {
    position: 'relative',
    width: wp('50%'), // Modifier selon les besoins
  },
  b: {
    position: "absolute",
    top: wp('15%'),
    margin: wp('10%'),
    width: hp('40%'), // Modifier selon les besoins
    height: hp('40%'), // Modifier selon les besoins
  },
  h: {
    position: 'absolute',
    top: hp('12%'),
    width: hp('40%'), // Modifier selon les besoins
    height: hp('40%'), // Modifier selon les besoins
  },
  text: {
    position: 'relative',
    fontSize: wp('6%'), // Modifier selon les besoins
    top: hp('47%'),
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#167CB0',
    marginHorizontal: wp('26%'), // Modifier selon les besoins
  },
  texte: {
    position: 'relative',
    top: hp('47%'),
    marginHorizontal: wp('18%'), // Modifier selon les besoins
    margin: '0%',
    textAlign: 'center',
    fontSize: hp('2.5%'), // Modifier selon les besoins
    fontFamily: 'serif',
    color: '#0F120F'
  }
});

export { t };
