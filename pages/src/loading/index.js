import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { Image } from 'expo-image';
import styles from './style';

const alturaTela = Dimensions.get('window').height;

const LoadingScreen = ({ navigation }) => {
  const [mostrarConteudo, setMostrarConteudo] = useState(true);
  const [iniciarAnimacao, setIniciarAnimacao] = useState(false);

  const iniciarAnimacaoGradiente = () => {
    setTimeout(() => {
      setIniciarAnimacao(true); // Sobe o gradiente
      setMostrarConteudo(false);   // Esconde a logo e o "loading"

      setTimeout(() => {
        navigation.replace('Login'); // Vai para a tela de login após 1,5 segundos
      }, 1500);
    }, 5000); // Espera 5 segundos antes de iniciar a animação
  };

  return (
    <View style={styles.container}>
      {/* Logo com animação de Fade-in */}
      {mostrarConteudo && (
        <Animatable.View
          animation="fadeIn"
          duration={5000} // Animação dura 5 segundos
          onAnimationEnd={iniciarAnimacaoGradiente} // Chama a função após o fim da animação
        >
          <Image
            source={require('../../../assets/Healthbg.png')}
            style={styles.logo}
          />
        </Animatable.View>
      )}

      {/* Gradiente começa da metade da tela */}
      <Animatable.View
        animation={
          iniciarAnimacao
            ? {
                from: { height: alturaTela / 2 }, // Começa da metade da tela
                to: { height: alturaTela }, // Sobe para cobrir toda a tela
              }
            : undefined
        }
        duration={1000} // Animação dura 1 segundo
        style={[ 
          styles.gradientContainer,
          {
            height: iniciarAnimacao ? alturaTela : alturaTela / 2, // Altera altura com base na animação
            overflow: 'hidden',
          },
        ]}
      >
        <LinearGradient
          colors={['#fff', '#81C784', '#2E7D32']} // Definindo as cores do gradiente
          locations={[0.3, 0.6, 0.9]} // Onde as cores vão se misturar
          style={[styles.gradient, { flex: 1 }]}
        >
          {/* Conteúdo do "loading" desaparece com animação de Fade-out */}
          {mostrarConteudo && (
            <Animatable.View animation="fadeIn" duration={3000}>
              <View style={styles.loadingContent}>
                <Text style={styles.loadingText}>Loading</Text>
                <Image
                  source={require('../../../assets/gifs/loading-intermediario.gif')}
                  style={styles.loadingGif}
                  tintColor={"white"}
                  contentFit="contain"
                />
              </View>
            </Animatable.View>
          )}
        </LinearGradient>
      </Animatable.View>
    </View>
  );
};

export default LoadingScreen;
