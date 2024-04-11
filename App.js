import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Sign from './component/accueil';
import RendezVous from './component/rendezvous';
import Traitement from './component/traitement';
import Hopital from './component/Hopital';
import Contact from './component/contact';
import Accueil from './component/bienvenu';
// import App from '../../App';



const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Accueil} options={{ headerShown: false }} />
        <Stack.Screen name="Sign" component={Sign} options={{ headerShown: false }} />
        <Stack.Screen name="RendezVous" component={RendezVous} options={{ headerShown: false }} />
        <Stack.Screen name="Traitement" component={Traitement} options={{ headerShown: false }} />
        <Stack.Screen name="Hopital" component={Hopital} options={{ headerShown: false }} />
        <Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
