import React, { Component } from 'react';
import { 
  View,
  Text,
  FlatList,
  StyleSheet,
  
  TouchableHighlight,TouchableOpacity,Image,ScrollView,
 
} from 'react-native';
import { NavigationEvents } from "react-navigation";

// import { connect } from 'react-redux'
import Category from './filterdata'
import { connect } from "react-redux";
import { getProducts1, searchProducts } from '../Store/Actions/index'

import {scale, verticalScale, moderateScale, height, width} from "./style"
import { Header,Right,Body,Title,Left, Button, Label, Card, CardItem } from 'native-base';

import Icon from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"

import { Avatar, Badge, withBadge } from "react-native-elements";

class ShopingCart0211 extends Component {
  
  constructor(props){
    super(props)
    this.state={
      activeTab:1,
      isEnabled:false,des:true,icon:true,
    }
      }
      getItemsCount = () => {
        this.setState(
          {
            count: this.state.count + 1,
          },

          () => {
            let count = this.props.itemsCount.itemsCount1;
           // alert(count)
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
      addCartHandler = (pro) => {
        let qty = 1;
        pro.quantity = qty;
       
        //console.log(this.state.count);
        this.props.addToCart(pro);
        this.getItemsCount1();
       // alert( this.props.itemsCount.itemsCount)
       this.props.navigation.navigate("Cartscreen")
        // this.props.itemsCount.itemsCount
      };
      addCartHandler1 = (pro) => {
        let qty = 1;
        pro.quantity = qty;
       
       //alert(JSON.stringify(pro))
        //console.log(this.state.count);
        this.props.addToCart(pro);
        this.getItemsCount();
       // alert( this.props.itemsCount.itemsCount)
       //this.props.navigation.navigate("Cartscreen")
        // this.props.itemsCount.itemsCount
      };
      addToWishListHandler = (pro) => {
        this.props.addToWishList(pro);
        this.getItemsCount();
      };
    
  render() {
    // const { cartItems, total } = this.props;
    const Text1 = this.props.navigation.getParam('name', '')
    const id = this.props.navigation.getParam('id', '')

    //alert(JSON.stringify(Text1))
 // alert(JSON.stringify(this.props.products1[0].categories[0].name))
  var   data = this.props.products1.filter((item) => item.name== Text1).map(({id, name,short_description, price,images,description}) => ({id, name,short_description, price,images,description}));
  var   data1 = this.props.products1.filter((item) => item.categories[0].id== id).map(({id, name,short_description, price,images,description,categories}) => ({id, name,short_description, price,images,description,categories}));
  const regex = /(<([^>]+)>)/ig;
  const Result = data[0].description.replace(regex, '');
 // alert(JSON.stringify(data[0].images));
//alert(Text)
    return (
      <View style={ styles.container }>
            <Header style={{backgroundColor:"rgba(245,245,245,255)"}}>
               <Left>
               <AntDesign onPress={()=>this.props.navigation.goBack(null)
} name="arrowleft" style={{color:"rgba(115,149,160,255)"}} size={20} />

                </Left>
                <Body>
                  <Title style={{color:"rgba(115,149,160,255)"}}>Product Details</Title>
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
           <ScrollView>

 <View>
        <Image source={{uri:data[0].images[0].src}} resizeMode="contain" style={{  height:height/3,margin:"10%",width:width/1.4,alignSelf:"center",
         
 }}/>
  <Text   style={ {
 fontWeight:"bold",color:"rgba(115,149,160,255)",fontSize:25,left:width/20
 
  }}>{data[0].name}</Text>
  <View style={{top:height/72, left:width/20}}>
 <Text   style={ {
  fontSize: 14,
  fontWeight:"bold",
 
  }}>Price:{data[0].price} $</Text>
 </View>
 {/* {this.state.icon?
  <Icon onPress={()=>this.setState({icon:!this.state.icon})} style={{color:"#d0371e",alignSelf:"flex-end",bottom:height/15,right:width/20}} name="heart-outline" size={32}  />:<Icon onPress={()=>this.setState({icon:!this.state.icon})}style={{color:"#d0371e",alignSelf:"flex-end",bottom:height/15,right:width/20}} name="heart" size={32}  />} */}

 <View style={{   flexDirection: 'row',left:width/8,marginTop:height/20,
}}>
                <View style={{ width: '50%',}} ><TouchableOpacity onPress={()=> this.setState({activeTab:1,des:!this.state.des})}><Text style={{fontSize:15,fontWeight:"bold"}}>Description</Text></TouchableOpacity></View>
                <View style={{width: '50%',}}><TouchableOpacity onPress={()=> this.setState({activeTab:2,des:!this.state.des})}><Text style={{fontSize:15,fontWeight:"bold"}}>Review</Text></TouchableOpacity></View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  
{this.state.activeTab == 1 ? (
<View
style={{width: '50%', height: 2,alignSelf:"center", backgroundColor:"rgba(115,149,160,255)"}}
></View>
) : (
<View style={{width: '50%', height: 2}} />
)}
{this.state.activeTab == 2 ? (
<View
style={{width: '50%',  height: 2, backgroundColor:"rgba(115,149,160,255)"}}
/>
) : (
<View style={{width: '50%', height: 2}} />
)}</View>

 
 
 {this.state.des?
  
Result===''?<View style={{paddingTop:height/13,alignSelf:"center",paddingBottom:height/13,}}>
<Text   style={ {
 fontSize: 10,
 fontWeight:"bold",
color:"#838383"
 }}>No Description</Text>
</View>: <View style={{paddingLeft:width/15,paddingRight:width/25,alignSelf:"center",width:width}}>
 <Text   style={ {
  fontSize:15,
  fontWeight:"bold",
 color:"#838383",paddingLeft:width/14,paddingRight:width/8,alignSelf:"center",paddingTop:height/50,
  }}>{Result} </Text>
 </View>:<View style={{paddingTop:height/13,alignSelf:"center",paddingBottom:height/13,}}>
 <Text   style={ {
  fontSize: 10,
  fontWeight:"bold",
 color:"#838383"
  }}>No Reviews </Text>
 </View>}

<View style={{left:width/20,backgroundColor:"rgba(245,245,245,255)"}} ><Text style={{color:"black",fontWeight:"bold",fontSize:20}}>Related Products</Text>
</View>
 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}style={{ width:width,height:height/3,}}>
                {
                    data1.map((item,index) => (
                      item.name===Text1?null:
                               <View style={{alignItems:"center"}}>
                                  <TouchableOpacity  onPress={()=>  this.props.navigation.navigate("Buy",{ id: item.categories[0].id,name:item.name })
}
                                  style={{padding:scale(30)}}>              
<Avatar 
         
         size="large"
         

         source={{uri:item.images[0].src}}

/>
</TouchableOpacity>
<Text style={{top:height/120,marginLeft:30,marginRight:30}}>{item.name}</Text>
<Text style={{top:height/120,marginLeft:30,marginRight:30,fontWeight:"bold",fontSize:10}}>Price:{item.price}$</Text>

       
                </View>    ))
                }</ScrollView>



 <View style={{flexDirection:"row",bottom:height/8}}>
        <TouchableOpacity 
        onPress={() => {
  this.addToWishListHandler(data[0]);
}}
          style={[{height:height/15,width:width/2.5,borderRadius:10,alignSelf:"center",justifyContent:"center", backgroundColor:"rgba(115,149,160,255)",marginLeft:height/30,marginRight:height/60}]}>
         
          <Text style={{fontSize:14,textAlign:"center",fontWeight:'bold',color:"#fff"
}}>
          ADD TO WISHLIST
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
       //   onPress={()=>  alert("Added to WishList") } 
onPress={() => {
  this.addCartHandler(data[0]);
}}

          style={[{height:height/15,width:width/2.5,borderRadius:10,alignSelf:"center",justifyContent:"center", backgroundColor:"rgba(115,149,160,255)",marginLeft:height/60,}]}>
         
          <Text style={{fontSize:14,textAlign:"center",fontWeight:"bold",color:"#fff"}}>
          Buy Now
          </Text>
        </TouchableOpacity>
   </View>
   </View>
   </ScrollView>
     
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
    justifyContent:"center"
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight:"bold"
  },
  
});

const mapStateToProps = (state) => ({
  
  products1: state.products1.searchResults1,
  itemsCount: state.itemsCount,
  wishListItems: state.wishListItems,


});
const mapDispatchToProps = dispatch => {
  return {
    getProducts1: () => dispatch(getProducts1()),
    addToCart: (itemData) => {
      dispatch({
        type: "ADD_TO_CART",
        item: itemData,
      });
    },
    addToWishList: (itemData) => {
      dispatch({
        type: "ADD_TO_WISH_LIST",
        item: itemData,
      });
    },
  
  }
  
  
  }
export default connect(mapStateToProps, mapDispatchToProps)(ShopingCart0211);
