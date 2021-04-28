import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableHighlight,
 
} from 'react-native';
// import { connect } from 'react-redux'
import Category from './subcategorymodel'
import { connect } from "react-redux";
import { getProducts, searchProducts } from '../Store/Actions/index'

import {scale, verticalScale, moderateScale} from "./style"



class ShopingCart02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility:true
    };
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
  this.props.getProducts()
   //  alert(JSON.stringify(this.props.products1))

  
}
  render() {
    // const { cartItems, total } = this.props;
    const Text = this.props.navigation.getParam('name', '')
   //alert(Text)
 //alert(JSON.stringify(this.props.products1[0].categories[0].name))
  var   data = this.props.products1.filter((item) => item.parent== Text&&item.name!='Uncategorized').map(({id, name,slug, price,image,description}) => ({id,slug, name, price,image,description}));
//alert(JSON.stringify(data));
if(JSON.stringify(data)==='[]'){
  this.data=''
    this.props.navigation.navigate("Products",{ name: Text })
}
//alert(Text)
    return (
      <View style={ styles.container }>

        <FlatList
          numColumns={2}

         style={{ flexGrow: 0 }}
         data={ data }
         keyExtractor={ this._keyExtractor }
         renderItem={ this._renderItem }
        />
        
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
  
  products1: state.products.products
});
const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts())}}
export default connect(mapStateToProps, mapDispatchToProps)(ShopingCart02);
