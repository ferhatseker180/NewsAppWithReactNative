import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },

  innerContainer: {
    padding: 5,
  },

  imageStyle: {
    width: '100%',
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  descriptionStyle: {
    marginTop: 3,
  },

  authorStyle: {
    fontStyle: 'italic',
    textAlign : 'right',
  },
});
