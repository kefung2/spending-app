import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
  updateButton: {
    width: 100,
    height: 100,
    bottom: 90,
    justifyContent: 'center',
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  inputView: {
    flex: 1,
    width: 400,
    height: 600,
    bottom: 30,
    justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  input: {
    backgroundColor: 'silver',
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    width: 300,
    padding: 10,
    borderRadius: 4,
    alignSelf: "center",
  },
  incomeText: {
    fontSize: 50,
    fontWeight: "bold",
    alignSelf:"center",
  }
});