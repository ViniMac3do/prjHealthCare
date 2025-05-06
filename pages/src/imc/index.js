import React, { useState } from 'react';
import {  View, Text, TextInput,  Button,  Image, ScrollView, Pressable,
} from 'react-native';
import styles from './style';

const IMCScreen = ({ navigation }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setImc] = useState(null);

  const calculateIMC = () => {
    const weightFloat = parseFloat(weight);
    const heightFloat = parseFloat(height) / 100;
    const imcValue = (weightFloat / (heightFloat * heightFloat)).toFixed(2);
    setImc(imcValue);
  };

  return (
    <View style={styles.container}>
      {/* Navbar Superior */}
      <View style={styles.navSuperior}>
        <Text style={styles.navText}>Calcule seu IMC e acompanhe sua saúde</Text>
      </View>

      {/* Conteúdo Principal */}
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
        <TextInput
          style={styles.input}
          placeholder="Altura (cm)"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
        <Button title="Calcular IMC" onPress={calculateIMC} color="#2E7D32" />
        {imc && <Text style={styles.result}>Seu IMC é: {imc}</Text>}

        {/* Seção Informativa */}
        
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>O que é IMC?</Text>
          <Text style={styles.infoText}>
            O IMC (Índice de Massa Corporal) é uma medida que relaciona o peso e a altura de uma pessoa para avaliar se ela está dentro de um peso considerado saudável. Ele é calculado dividindo o peso (em quilos) pela altura ao quadrado (em metros).
          </Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Por que o IMC é importante?</Text>
          <Text style={styles.infoText}>
            Saber o seu IMC ajuda a identificar riscos de saúde relacionados ao peso, como obesidade, desnutrição, doenças cardíacas e diabetes. Manter o IMC dentro da faixa adequada é essencial para garantir mais qualidade de vida e prevenir problemas futuros.
          </Text>
        </View>

        <View style={styles.infoSection}>
        <Image
            source={{ uri: 'https://lirp.cdn-website.com/451f53a3/dms3rep/multi/opt/tabela_IMC-1920w.png' }}
            style={{ width: '100%', height: 200, marginTop: 10, marginBottom: 10 }}
            resizeMode="cover"
          />
        </View>

      </View>
      </ScrollView>

      {/* Navbar Inferior */}
      <View style={styles.navInferior}>
        <Pressable 
          onPress={() => navigation.navigate('Home')} style={styles.navInfItem}>
          <Image source={require('../../../assets/home.png')} style={styles.navInfImage} />
          <Text style={styles.navInfText}>Home</Text>
        </Pressable>

        <Pressable 
          onPress={() => navigation.navigate('IMC')} style={styles.navInfItem}>
          <Image source={require('../../../assets/imc.png')} style={styles.navInfImage} />
          <Text style={styles.navInfText}>IMC</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('Vacina')} style={styles.navInfItem}>
          <Image source={require('../../../assets/vacina.png')} style={styles.navInfImage} />
          <Text style={styles.navInfText}>Vacina</Text>
        </Pressable>
      </View>

    </View>
  );
};

export default IMCScreen;
