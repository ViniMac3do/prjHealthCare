import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 350, // Tamanho da logo
    height: 180,
    marginBottom: 10, // Espaço abaixo da logo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2E7D32', // Texto em branco
    paddingTop: 40,
  },
  input: {
    width: 350,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // Fundo branco para os inputs
  },
  link: {
    marginTop: 20,
    color: '#fff', // Texto em branco
    textDecorationLine: 'underline',
  },
});

export default styles;