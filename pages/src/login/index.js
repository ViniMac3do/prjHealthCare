import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { Image } from 'expo-image';
import styles from './style';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
    alert('Login realizado com sucesso!');
  };

  return (
    <LinearGradient
      colors={['#fff', '#81C784', '#2E7D32']}
      locations={[0.3, 0.6, 0.9]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/* Logo */}
      <Animatable.View animation="fadeInDown" duration={1000}>
        <Image
          source={require('../../../assets/logobg.png')}
          style={styles.logo} 
        />
      </Animatable.View>

      {/* Formulário */}
      <Animatable.View animation="fadeInUp" duration={1000} delay={300}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button
          title="Entrar"
          onPress={() => navigation.navigate('Home')}
          color="#6BBF8A"
        />

        <Pressable onPress={() => navigation.navigate('Loading')}>
          <Text style={styles.link}>Voltar para o início</Text>
        </Pressable>
      </Animatable.View>
    </LinearGradient>
  );
};

export default LoginScreen;
