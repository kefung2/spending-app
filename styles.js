import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
  icon: {
    flex: 1,
    width: 24,
    height: 24,
    left: 5,
    top: 5,
    position: 'absolute',
  },
  balenceView: {
    flex: 1,
    width: 200,
    height: 10,
    top: 90,
    alignItems: "center",
  },
  balenceText:{
    fontSize: 50,
    fontWeight: "bold",
    alignSelf:"center",
  },
  inputView: {
    flex: 1,
    width: 100,
    height: 10,
    top: 20,
  },
  input: {
    backgroundColor: 'silver',
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    width: 200,
    padding: 10,
    borderRadius: 4,
    alignSelf: "center",
  },
  buttonView: {
    flex: 1,
    width: 100,
    height: 10,
    top: 10,
  },
  button: {
    marginTop: 40,
    color: 'black',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  profile:{
    width: 50, 
    height: 50,
    position: 'absolute',
    left: 20,
    right: 0,
    top: 30,
    bottom: 0,
  }
});