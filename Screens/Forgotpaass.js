  
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,TextInput
} from "react-native";

// import { TextInput } from 'react-native-gesture-handler';

import {scale, verticalScale, moderateScale, width} from "./style"

const { width: WIDTH, height: HEIGHT  } = Dimensions.get("window");
import { Component } from "react";

const LoginScreen2 = ({ errorText, navigation, ...props }) => {
  const [show, setshow] = React.useState(false);
  const [visible, setVisible] = React.useState(true)
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [name, setName] = useState({ value: "", error: "" });
  //const [press, showPass] = useState(true);


  const _onSignUpPressed = async () => {
    navigation.navigate("product")

    
  };





  return (
    <View style={styles.container}>
      
      <Image
        style={{
          height: "30%",
          width: "100%",
top:verticalScale(-10)
        }}
        source={require("../assets/coverde.jpeg")}
      ></Image>
      <View style={{top:verticalScale(90),
}}>
     <Text style={{left:scale(40),color:"#808080"}}>Type usename or email</Text>

        <TextInput       
  textContentType="emailAddress"
          keyboardType="email-address"
          placeholder={""}
          style={styles.textBox} /></View>
          
          <View style={{alignItems:"flex-start",top:verticalScale(170)}}>
      <TouchableOpacity 
                onPress={() => navigation.navigate("LoginScreen")}

        style={{    justifyContent: "center",borderRadius:10,left:scale(40),
 paddingRight:scale(50),paddingLeft:scale(50),backgroundColor:"rgba(115,149,160,255)",height:verticalScale(80)}}>
        <Text style={{ color:"#fff",fontSize:20,  fontWeight:"bold" }}
        >Send</Text>
       
      </TouchableOpacity>
      </View>
       
        
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "#FFFFFF",
  },
  textBox: {
    left:scale(40),
        elevation: 9,
    paddingLeft:10,
top:verticalScale(10),
width:width/1.2,
    fontSize: 22,
    height: verticalScale(110),
    backgroundColor: '#fff',
  // backgroundColor:"#FFFF",
borderRadius:10,
  color: 'black',
  borderColor:"#fff",
  fontSize:20,
  borderWidth:2,
  borderColor:"black"
  },
  
  Textinput: {
    width: WIDTH - 50,
    height: 45,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",


    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
    fontSize: 16,
  },
  inputIcons: {
    position: "absolute",
    top: HEIGHT-655,
    left: 20,
    elevation:10,
    color:"#808080"


  },
  inputContainer1: {
    marginTop: 20,
    top: 25,
    //position: "absolute",
  },
  inputContainer2: {
    marginTop: 50,
    top: -25,
    // position: "absolute",
  },

  btneye: {
  left:120,
    top: HEIGHT-735,
    elevation:9
  },
  Signin:{ 
     
    top:65,backgroundColor:"black"},

  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    // backgroundColor: "#432577",
    backgroundColor: "white",
    justifyContent: "center",
    marginTop: 20,
    top: -30,
    borderBottomWidth: 1,

    borderStyle: "solid",
    borderWidth: 2,
    width: 240,
  },
  label1: {
      marginTop:30,
      marginLeft:180,
      color:"#808080",
      alignItems:"flex-end"


  },
  label2: {
 alignContent:"center",
 fontSize:20,
    color:"#808080",



},
textlabe2:{
    top:-57,
},
  text: {
    color: "darkblue",
    fontSize: 21,
    textAlign: "center",
    fontWeight: "bold",
  },
  error: {
    fontSize: 14,
    color: "#FF0000",
    paddingHorizontal: 4,
    paddingTop: 4,
  },
  errorview: {
    fontSize: 100,
  },
  label: {
    fontSize: 26,
    color: "#ffff",
    fontWeight: "bold",
    right: -89,
    bottom: 40,
    position: "absolute",
  },
  container2: {
    fontSize: 30,
    bottom: 280,
    position: "absolute",
  },
  textlabel: {
    position: "absolute",
    alignItems:"center",
    left:115,
    fontFamily: "sans-serif",

  },
  forgotPassword: {
    width: "100%",

    alignItems: "flex-end",
    marginBottom: 24,
    top: HEIGHT-790,
    right: 15
  },
  account: {
    width: "100%",
    alignItems: "center",
    top: HEIGHT-646,
  },
});
export default LoginScreen2;