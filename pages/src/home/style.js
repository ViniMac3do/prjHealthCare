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
  },
  navText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  navIcon: {
    width: 30,
    height: 30,
    tintColor: '#ffffff',
  },

  logo: {
    width: 425, 
    height: 250,
    marginBottom: 5,
  },

  welcomeSection: {
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    
  },
  wlcomeText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginTop: 10,
  },
  welcomesButton: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginTop: 20,
    marginVertical: 10,
    
  },

  // Modal de Configurações
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeModal: {
    marginTop: 10,
    fontSize: 16,
    color: '#0077B6',
  },

  // Conteúdo Principal
  content: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  perfil: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3, 
    shadowColor: '#000', // para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },

  // Seção de Serviços
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 10,
  },
  serviceBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  serviceIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  serviceText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Notícias
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6BBF8A',
  },
  newsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    justifyContent: 'space-between',
    
  },
  newsBox: {
    width: 220, // ou outro valor fixo como 180, 220 etc.
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  
  newsImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    marginBottom: 10,
  },
  newsText: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  // Navbar Inferior
  navInferior: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 8,
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
    padding: 8,
  },
  navIconInf: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navTextInferior: {
    color: '#6BBF8A',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
