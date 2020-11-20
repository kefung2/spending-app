import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
  profileIcon:{
    flex: 2,
    width: 300,
    bottom: 40,
    alignSelf:"center",
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  profile:{
    width: 250, 
    height: 250,
    alignSelf:"center",
    // borderColor: 'black',
    // borderWidth: 1,
  },
  historyButton:{
    flex: 1,
    width: 200,
    bottom: 40,
    alignSelf:"center",
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  updateButton:{
    flex: 1,
    width: 200,
    bottom: 105,
    alignSelf:"center",
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 1,
  }
});