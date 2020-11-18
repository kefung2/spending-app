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
    alignSelf:"center",
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  profile:{
    width: 200, 
    height: 200,
    alignSelf:"center",
    // borderColor: 'black',
    // borderWidth: 1,
  },
  historyButton:{
    flex: 1,
    width: 200,
    alignSelf:"center",
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  updateButton:{
    flex: 1,
    width: 200,
    alignSelf:"center",
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 1,
  }
});