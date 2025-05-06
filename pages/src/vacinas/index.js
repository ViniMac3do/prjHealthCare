import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Modal,
  TextInput,
  Button,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { SearchBar } from '@rneui/themed';
import styles from './style';
import axios from 'axios';

const VacinaScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [mostrarModal, setMostrarModal] = useState(false);
  const [vacinaSelecionada, setVacinaSelecionada] = useState(null);
  const [cep, setCep] = useState('');
  const [postosProximos, setPostosProximos] = useState([]);
  const [carregando, setCarregando] = useState(false);

  const listaVacinas = [
      {
        id: 1,
        tipo: 'VACINA GERAL',
        nome: 'Influenza (Gripe)',
        faixa: '6 meses - Idosos',
        resumo: 'Protege contra os vírus da gripe mais comuns. Recomendação anual.',
        imagem: 'https://th.bing.com/th/id/OIP.mgn-Pn7o3F9KGnB1WJ1h9wHaGN?w=193&h=180&c=7&r=0&o=5&pid=1.7',
        detalhes: 'Eficácia de 40-60% contra hospitalizações. Disponível gratuitamente no SUS para grupos prioritários.',
        imagensDoencas: {
          influenza: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=500&q=80'
        }
      },
      {
        id: 2,
        tipo: 'VACINA PARA CRIANÇAS',
        nome: 'Tríplice Viral',
        faixa: '12 meses - 49 anos',
        resumo: 'Protege contra sarampo, caxumba e rubéola. Dose única na infância.',
        imagem: 'https://th.bing.com/th/id/OIP.N6v-I7gwt_MDtEAlbPSUCAHaEw?w=303&h=195&c=7&r=0&o=5&pid=1.7',
        detalhes: 'Eficácia superior a 90%. Segunda dose entre 15-24 meses. Adultos não vacinados devem tomar 1 dose.',
        imagensDoencas: {
          sarampo: 'https://www.cdc.gov/measles/images/measles-virus.jpg',
          caxumba: 'https://www.cdc.gov/mumps/images/mumps-virus.jpg',
          rubeola: 'https://www.cdc.gov/rubella/images/rubella-virus.jpg'
        }
      },
      {
        id: 3,
        tipo: 'VACINA PARA CRIANÇAS',
        nome: 'Pentavalente',
        faixa: '2 meses - 6 anos',
        resumo: 'Protege contra difteria, tétano, coqueluche, hepatite B e Haemophilus influenzae tipo b.',
        imagem: 'https://th.bing.com/th/id/OIP.gZPy8p70mfT-v5U_Vxe5iwHaEK?w=308&h=180&c=7&r=0&o=5&pid=1.7',
        detalhes: 'Eficácia elevada para todas as doenças incluídas. Esquema de 3 doses: aos 2, 4 e 6 meses, com reforços conforme o calendário vacinal.',
        imagensDoencas: {
          difteria: 'https://www.cdc.gov/diphtheria/images/diphtheria-bacteria.jpg',
          tetano: 'https://www.cdc.gov/tetanus/images/tetanus-bacteria.jpg',
          coqueluche: 'https://www.cdc.gov/pertussis/images/pertussis-bacteria.jpg',
          hepatiteB: 'https://www.cdc.gov/hepatitis/images/hepatitis-b-virus.jpg',
          haemophilus: 'https://www.cdc.gov/hi-disease/images/haemophilus-influenzae.jpg'
        }
      },
      {
        id: 4,
        tipo: 'VACINA PARA CRIANÇAS',
        nome: 'Poliomielite (VIP/VOP)',
        faixa: '2 meses - 5 anos',
        resumo: 'Previne a poliomielite (paralisia infantil).',
        imagem: 'https://th.bing.com/th/id/OIP.g3ZQyOpGjvGeDkn1Axm5uQHaEK?w=284&h=180&c=7&r=0&o=5&pid=1.7',
        detalhes: 'Eficácia superior a 90%. Esquema de 3 doses com reforços conforme o calendário vacinal.',
        imagensDoencas: {
          poliomielite: 'https://www.cdc.gov/polio/images/polio-virus.jpg'
        }
      },
      {
        id: 5,
        tipo: 'VACINA PARA CRIANÇAS',
        nome: 'Rotavírus',
        faixa: '2 meses - 7 meses',
        resumo: 'Previne gastroenterites causadas por rotavírus.',
        imagem: 'https://th.bing.com/th/id/OIP.VNOa05gIyA3jNIWlKSFnGQHaE8?w=229&h=180&c=7&r=0&o=5&pid=1.7',
        detalhes: 'Eficácia de 85-98% contra formas graves. Esquema de 2 doses: aos 2 e 4 meses.',
        imagensDoencas: {
          rotavirus: 'https://www.cdc.gov/rotavirus/images/rotavirus.jpg'
        }
      },
      {
        id: 6,
        tipo: 'VACINA PARA CRIANÇAS',
        nome: 'Pneumocócica 10-valente',
        faixa: '2 meses - 5 anos',
        resumo: 'Previne doenças invasivas causadas por Streptococcus pneumoniae.',
        imagem: 'https://th.bing.com/th?q=Pneumoc%c3%b3cica+10&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=strict&t=1&mw=247',
        detalhes: 'Eficácia de 80-90% contra doenças graves. Esquema de 3 doses: aos 2, 4 e 6 meses, com reforço aos 12 meses.',
        imagensDoencas: {
          pneumococo: 'https://www.cdc.gov/pneumococcal/images/pneumococcus.jpg'
        }
      },
      {
        id: 7,
        tipo: 'VACINA PARA CRIANÇAS',
        nome: 'Meningocócica C',
        faixa: '3 meses - 5 anos',
        resumo: 'Previne meningite e outras doenças causadas pela Neisseria meningitidis do sorogrupo C.',
        imagem: 'https://th.bing.com/th/id/OIP.IdLuD5YVz9dtYbyz3BK3cgHaE1?w=294&h=191&c=7&r=0&o=5&pid=1.7',
        detalhes: 'Eficácia de 85-100% contra doenças invasivas. Esquema de 2 doses: aos 3 e 5 meses, com reforço aos 12 meses.',
        imagensDoencas: {
          meningococoC: 'https://www.cdc.gov/meningococcal/images/meningococcus.jpg'
        }
      },
      {
        id: 8,
        tipo: 'VACINA PARA CRIANÇAS',
        nome: 'Febre Amarela',
        faixa: '9 meses - 59 anos',
        resumo: 'Previne a febre amarela, doença viral transmitida por mosquitos.',
        imagem: 'https://th.bing.com/th/id/OIP.Fxx9S105L6bnCfbfKN9PBgHaEc?w=295&h=180&c=7&r=0&o=5&pid=1.7',
        detalhes: 'Eficácia de 95-99%. Dose única a partir dos 9 meses, com reforço aos 4 anos.',
        imagensDoencas: {
          febreAmarela: 'https://www.cdc.gov/yellowfever/images/yellow-fever-virus.jpg'
        }
      }];

  const buscarPostos = async () => {
    if (!cep || cep.length < 8) {
      alert('Por favor, digite um CEP válido');
      return;
    }

    try {
      setCarregando(true);
      const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (resposta.data.erro) {
        alert('CEP inválido! Tente novamente.');
        setCarregando(false);
        return;
      }

      setTimeout(() => {
        setPostosProximos([
          `UBS Saúde Central - ${resposta.data.localidade}, ${resposta.data.uf}`,
          'Posto de Saúde Familiar Jardim das Flores',
          'Hospital Municipal Dr. José Silva',
        ]);
        setCarregando(false);
      }, 1000);
    } catch (error) {
      alert('Erro ao buscar o CEP. Tente novamente.');
      setCarregando(false);
    }
  };

  {/*Funçao que deixa os nomes das vacinas em minusculo para auxiliar o search */}
  const vacinasFiltradas = listaVacinas.filter((item) =>
    item.nome.toLowerCase().includes(search.toLowerCase()) ||
    item.tipo.toLowerCase().includes(search.toLowerCase())
  );

  const renderVacina = ({ item }) => (
    <Pressable
      onPress={() => {
        setVacinaSelecionada(item);
        setMostrarModal(true);
        setCep('');
        setPostosProximos([]);
      }}
      android_ripple={{ color: '#D6F5E3' }}
      style={styles.template}
    >
      <View style={styles.esq}>
        <Text style={styles.tit}>{item.tipo}</Text>
        <Text style={styles.titulo}>{item.nome}</Text>
        <Text style={styles.idade}>{item.faixa}</Text>
        <Text style={styles.desc}>{item.resumo}</Text>
      </View>
      <View style={styles.dir}>
        <Image source={{ uri: item.imagem }} style={styles.imagemVacina} />
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.navSuperior}>
        <Text style={styles.navText}>Veja informações sobre as vacinas</Text>
      </View>

      <ScrollView style={styles.scrollContainer} keyboardShouldPersistTaps="handled">

        {/*Barra de search */}
        <SearchBar
          placeholder="Buscar vacinas..."
          onChangeText={setSearch}
          value={search}
          platform="default"
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInputContainer}
          inputStyle={styles.searchInput}
          searchIcon={{ color: '#6BBF8A' }}
          clearIcon={{ color: '#6BBF8A' }}
        />

        <View style={styles.dividerLine} />
        <Text style={styles.title}>Conteúdo sobre Vacinas</Text>

        <FlatList
          data={vacinasFiltradas}
          renderItem={renderVacina}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
        />
      </ScrollView>

      <Modal animationType="slide" transparent visible={mostrarModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {vacinaSelecionada && (
              <>
                <Image source={{ uri: vacinaSelecionada.imagem }} style={styles.modalImage} />
                <Text style={styles.modalTitle}>{vacinaSelecionada.nome}</Text>
                <Text style={styles.modalSub}>{vacinaSelecionada.faixa}</Text>
                <Text style={styles.modalDesc}>{vacinaSelecionada.resumo}</Text>
                <Text style={styles.modalDetails}>{vacinaSelecionada.detalhes}</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Digite seu CEP"
                  value={cep}
                  onChangeText={setCep}
                  keyboardType="numeric"
                  maxLength={8}
                />

                <View style={{ marginTop: 8 }}>
                  <Button title="Buscar Postos Próximos" onPress={buscarPostos} color="#6BBF8A" />
                </View>

                {carregando ? (
                  <ActivityIndicator size="large" color="#6BBF8A" style={{ marginTop: 10 }} />
                ) : (
                  postosProximos.length > 0 && (
                    <View style={styles.postosContainer}>
                      <Text style={styles.postosTitle}>Postos Próximos:</Text>
                      {postosProximos.map((p, i) => (
                        <Text key={i} style={styles.postosItem}>• {p}</Text>
                      ))}
                    </View>
                  )
                )}

                <View style={{ marginTop: 10 }}>
                  <Button title="Fechar" onPress={() => setMostrarModal(false)} color="#6BBF8A" />
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>

      <View style={styles.navInferior}>
        <Pressable 
          onPress={() => navigation.navigate('Home')} 
          android_ripple={{ color: '#E0E0E0' }} style={styles.navInfItem}>
          <Image source={require('../../../assets/home.png')} style={styles.navInfImage} />
          <Text style={styles.navInfText}>Home</Text>
        </Pressable>

        <Pressable 
          onPress={() => navigation.navigate('IMC')} 
          android_ripple={{ color: '#E0E0E0' }} style={styles.navInfItem}>
          <Image source={require('../../../assets/imc.png')} style={styles.navInfImage} />
          <Text style={styles.navInfText}>IMC</Text>
        </Pressable>

        <Pressable 
          onPress={() => navigation.navigate('Vacina')} 
          android_ripple={{ color: '#E0E0E0' }} style={styles.navInfItem}>
          <Image source={require('../../../assets/vacina.png')} style={styles.navInfImage} />
          <Text style={styles.navInfText}>Vacina</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default VacinaScreen;
