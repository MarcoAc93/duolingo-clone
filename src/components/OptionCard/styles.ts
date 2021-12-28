import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  optionContainer: {
    // border
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderRadius: 10,
    borderBottomWidth: 4,

    // size
    width: '48%',
    height: '48%',

    alignItems: 'center'
  },
  optionImage: {
    width: '100%',
    flex: 1
  },
  optionText: {
    fontWeight: 'bold',
  },
  selectedContainer: {
    backgroundColor: '#DDF4FE',
    borderColor: '#81D5FE'
  },
  selectedText: {
    color: '#40BEF7',
    fontWeight: 'bold',
  }
});
