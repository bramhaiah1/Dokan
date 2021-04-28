import React, { Component, useEffect } from "react";
import { Text,View,StyleSheet,FlatList,TextInput,Image,ScrollView,TouchableOpacity,Dimensions} from "react-native";

// import { connect } from 'react-redux'
import Category from './category'
import {scale, verticalScale, moderateScale} from "./style"
import { connect } from "react-redux";
import { getProducts, searchProducts } from '../Store/Actions/index'



class ShopingCart0 extends Component {
 
 images1=[
    {id:1,image:require("../assets/Accesories_category.jpg"),Text:"Accessories"},
    {id:2,image:require("../assets/Baby_category.jpg"),Text:"Baby"},
    {id:3,image:require("../assets/Women_category.jpg"),Text:"Women"},
    {id:4,image:require("../assets/Men_category.jpg"),Text:"Men"},
    {id:5,image:require("../assets/Leather_category.jpg"),Text:"Leather"},
    {id:6,image:require("../assets/Electronics_category.jpeg"),Text:"Electronics"},
    {id:7,image:require("../assets/Fashion_category.jpg"),Text:"Fashion"},
    {id:8,image:require("../assets/Clothing_category.jpg"),Text:"Clothing"},
  
  
  
  ]
  

  _keyExtractor = (item, idx) => item.id;
   

  _renderItem = ({ item }) => (
    <Category item={ item }   />
  );
  setShow = () =>{
  this.setState({show:true})
  }
 


// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
//     }
// }



 componentDidMount(){
   this.props.getProducts()
   //alert(JSON.stringify(this.props.products))

 }
render() {
     // alert(JSON.stringify(this.props.products))
     var Text=0;
     var   data1 = this.props.products.filter((item) => item.parent!= Text&&item.name!='Uncategorized').map(({id, name, price,parent,image,description}) => ({id, name,parent, price,image,description}));
//alert(JSON.stringify(data1))
    return(
      <View style={ styles.container }>
      
      <FlatList
        numColumns={2}

       style={{ flexGrow: 0 }}
       data={ data1 }
       keyExtractor={ this._keyExtractor }
       renderItem={ this._renderItem }
      />
        
    {/* {this.state.show?<ModelScreen/>:null} */}
   
    </View>
  )
    
}}

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
//
const mapStateToProps = (state) => ({
  products: state.products.products,
});
const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts())}}

    export default connect(mapStateToProps, mapDispatchToProps)(ShopingCart0);
