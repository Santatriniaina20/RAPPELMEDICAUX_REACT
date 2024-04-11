import { StyleSheet, StatusBar, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: hp('20%'),
    backgroundColor: '#9925be',
    position: 'relative',
    height: hp('8%'),
    width: wp('50%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('65%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 7,
  },
  fullScreen: {
    flex: 1,
    height: hp('100%'),
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  transparentStatusBar: {
    ...Platform.select({
      android: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: StatusBar.currentHeight,
        backgroundColor: 'white',
      },
      ios: {
        backgroundColor: 'transparent',
      },
    }),
  },
});

export { s };

