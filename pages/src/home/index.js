import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image, ScrollView, Modal, FlatList, Button, Alert } from 'react-native';
import axios from 'axios';
import styles from './style';

const HomeScreen = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dadosUsuario, setDadosUsuario] = useState([]);
  const { emailUsuario } = route.params;

  console.log('Email recebido da tela de login:', emailUsuario);

  const pegarDados = async () => {
        try {
         const dados = await axios.get(`http://127.0.0.1:8000/api/usuarios?email=${emailUsuario}`);

          console.log('Resposta da API:', dados.data);
    
          const usuario = dados.data;
          
          if (!usuario.cepUsuario) {
            console.warn('CEP do usuário está vazio!');
            return;
          }

          const respostaCep = await axios.get(`https://viacep.com.br/ws/${usuario.cepUsuario}/json/`);
          const ubs = respostaCep.data;
          
          const dadosFiltrados = [{
            id: usuario.id,
            nome: usuario.nome,
            cartaoSus: usuario.cartao_sus,
            unidade: `UBS - ${ubs.localidade}, ${ubs.uf}`,
            proxConsulta: `10/05/2025 - ${ubs.localidade}`,
          }];

          setDadosUsuario(dadosFiltrados);
        
        } catch (erro) {
          console.error('Erro na requisição:', erro);
          Alert.alert('Erro', 'Erro ao conectar com o servidor.');
        }
  };

  useEffect(() => {
    if (emailUsuario) {
      pegarDados();
    }
  }, [emailUsuario]);

  const sectionNoticias = [
    {
      id: 1,
      imagem: 'https://plus.unsplash.com/premium_photo-1674760950936-32bbf3a82357?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      texto: 'Nova campanha de vacinação ',
    },
    {
      id: 2,
      imagem: 'https://media.istockphoto.com/id/1585069532/pt/foto/portrait-of-a-doctor-listening-to-a-patients-heartbeat.webp?a=1&b=1&s=612x612&w=0&k=20&c=Fg4OyqhTUrCuWZ5c7XfuA6mSWafi5oBEmzll4hKv8Oo=',
      texto: 'Cuidados essenciais para um coração saudável',
    },
    {
      id: 3,
      imagem: 'https://th.bing.com/th/id/OIP.hy6oIkJlwV4yFR54d_FkXQHaE8?w=271&h=180&c=7&r=0&o=5&pid=1.7',
      texto: 'Exercícios físicos essenciais para a saúde mental',
    },
    {
      id: 4,
      imagem: 'https://th.bing.com/th/id/OIP.r-hL6W5_gBs1ZFaSlszvNQHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7',
      texto: 'Consultas preventivas: sua saúde em primeiro lugar',
    }
  ];

  const sectionProfissionais = [
    {
      id: 1,
      imagem: 'https://th.bing.com/th/id/OIP.88jYhYjTbdh5E582IpKM-QHaFV?w=249&h=180&c=7&r=0&o=5&pid=1.7',
      texto: 'Dr Drauzio Varella',
    },
    {
      id: 2,
      imagem: 'https://th.bing.com/th/id/OIP.wBhf-Ie1hvGKQLc9gZAjEAHaEw?rs=1&pid=ImgDetMain',
      texto: 'Dra Zilda Arns',
    },
    {
      id: 3,
      imagem: 'https://th.bing.com/th/id/OIP.423jSH4qGU8kdoFEzP-SjwHaE0?w=309&h=201&c=7&r=0&o=5&pid=1.7',
      texto: 'Dr. Ricardo Barbosa',
    },
    {
      id: 4,
      imagem: 'https://th.bing.com/th/id/OIP.xxjZeMFpgy4uCHDmMTuDmgHaGt?w=189&h=188&c=7&r=0&o=5&pid=1.7',
      texto: 'Dra. Mariana Silva',
    }
  ];

  const sectionCampanhas = [
    {
      id: 1,
      imagem: 'https://th.bing.com/th/id/OIP.cOfRvo7SmFDAvMH39ZZAKgHaFN?w=221&h=180&c=7&r=0&o=5&pid=1.7',
      texto: 'Faça parte do SUS+10 e ajude a construir o SUS para todos',
    },
    {
      id: 2,
      imagem: 'https://th.bing.com/th/id/OIP.w78fh1d2knV5dkRaxVsdMwHaDw?w=329&h=177&c=7&r=0&o=5&pid=1.7',
      texto: 'Frente pela vida lança manifesto e campanha em defesa ao SUS'
    },
    {
      id: 3,
      imagem: 'https://th.bing.com/th/id/OIP.xSHL29kxdrj7O0kbOnTDuQHaHc?w=186&h=187&c=7&r=0&o=5&pid=1.7',
      texto: 'Campanha de vacinação infantil (6 meses a 6 anos) contra a gripe',
    },
    {
      id: 4,
      imagem: 'https://th.bing.com/th/id/OIP.bRs5r8PJGYVg1H-ZpaAgvgHaDB?w=349&h=142&c=7&r=0&o=5&pid=1.7',
      texto: 'Trote solidário doação de sangue: sua contribuição salva vidas',
    }
  ];

  const renderSection = ({ item }) => (
    <View style={{ marginRight: 6 }}>
      <Pressable style={styles.newsBox}>
        <Image source={{ uri: item.imagem }} style={styles.newsImage} />
        <Text style={styles.newsText}>{item.texto}</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Navbar Superior */}
      <View style={styles.navSuperior}>
        <Text style={styles.navText}>Bem-vindo, {dadosUsuario.length > 0 ? dadosUsuario[0].nome : 'Usuario'}!</Text>
      </View>

      {/* Modal de Configurações */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Configurações</Text>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.closeModal}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Conteúdo Principal */}
      <ScrollView style={styles.content}>

        {/* Boas-vindas */}
        <View style={styles.welcomeSection}>
          <Image
           source={require('../../../assets/Healthbg.png')}
           style={styles.logo}
          />
          <Text style={styles.wlcomeText}>
            Explore os serviços, notícias e campanhas de saúde disponíveis.
          </Text>
          <View style={styles.welcomesButton}>
            <Button
            title='Calcule IMC'
            onPress={() => navigation.navigate('IMC')}
            color="#6BBF8A"
            />

            <Button
            title='Ver vacinas'
            onPress={() => navigation.navigate('Vacina')}
            color="#6BBF8A"
            />
          </View>
        </View>

        {/* Noticias */}
        <Text style={styles.sectionTitle}>Últimas Notícias</Text>
        <FlatList
          data={sectionNoticias}
          renderItem={renderSection}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 5, gap: 0 }}
        />

        {/* Profissionais da Saúde */}
        <Text style={styles.sectionTitle}>Profissionais da Saúde</Text>
        <FlatList
          data={sectionProfissionais}
          renderItem={renderSection}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 5, gap: 0 }}
        />

        {/* Calendário de Campanhas */}
        <Text style={styles.sectionTitle}>Calendário de Campanhas</Text>
        <FlatList
          data={sectionCampanhas}
          renderItem={renderSection}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 5, gap: 0 }}
        />

        <Text style={styles.title}>Seus Dados de Saúde</Text>
        {dadosUsuario.length > 0 && (
        <View style={styles.perfil}>
          <Text style={styles.info}><Text style={styles.bold}>Nome:</Text> {dadosUsuario[0].nome}</Text>
          <Text style={styles.info}><Text style={styles.bold}>Cartão SUS:</Text> {dadosUsuario[0].cartaoSus}</Text>
          <Text style={styles.info}><Text style={styles.bold}>Unidade:</Text> {dadosUsuario[0].unidade}</Text>
          <Text style={styles.info}><Text style={styles.bold}>Próxima Consulta:</Text> {dadosUsuario[0].proxConsulta}</Text>
        </View>
      )}


      </ScrollView>

      {/* Navbar Inferior */}
      <View style={styles.navInferior}>
        <Pressable
          onPress={() => navigation.navigate('Home')}
          android_ripple={{ color: '#E0E0E0' }}
          style={styles.navItem}>
          <Image source={require('../../../assets/home.png')} style={styles.navIconInf} />
          <Text style={styles.navTextInferior}>Home</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('IMC')}
          android_ripple={{ color: '#E0E0E0' }}
          style={styles.navItem}>
          <Image source={require('../../../assets/imc.png')} style={styles.navIconInf} />
          <Text style={styles.navTextInferior}>IMC</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('Vacina')}
          android_ripple={{ color: '#E0E0E0' }}
          style={styles.navItem}>
          <Image source={require('../../../assets/vacina.png')} style={styles.navIconInf} />
          <Text style={styles.navTextInferior}>Vacina</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;
