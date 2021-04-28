import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,ActivityIndicator
 
} from 'react-native';
// import { connect } from 'react-redux'
import { Checkbox } from 'react-native-paper';
import { NavigationEvents } from "react-navigation";

import Category from './filterdata'
import Whitlist from './Whitlist'
import Checkbox1 from './checkbox'
import { connect } from "react-redux";
import { getProducts1, searchProducts } from '../Store/Actions/index'
import { Header,Right,Body,Title,Left, Button, Label, Card, CardItem } from 'native-base';
import Icon from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"

import { Avatar, Badge, withBadge } from "react-native-elements";
import {scale, verticalScale, moderateScale,width,height} from "./style"



class ShopingCart02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility:true,checked:false,data6:[],
      filter:false,
      count:0,
      show:true,
      checkedId: -1,
    newArray1:[]
    };
}

handleCheck = (checkedId1,text) => {
  if(text==="ALL"){
    this.setState({show:true,checkedId:checkedId1})
  }else{
  this.setState({checkedId:checkedId1})

  var newArray=[]
  var   filterdata = this.props.products1.map((item)=>{
    if(item.categories.length>1){
      //alert(item.categories[1].id)
    if(item.categories[1].id===checkedId1)
    {
      console.log(JSON.stringify(item.name))
      newArray.push({ ...item })

    }
  }
})
this.setState({newArray1:newArray,show:false})}
//alert(this.state.newArray1)
}
 images1=[
    {id:1,image:require("../assets/ROYSTER_GOLD_BLACK.jpg"),Category:"Accessories",Text1:"ROLEX COSMOGRAPH DAYTONA OYSTER, GOLD BLACK (REFURBISHED)"},
    {id:2,image:require("../assets/Toddler Baby Girl Clothes.jpg"),Category:"Baby",Text1:"Toddler Baby Girl Clothes Newborn Outfit Ruffle Sleeve Romper Onesies Floral Pants Set Cute"},
    {id:3,image:require("../assets/Wrangler Women's.jpg"),Category:"Women",Text1:"Wrangler Women's Authentics Stretch Denim Jacket"},
    {id:4,image:require("../assets/Regular-Fit Long-Sleeve Oxford Shirt.jpg"),Category:"Men",Text1:"Dokan Essentials Men's Regular-Fit Long-Sleeve Oxford Shirt"},
    {id:5,image:require("../assets/Leather Men's.jpg"),Category:"Leather",Text1:"Best Seller Leather Men's Crocodile Brown V TAB Leather Shirt Jacket"},
    {id:6,image:require("../assets/Acer Swift 3 Thin & Light.jpg"),Category:"Electronics",Text1:"Acer Swift 3 Thin & Light Laptop, 14 Full HD IPS, AMD Ryzen 7 4700U Octa-Core with Radeon.. "},
  // {id:7,image:require("../assets/Fashion_category.jpg"),Text:"Fashion",Text1:"watch"},
    //{id:8,image:require("../assets/Clothing_category.jpg"),Text:"Clothing",Text1:"dressmaterial1"},
    {id:7,image:require("../assets/ROYSTER_GOLD_BLACK.jpg"),Category:"Accessories",Text1:"handmade Gray Leather Purse Wallet for Women TriFold Checkbook Credit cards Holder"},
    {id:8,image:require("../assets/Toddler Girl Outfits.jpg"),Category:"Baby",Text1:"3PCS Baby Girl Clothes Toddler Girl Outfits Newborn Ruffle Bodysuit Tops Pants"},
    {id:9,image:require("../assets/Wrangler Women's Denim Jacket.jpg"),Category:"Women",Text1:"Wrangler Women's Denim Jacket....."
  },
    {id:10,image:require("../assets/WEEN CHARM Men's.jpg"),Category:"Men",Text1:"WEEN CHARM Men's Lightweight Jackets Military Casual"},
    {id:11,image:require("../assets/Cole Haan Women's Leather.jpg"),Category:"Leather",Text1:"Cole Haan Women's Leather Racer Jacket with Quilted Panels................."},
    {id:12,image:require("../assets/HP 15 Laptop.jpg"),Category:"Electronics",Text1:"HP 15 Laptop, 11th Gen Intel Core i5-1135G7 Processor, 8 GB RAM, 256 GB SSD Storage, 15.6” Full HD."},
    //{id:7,image:require("../assets/Fashion_category.jpg"),Text:"Fashion",Text1:"Hat"},
    //{id:8,image:require("../assets/Clothing_category.jpg"),Text:"Clothing",Text1:"silk sarees"},
  
  
  
  ]
  

  _keyExtractor = (item, idx) => item.id;
   

  _renderItem = ({ item }) => (
     
    

    <Category item={ item }   />
  );
  setShow = () =>{
  this.setState({show:true})
  }
