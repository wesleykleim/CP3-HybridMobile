import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/views/LoginScreen';
import Cadastro from './src/views/CadastrarScreen';
import Lista from './src/views/ListarScreen';
import api from './services/api';




const Stack = createNativeStackNavigator();

const App = () => {
  // const [usuario, setUs] = useState([])
  // use 
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
        <Stack.Screen name='Lista' component={Lista}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;