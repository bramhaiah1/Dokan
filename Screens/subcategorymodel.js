import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableHighlight ,TouchableOpacity,Card
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { createStackNavigator, createAppContainer,navigate,navigation } from "react-navigation";
import {scale, verticalScale, moderateScale} from "./style"
import Category from './categoryfilter'


class ItemCard extends Component {
  
renderitem(item){
  //alert(item.name);
  //<Category item={ item }   />
  //this.props.navigation.navigate("subcategory3",{ name: item.id })
  alert(item.id)
  this.props.navigation.navigate("Products",{ name: item.id })
}
  render() {
   const { item } = this.props;
//alert(JSON.stringify(item.image))
return (                     item.image===null?
      
  <View style={ styles.itemCard }>
    <TouchableOpacity onPress={()=>this.renderitem(item)}>
<View>
   
<View style={{top:scale(20), alignItems:"center"}}>
<Text   style={ {
fontSize: 15,
fontWeight:"bold", paddingLeft:scale(20)

}}>{item.name}</Text>
</View>

</View>
{/* <View style={{right:scale(270),top:verticalScale(220)}}><Text style={ {
fontSize: 22,
fontWeight:"bold",
}}>{item.Text}</Text></View> 
*/}</TouchableOpacity>
   </View>:
  

      <View style={ styles.itemCard }>
        <TouchableOpacity onPress={()=>this.renderitem(item)}>
 <View>
        <Image source={{uri:item.image.src}} style={{  height: verticalScale(200),
          width: verticalScale(260),
 }}/>
 <View style={{top:scale(20), alignItems:"center"}}>
 <Text   style={ {
  fontSize: 15,
  fontWeight:"bold", paddingLeft:scale(20)
 
  }}>{item.slug}</Text>
 </View>

 </View>
 {/* <View style={{right:scale(270),top:verticalScale(220)}}><Text style={ {
  fontSize: 22,
  fontWeight:"bold",
  }}>{item.Text}</Text></View> 
   */}</TouchableOpacity>
       </View>
    );
  }
}



const styles = StyleSheet.create({
  itemCard: {
    flex: 1,
    marginTop: scale(25),
    marginBottom: scale(25),
    marginLeft:scale(10),
    marginRight:scale(10),
    height: verticalScale(300),
    width: verticalScale(350),
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
  },
  productDetail: {
    marginLeft: 2,
    marginTop:2,
    paddingTop:30,
    flex: 1,
    justifyContent: 'flex-start',
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color:"#808080"
  },
  inputNumberContainer: { 
    marginTop: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  inputNumber: {
    flex: 1,
    padding: 4,
    width: 32,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  incDecBtn: {
    paddingTop: 4,
    paddingBottom: 4,
    width: 32,
    backgroundColor: '#263238',
  },
  incDecBtnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
export default withNavigation(ItemCard)
