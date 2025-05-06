import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  // Navbar Superior
  navSuperior: {
    backgroundColor: '#2E7D32',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 10,
    position: 'absolute',
    top: 0,
    zIndex: 10,
  },
  navText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  navIcon: {
    width: 30,
    height: 30,
    tintColor: '#ffffff',
  },

  // Conteúdo Principal
  content: {
    flex: 1,
    padding: 20,
    marginTop: 80, // espaço para navbar superior
    marginBottom: 90, // espaço para navbar inferior
  },

  scrollContainer: {
    flex: 1,
    width: '100%',
  },

  input: {
    width: '100%',
    height: 45,
    borderColor: '#2E7D32',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 18,
    backgroundColor: '#fff',
    marginBottom: 10,
  },

  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
  },

  // Seções Informativas
  infoSection: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
  },

  // Navbar Inferior
  navInferior: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 8,
    width: '100%',
  },
  navInfItem: {
    alignItems: 'center',
    padding: 8,
  },
  navInfImage: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navInfText: {
    color: '#6BBF8A',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
