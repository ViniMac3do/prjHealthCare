import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/src/home';
import IMCScreen from './pages/src/imc';
import VacinaScreen from './pages/src/vacinas';
import LoadingScreen from './pages/src/loading';
import LoginScreen from './pages/src/login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{ headerShown: false }} // Remove o header padrão
      >
        {/* Certifique-se de que apenas <Stack.Screen> sejam filhos diretos */}
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IMC" component={IMCScreen} />
        <Stack.Screen name="Vacina" component={VacinaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}