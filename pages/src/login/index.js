import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { Image } from 'expo-image';
import axios from 'axios';
import styles from './style';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validarDados = () => {
    if (!senha || !email) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return false;
    }

    if (senha.length < 6) {
      Alert.alert('Erro', 'A senha precisa ter pelo menos 6 caracteres.');
      return false;
    }

    return true;
  };

  const verificarLogin = async () => {
    if (!validarDados()) return;

    setCarregando(true);

    try {
      const resposta = await axios.get('http://127.0.0.1:8000/api/usuarios'); // ← Substitua pelo seu IP local

      console.log('Resposta da API:', resposta.data);

      const usuarios = resposta.data;

      const usuarioEncontrado = usuarios.find(
        (usuario) =>
          usuario.email === email &&
          usuario.senha === senha
      );

      if (usuarioEncontrado) {
        Alert.alert('Sucesso', 'Login bem-sucedido!');
        navigation.navigate('Home', { emailUsuario: email });
      } else {
        Alert.alert('Erro', 'Email ou senha incorretos.');
      }
    } catch (erro) {
      console.error('Erro na requisição:', erro);
      Alert.alert('Erro', 'Erro ao conectar com o servidor.');
    }

    setCarregando(false);
  };
  

  return (
    <LinearGradient
      colors={['#fff', '#81C784', '#2E7D32']}
      locations={[0.3, 0.6, 0.9]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Animatable.View animation="fadeInDown" duration={1000}>
        <Image
          source={require('../../../assets/logobg.png')}
          style={styles.logo}
        />
      </Animatable.View>

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
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        {errorMessage ? (
          <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text>
        ) : null}

        <Button
          title={carregando ? 'Entrando...' : 'Entrar'}
          onPress={verificarLogin}
          color="#6BBF8A"
        />

        <Pressable onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.link}>Não possui uma conta? Cadastre-se já!</Text>
        </Pressable>
      </Animatable.View>
    </LinearGradient>
  );
};

export default LoginScreen;
