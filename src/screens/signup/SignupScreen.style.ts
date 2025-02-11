import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3E2723',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFDAB9',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#5D4037',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: '#FFF',
    marginBottom: 5,
  },
  button: {
    width: '100%',
    backgroundColor: '#8B6A46',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  footerText: {
    color: '#FFDAB9',
    marginTop: 20,
  },
  linkText: {
    color: '#FFAB40',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#FF6F61', // Reddish color for errors
    fontSize: 14,
    alignSelf: 'flex-start',
    marginBottom: 10,
    paddingLeft: 5,
  },
});

export default styles;
