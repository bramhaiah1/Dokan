import React, { Component, useEffect } from "react";
import { Text,View,StyleSheet,FlatList,TextInput,Image,ScrollView,TouchableOpacity,Dimensions} from "react-native";
import  Entypo  from "react-native-vector-icons/Entypo";
import { connect } from "react-redux";
import Cate from './categorylist'
import Avatarmodel from './Avatar'
import {scale, verticalScale, moderateScale, height, width} from "./style"
import { SliderBox } from "react-native-image-slider-box";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon1 from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Avatar, Badge, withBadge } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import AnimatedLoader from "react-native-animated-loader";

import { Header,Right,Body,Title,Left, Button, Label, Card, CardItem } from 'native-base';

import { getProducts,getProducts1, searchProducts } from '../Store/Actions/index'
import Category2 from "./model2"
import Drawer from './Drawe'
import { colors } from "./colors";
// const {width} = Dimensions.get('screen');
// const height = width * 0.5;

const images =[
  require('../assets/slider1.jpg'),
  require('../assets/slider2.jpg'),
  require('../assets/slider1.jpg'),

  ]

const images1=[
  {id:1,image:require("../assets/Accesories_category.jpg"),Text:"Accessories"},
  {id:2,image:require("../assets/Baby_category.jpg"),Text:"Baby"},
  {id:3,image:require("../assets/Women_category.jpg"),Text:"Women"},
  {id:4,image:require("../assets/Men_category.jpg"),Text:"Men"},
  {id:5,image:require("../assets/Leather_category.jpg"),Text:"Leather"},
  {id:6,image:require("../assets/Electronics_category.jpeg"),Text:"Electronics"},
  {id:7,image:require("../assets/Fashion_category.jpg"),Text:"Fashion"},
  {id:8,image:require("../assets/Clothing_category.jpg"),Text:"Clothing"},



]
const list=[
  {id:1,image:require("../assets/Accesories_category.jpg"),Text1:"Accessories"},
  {id:2,image:require("../assets/Baby_category.jpg"),Text1:"Baby"},
  {id:3,image:require("../assets/Women_category.jpg"),Text1:"Women"},
  {id:4,image:require("../assets/Men_category.jpg"),Text1:"Men"},
 

]
class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      see:-1
    }
  }
 _keyExtractor = (item, idx) => item.id;
   
   _renderItem = ({ item }) => (
    <Avatarmodel item={ item }  />
  );
 componentDidMount(){

  this.props.getProducts()
  this.props.getProducts1()

 // alert(this.props.products)
   let count = this.props.itemsCount.itemsCount;
   //alert(count);
   this.props.navigation.setParams({
     count: count,
   });
   //alert(JSON.stringify(this.props.products))

 }
 state = {
  count: -12,
};
 getItemsCount = () => {
  this.setState(
    {
      count: this.state.count + 1,
    },
    () => {
      let count = this.props.itemsCount.itemsCount;
      //alert(count);
      this.props.navigation.setParams({
        count: count,
      });
    }
  );
};
 _keyExtractor1 = (item, idx) => item.id;
   

 _renderItem1 = ({ item }) => (
    
   

   <Category2 item={ item }   />
 );
