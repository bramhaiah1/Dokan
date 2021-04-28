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
import {scale, verticalScale, moderateScale,height,width} from "./style"


class ItemCard10 extends Component {
  
renderitem(item){
//  alert(item.id);
  //<Category item={ item }   />
 // this.props.navigation.navigate("cate2",{ name: item.Text })
  
}
  render() {
   const { item } = this.props;

    return (
      <View style={ styles.itemCard }>
      
       
 <View>
        <Image source={item.image} style={{  height: verticalScale(200),
          width: verticalScale(250),
 }}/>
 <View style={{top:scale(20), alignItems:"flex-start" }}>
 <Text   style={ {
  fontSize: 10,
  fontWeight:"bold",
  color:"#fff"
 
  }}>{item.Text1}</Text>
 </View>

    
 </View>
 
 {/* <View style={{right:scale(270),top:verticalScale(220)}}><Text style={ {
  fontSize: 22,
  fontWeight:"bold",
  }}>{item.Text}</Text></View> 
   */}
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
    height: verticalScale(250),
    width: verticalScale(350),
   // display: 'flex',
    //flexDirection: 'row',
    backgroundColor: '#838383',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
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
  buttonContainer4: {
    // right:scale(100),
     alignSelf:"flex-start",
  //marginTop:scale(50),
       // marginRight:scale(110),
        top: scale(60),
      //  marginBottom:scale(50),
        height: height / 18,
        width: width / 3,
        borderRadius: 30,
       // transform: [{ scaleX: 2 }],
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
export default withNavigation(ItemCard10)