componentDidMount(){
  this.props.getProducts1()
   //  alert(JSON.stringify(this.props.products1))

  
}
getItemsCount = () => {
  this.setState(
    {
      count: this.state.count + 1,
    },

    () => {
      let count = this.props.itemsCount.itemsCount1;
      this.props.navigation.setParams({
        count1: count,
      });
    }
  );
};
getItemsCount1 = () => {
  this.setState(
    {
      count: this.state.count + 1,
    },

    () => {
      let count = this.props.itemsCount.itemsCount;
      this.props.navigation.setParams({
        count: count,
      });
    }
  );
};
  render() {
    // const { cartItems, total } = this.props;
    const Text1 = this.props.navigation.getParam('name', '')
  var   data = this.props.products1.filter((item) => item.categories[0].id == Text1).map(({id, name,parent, price,images,description,categories}) => ({id,parent, name, price,images,description,categories}));
  //var   filterdata = this.props.products1.filter((item) => item.categories[1].id == this.state.checkedId1).map(({id, name,parent, price,images,description,categories}) => ({id,parent, name, price,images,description,categories}));

  var   data1 = this.props.products1.filter((item) => item.categories[0].id == Text1).map(({categories}) => ({categories}));
  var   data2 = data1.map((categories) => (categories));
  
  const newArray = [];

     data2.map((item)=>{(item.categories.forEach(obj => {
       if (!newArray.some(o => o.id === obj.id)) {
         newArray.push({ ...obj })
       }
   
     }
       
      
      
      
      ))})
     // alert(JSON.stringify(newArray))

  // data2.forEach(obj => {
  //  // alert(JSON.stringify(obj))
  //   if (!newArray.some(o => o.id === obj.id)) {
  //  //   alert(JSON.stringify(obj))
  //     newArray.push({ ...obj })
  //   }

  // });

//alert(JSON.stringify(newArray));

//   data2.map((item)=>{
//     //alert(JSON.stringify(this.state.data6))
//     if(JSON.stringify(this.state.data6)!='[]'){
//       this.setState({data6:item}) 

//       alert("lll")
//     }else{
//   //  var a=this.state.data6.map((item1) => (item1.id))

//     var u=JSON.stringify(item.id)
//     var v=this.state.data6
//     alert(v+"jjjjj")
// alert(v+"oooo")

//     if(u!=v){
// //alert("ok")
// this.setState({data6:item}) 
// //alert(JSON.stringify(this.state.data6))
// }else{ 

//       }
//   }
//   //  for(var i=0;i<a.length;i++){
//   //    if(item.id===a){
//   //      console.log(a)
//   //    }
//      //console.log(item.id)
//   }
   
  
//   )
//  // var   data3 = data2.map(item=>item.filter((item)=>data2.id===item.id));
//  const uniqueNames = data2.filter((val, id, array) => {
//   // alert(JSON.stringify(array))
//   return data2.indexOf(val) == id;  
// });
// //const uniqueNames = Array.from(new Set(data2));
// //alert(JSON.stringify(uniqueNames))
//   var data3=[]
//  // alert(JSON.stringify(uniqueNames));
// //alert(Text)
const { checkboxes, checkedId } = this.state

     return (
      <View style={ styles.container }>
            <Header style={{backgroundColor:"rgba(245,245,245,255)"}}>
               <Left>
               <Icon onPress={()=>this.setState({filter:!this.state.filter})} name="filter" style={{color:"rgba(115,149,160,255)"}} size={20} />

                </Left>
                <Body>
                  <Title style={{color:"rgba(115,149,160,255)"}}>Products</Title>
                </Body>
                <Right>
               
                <Icon onPress={() => this.props.navigation.navigate("Wish List")} style={{right:width/10,color:"rgba(115,149,160,255)"}}  name="heart-outline" size={25} />
                
                <Badge
              value={this.props.navigation.getParam("count1")}
              status="primary"
              containerStyle={{ position: "absolute", right:width/8, bottom:height/50 }}
            />
             <Badge
              value={this.props.navigation.getParam("count")}
              status="primary"
              containerStyle={{ position: "absolute", right: 1, bottom:height/50 }}
            />
                <AntDesign onPress={() => this.props.navigation.navigate("Cartscreen")} style={{right:width/30,color:"rgba(115,149,160,255)",}} name="shoppingcart" size={25} />
    
                </Right>
         
            </Header>
            <NavigationEvents
            onDidFocus={() => {
              this.getItemsCount1();
              this.getItemsCount();

            }}
          />
        
         {newArray.map((item,index) => (
           this.state.filter?
item.id===Text1?<View>
<Checkbox
           center
           key={item.id}
           title={item.name}
         //  status={checkedId ? 'checked' : 'unchecked'}
           status={item.id == checkedId ? 'checked' : 'unchecked'}
           onPress={() => this.handleCheck(item.id,"ALL")}
           
         />
        <Text style={{marginTop: 5}}> ALL</Text>
</View>:

<View>
<Checkbox
           center
           key={item.id}
           title={item.name}
         //  status={checkedId ? 'checked' : 'unchecked'}
           status={item.id == checkedId ? 'checked' : 'unchecked'}
           onPress={() => this.handleCheck(item.id)}
           
         />
        <Text style={{marginTop: 5}}> {item.name}</Text>
</View>:null
))}

{JSON.stringify(data)==='[]'?

<Whitlist/>:this.state.show?
        <FlatList
          numColumns={2}

         style={{ flexGrow: 0 }}
         data={ data }
         keyExtractor={ this._keyExtractor }
         renderItem={ this._renderItem }
        />
    :<FlatList
    numColumns={2}

   style={{ flexGrow: 0 }}
   data={ this.state.newArray1 }
   keyExtractor={ this._keyExtractor }
   renderItem={ this._renderItem }
  />}
      {/* {this.state.show?<ModelScreen/>:null} */}
     
      </View>
    );
  }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
//     }
// }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: scale(25),
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight:"bold"
  },
  
});

const mapStateToProps = (state) => ({
  
  products1: state.products1.searchResults1,
  itemsCount: state.itemsCount,

});
const mapDispatchToProps = dispatch => {
  return {
    getProducts1: () => dispatch(getProducts1())}}
export default connect(mapStateToProps, mapDispatchToProps)(ShopingCart02);
