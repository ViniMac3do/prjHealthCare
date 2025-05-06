import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fundo branco para a tela toda
  },
  logo: {
    width: 450,
    height: 450,
    alignSelf: 'center', // Centraliza horizontalmente
    marginTop: 20, // Espaço superior
  },
  gradientContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContent: {
    flexDirection: 'row', // Texto + GIF lado a lado
    alignItems: 'center',
  },
  loadingGif: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  loadingText: {
    fontSize: 24,
    color: '#fff', // Texto branco sobre gradiente
    fontWeight: 'bold',
  },
});

export default styles;