render() {
     // alert(JSON.stringify(this.props.products))

     var see=0
     var see1=1
     var see2=1

    return(
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <Header style={{backgroundColor:"rgba(245,245,245,255)"}}>
               <Left>
               <Drawer navigationProps={this.props.navigation}   />
                </Left>
                <Right>
                <Icon1 onPress={() => this.props.navigation.navigate("Search")} style={{right:width/10,color:"rgba(115,149,160,255)"}} name="search"  size={20} />
                <Badge
              value={this.props.navigation.getParam("count")}
              status="primary"
              containerStyle={{ position: "absolute", right: 4, zIndex: 999 }}
            />
                <AntDesign onPress={() => this.props.navigation.navigate("Cartscreen")} style={{right:width/20,color:"rgba(115,149,160,255)"}} name="shoppingcart" size={20} />
    
                </Right>
         
            </Header>

             
  
            <View style={{marginTop:height/40,alignSelf:"center"}}>
            <NavigationEvents
            onDidFocus={() => {
              this.getItemsCount();
            }}
          />
            
               <ScrollView showsVerticalScrollIndicator={false} style={{width:width,height:height}}>
               <SliderBox 
  images={images}
  sliderBoxHeight={height/3}
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  dotColor="#FFEE58"
  inactiveDotColor="#90A4AE"
/>
              
            


{/* <View style={{flexDirection:"row",justifyContent:"space-between"}}>
<Text style={{fontSize:20,fontWeight:"bold",top:scale(50),left:verticalScale(20)}}>Category</Text>
<Text style={{fontSize:20,fontWeight:"bold",top:scale(50),right:verticalScale(20)}}>See All({this.state.see})</Text>
</View> */}



                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}style={{ width:width,height:height/4,marginTop:height/10,backgroundColor:colors.backgroundcolor}}>
                {this.props.products!=''?null:<View style={{
                    alignSelf: 'center',
                    justifyContent: 'center',}}>
                         <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("./animation.json")}
        animationStyle={{width: 100,
            height: 100}}
        speed={1}
      /></View>}
                {
                    this.props.products.map((item,index) => (
                     (item.parent===0)?see=see+1:null,

                     item.image===null&&item.parent===0&&item.name!='Uncategorized'?
                     
                     <View style={{alignItems:"center",marginLeft:width/20,marginRight:width/20,}}><Text style={{top:height/7,}}>{item.name}</Text>
                     <TouchableOpacity >              
             
              </TouchableOpacity> 
                              </View>    
                              
                               :item.parent===0&&item.parent===0&&item.name!='Uncategorized'?
                               
                               <View style={styles.view1}>
       <TouchableOpacity onPress={()=>  this.props.navigation.navigate("Products",{ name: item.id })
} >  
                   
<Image 
         style={styles.image}
       
         resizeMode={"contain"}


         source={{uri:item.image.src}}

/>
<View style={{height:height/15}}>
<Text style={{textAlign:"center",top:height/80,fontWeight:"bold"}}>{item.name}</Text>
</View>
</TouchableOpacity> 
                </View>:null    ))
                }
                
                </ScrollView>
               
               <View style={{flexDirection:"row",bottom:height/3.2,justifyContent:"space-between"}}>
               <Text style={{fontSize:18,fontWeight:"bold",left:width/20,}}>Category</Text>
               <TouchableOpacity onPress={() =>this.props.navigation.navigate("category")} >
                 <Text style={{color:"#808080",fontSize:15,right:width/20}}>See All({see-1})</Text></TouchableOpacity>

               </View>
               

                {/* <View style={{top:scale(-60)}}>
                <Text style={{fontSize:20,fontWeight:"bold",left:verticalScale(20)}}>Best Selling Products</Text></View> */}
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}style={{  width:width,height:height/5,marginTop:height/20,}}>
              
                {this.props.products1!=''?null:<View style={{
                    alignSelf: 'center',
                    justifyContent: 'center',}}>
                      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("./animation.json")}
        animationStyle={{width: 100,
            height: 100}}
        speed={1}
      /></View>}
                {
                    this.props.products1.map((item,index) => (
                      (item.featured)?see1=see1+1:null,

                     item.featured?
                     <View style={styles.view1}>
                     <TouchableOpacity  onPress={()=>  this.props.navigation.navigate("Buy",{ id: item.categories[0].id,name:item.name })
}>              
                     <Image 
         
style={styles.image}         
resizeMode={"contain"}

         source={{uri:item.images[0].src}}

/>
<View style={{height:height/15}}>
<Text style={{textAlign:"center",top:height/80,fontWeight:"bold"}}>{item.name}</Text>
</View>
              </TouchableOpacity> 
                              </View> :null   ))}
                
                </ScrollView>
                
               <View style={{flexDirection:"row",justifyContent:"space-between",bottom:height/3.8}}>
               <Text style={{fontSize:20,fontWeight:"bold",left:width/40}}>Top Featured</Text>
               <TouchableOpacity onPress={()=>this.props.navigation.navigate("Bestsale1",{name:""})}  >
                 <Text style={{color:"#808080",fontSize:15,right:width/20}}>See All({see1-1})</Text></TouchableOpacity>

               </View>
               
               


                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}style={{  width:width,height:height/5,marginTop:height/20,marginBottom:height/10,}}>
              
                {this.props.products1!=''?null:<View style={{
                    alignSelf: 'center',
                    justifyContent: 'center',}}>
                        <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("./animation.json")}
        animationStyle={{width: 100,
            height: 100}}
        speed={1}
      /></View>}
                {
                    this.props.products1.map((item,index) => (
                      (item.total_sales>=1)?see2=see2+1:null,

                      item.total_sales>=1?
                     <View style={styles.view1}>
                        <TouchableOpacity onPress={()=>  this.props.navigation.navigate("Buy",{ id: item.categories[0].id,name:item.name })
} >              
                     <Image 
         
style={styles.image}         

resizeMode={"contain"}
         source={{uri:item.images[0].src}}

/>
<View style={{height:height/15}}>
<Text style={{textAlign:"center",top:height/80,fontWeight:"bold"}}>{item.name}</Text>
</View>
              </TouchableOpacity> 
                              </View> :null   ))}
                
                
              
               
                </ScrollView>
                <View style={{flexDirection:"row",justifyContent:"space-between",bottom:height/2.7}}>
               <Text style={{fontSize:20,fontWeight:"bold",left:width/40}}>Best Selling Products</Text>
               <TouchableOpacity onPress={()=>this.props.navigation.navigate("Bestsale1",{name:"Bestsale"})} >
                 <Text style={{color:"#808080",fontSize:15,right:width/20}}>See All({see2-1})</Text></TouchableOpacity>

               </View>
                </ScrollView>

            </View>
            

          
   
        </View>
    )
    
}}
const mapStateToProps = (state) => ({
  products: state.products.products,
  products1: state.products1.searchResults1,

  itemsCount: state.itemsCount,

});
const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    getProducts1: () => dispatch(getProducts1())
  }
  
  }
const styles = StyleSheet.create({
    textView:{
        flex:1,
        flexDirection:"column",
        backgroundColor:"#FFEA61",
        borderRadius:10,
      
      
     
     
       
       

    },
    
    text1:{
        justifyContent:"center",
      alignItems:"center",
        fontWeight:"bold",
        paddingLeft:50,
        fontSize:15,
        margin:5,
        marginTop:20
        
        
      
      
       
    },
    text2:{
       
        justifyContent:"center",
        alignItems:"center",
        alignItems:"center",
        fontSize:13,
        paddingLeft:55,
        marginBottom:20
       
       
       
       
        
    },
    searchBar: {
      width: verticalScale(540),
      backgroundColor: '#fff',
     paddingLeft: scale(22),
      height: verticalScale(80),
      elevation:9
    },
    icon:{
        paddingStart:15,
        position:"absolute",
        marginTop:17
       

    },
    view1:{alignSelf:"center",marginLeft:width/50,marginRight:width/50,justifyContent:"center",backgroundColor:colors.lightactivedotcolor,height:height/5,width:width/3,}
   ,image:{height:height/13,width:width/3,},
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
