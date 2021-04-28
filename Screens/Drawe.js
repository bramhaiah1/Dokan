/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from "react";

//Import all required component
import { View, Image, TouchableOpacity } from "react-native";
import  Entypo  from "react-native-vector-icons/Entypo";

import { DrawerActions } from "react-navigation-drawer"

const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.dispatch(DrawerActions.toggleDrawer())
    console.log("hi", DrawerActions.toggleDrawer())
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Entypo name="menu" size={35} color="rgba(115,149,160,255)" />
        
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;
