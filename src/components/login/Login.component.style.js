import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    padding: 12,
  },
  input: {
    borderWidth: 0.5,  // size/width of the border
    borderColor: 'black',  // color of the border
    borderRadius: 4,
    paddingLeft: 10,
    height: 50,
    margin: 12
  },
  button: {
    margin: 12,
    backgroundColor: 'green',
    padding: 50
  },

  loginScreenButton: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#000000',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  }
});