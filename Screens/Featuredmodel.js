import React, { Component } from 'react';
import {
   StyleSheet, View,Image,Text,TextInput,TouchableOpacity,ScrollView,card,ImageBackground

} from 'react-native';
import {width,height,scale} from './style'
import {colors} from './colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Item } from 'native-base';
const FeaturedModel=(props)=>{
    const { item } = props;
  const [visible,setvisible]=React.useState(true)
  const [color,setcolor]=React.useState('')

 

    return(
        <View style={styles.MainContainer}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                {visible?    <AntDesign onPress={()=>{setvisible(!visible)}} name='heart' size={20} style={{left:width/20,top:height/60,color:colors.rose}}/>
:    <AntDesign   onPress={()=>{setvisible(!visible)}} name='heart' size={20} style={{left:width/20,top:height/60,color:colors.ash}}/>
}
    <View style={{right:width/20}}>
              <View style={[styles.pentagonInner,{borderTopColor: item.color,}]} /> 
              <View style={[styles.pentagonBefore,{borderTopColor: item.color,}]} />
              <Text style={{color:colors.white,bottom:height/25,alignSelf:"center"}}>{item.name}</Text>
              </View>

    </View>
    <View style={{height:height/9}}>

<Image       style={styles.topprod}                         
   source={item.image}
/></View>
<View style={{flexDirection:"row",justifyContent:"space-between",paddingTop:height/20,paddingBottom:height/120}}>
    <TouchableOpacity style={{backgroundColor:colors.darkblue,borderRadius:20,width:width/6,alignSelf:"center",left:width/40}}><Text style={{textAlign:"center",color:colors.violet,fontSize:12,alignContent:"center"}}>Auction</Text></TouchableOpacity>
    <TouchableOpacity style={{backgroundColor:colors.darkblue,borderRadius:20,width:width/6,alignSelf:"center",right:width/40}}><Text style={{textAlign:"center" ,color:colors.violet,fontSize:12,}}>Preview</Text></TouchableOpacity>

</View>
        </View>
    )
}
const styles = StyleSheet.create(
{
    MainContainer: 
    {
        flex:1,
    backgroundColor:colors.cement,
    borderRadius:20,
    //marginLeft:width/50,
    marginRight:width/40,

    },

    topprod:
            {
                alignSelf:"center",
                
               
            },

            pentagon: {
                backgroundColor: 'transparent',
                
              },
              pentagonInner: {
                width: 50,
               // borderBottomColor: colors.activedotcolor,
                borderBottomWidth: 0,
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                //borderTopColor: item.color,
                borderTopWidth: 20,
                
              },
              pentagonBefore: {
                width: 50,
                //borderBottomColor: colors.activedotcolor,
                borderBottomWidth: 0,
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
               // borderTopColor: item.color,
                borderTopWidth: 15,
                borderLeftWidth:25,
                borderRightWidth:25,

              }
        })
export default FeaturedModel