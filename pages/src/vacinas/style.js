import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 5,
  },
  dividerLine: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  navSuperior: {
    backgroundColor: '#2E7D32',
    width: 450,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
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
  },
  content: {
    flex: 1,
    padding: 16,
    paddingBottom: 0,
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 12,
    marginTop: 70, // Espaçamento para não ficar "preso"
  },
  searchInputContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
  },
  searchInput: {
    color: '#333',
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    width: '100%',
    marginTop: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF7D',
    marginBottom: 12,
    marginLeft: 10,
  },
  template: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    height: 140,
    width: '96%',
    marginLeft: 8,
  },
  esq: {
    flex: 2,
    paddingRight: 12,
  },
  dir: {
    flex: 1,
    borderRadius: 6,
    overflow: 'hidden',
  },
  tit: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#4CAF7D',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
    marginLeft: 1,
  },
  titulo: {
    marginLeft: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
    lineHeight: 18,
  },
  idadeContainer: {
    backgroundColor: '#6BBF8A',
    borderRadius: 10,
    paddingVertical: 1,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  idade: {
    color: '#6BBF8A',
    fontSize: 10,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 12,
    color: '#555',
    lineHeight: 16,
   
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    marginTop: 10,
  },
  postosList: {
    marginTop: 15,
  },
  postoItem: {
    fontSize: 14,
    marginBottom: 8,
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
  closeButtonText: {
    fontWeight: 'bold',
  },
  imagemVacina: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    resizeMode: 'cover',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 80,
  },
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
  buttonSpacing: {
    marginTop: 15,
  }
});
