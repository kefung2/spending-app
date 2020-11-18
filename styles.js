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
    width: 60,
    height: 60,
    left: 5,
    top: 5,
    position: 'absolute',
    borderColor: 'black',
    borderWidth: 1,
  },
  balenceView: {
    width: 200,
    height: 100,
    bottom: 120,
    alignItems: "center",
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  balenceText:{
    fontSize: 50,
    fontWeight: "bold",
    alignSelf:"center",
    borderColor: 'black',
    borderWidth: 1,
  },
  inputView: {
    width: 200,
    height: 100,
    bottom: 80,
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
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
    width: 100,
    height: 100,
    bottom: 50,
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 1,
  },
  profile:{
    width: 50, 
    height: 50,
    alignSelf:"center",
  }
});