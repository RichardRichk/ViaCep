import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { ContainerApp } from './styles';
import { Header } from './src/components/Header/Index';
import { Home } from './src/screens/Home';
import { useState } from 'react';

export default function App() {


  const [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium, Roboto_700Bold
  })
  
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ContainerApp>
      
      <Header />

      <Home/>

      <StatusBar 
      style="auto" 
      backgroundColor="#fecc2b"
      translucent={true}
      />

    </ContainerApp>
  );
}

