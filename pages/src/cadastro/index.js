import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { Image } from 'expo-image';
import axios from 'axios'; 
import styles from './style';

const CadastroScreen = ({ navigation }) => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [cartaoSus, setCartao] = useState('');
  const [cpfUsuario, setCpfUsuario] = useState('');
  const [cepUsuario, setCepUsuario] = useState('');
  const [fotoUsuario, setFotoUsuario] = useState('');
  const [generoUsuario, setGeneroUsuario] = useState('');

  const [emailUsuario, setEmailUsuario] = useState('');
  const [senhaUsuario, setSenhaUsuario] = useState('');

  const [carregando, setCarregando] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(''); 

   const validarDados = () => {
    if (
      !nomeUsuario ||
      !cartaoSus ||
      !cpfUsuario ||
      !cepUsuario ||
      !generoUsuario ||
      !fotoUsuario ||
      !senhaUsuario ||
      !emailUsuario
    ) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return false;
    }

    if (senhaUsuario.length < 6) {
      Alert.alert('Erro', 'A senha precisa ter pelo menos 6 caracteres.');
      return false;
    }

    return true;
  };

  const cadastrar = async () => {
    if (validarDados()) {
      setCarregando(true); 

      const dadosUsuario = {
        nomeUsuario,
        cartaoSus,
        cpfUsuario,
        cepUsuario,
        generoUsuario,
        fotoUsuario,
        emailUsuario,
        senhaUsuario,
      };

      try {
        const enviarDados = await axios.post('http://127.0.0.1:8000/api/usuarios', dadosUsuario);
        console.log('Resposta da API:', enviarDados.data);
        
        if (enviarDados.data && enviarDados.data.email) {
          Alert.alert('Sucesso', 'Cadastro realizado com sucesso! Volte e logue com seus dados');
          navigation.navigate('Login');
        } else {
          Alert.alert('Erro', 'Erro no cadastro. Tente novamente!'); 
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
        Alert.alert('Erro', 'Erro ao cadastrar. Tente novamente!');
      } finally {
        setCarregando(false); 
      }
    }
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
        <Image source={require('../../../assets/logobg.png')} style={styles.logo} />
      </Animatable.View>

      {/* Formulário */}
      <Animatable.View animation="fadeInUp" duration={1000} delay={300}>
        <Text style={styles.title}>Cadastro</Text>


        {/*Coleta de dados para o cadastro */}
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nomeUsuario}
          onChangeText={setNomeUsuario}
        />
        <TextInput
          style={styles.input}
          placeholder="Cartão SUS"
          value={cartaoSus}
          onChangeText={setCartao}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Cpf"
          value={cpfUsuario}
          onChangeText={setCpfUsuario}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Cep"
          value={cepUsuario}
          onChangeText={setCepUsuario}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Genero"
          value={generoUsuario}
          onChangeText={setGeneroUsuario}
        />
        <TextInput
          style={styles.input}
          placeholder="Foto"
          value={fotoUsuario}
          onChangeText={setFotoUsuario}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={emailUsuario}
          onChangeText={setEmailUsuario}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senhaUsuario}
          onChangeText={setSenhaUsuario}
          secureTextEntry
        />

        {/* Exibir erro caso tenha */}
        {errorMessage ? <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text> : null}

        <Button
          title={carregando ? 'Cadastrando...' : 'Cadastrar'}
          onPress={cadastrar}
          color="#6BBF8A"
          disabled={carregando} // Desabilitar o botão enquanto carrega
        />

        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Voltar para o login</Text>
        </Pressable>
      </Animatable.View>
    </LinearGradient>
  );
};

export default CadastroScreen;
