
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,FlatList
} from "react-native";
import { connect } from "react-redux";
import { Header,Right,Body,Title,Left, Button, Label, Card, CardItem } from 'native-base';
import { width } from "./style";

class OrdersScreen extends Component {
 
  state = {
    count: -12,
  };

  componentDidMount = () => {
 //  alert(JSON.stringify(this.props))

  };
  loadproducts = (pro) => {
    //alert(JSON.stringify(pro))
    
        return (
          <View style={styles.productMain}>

          <Image source={{ uri: pro.item.images[0].src }} style={styles.fitImage} />

          <View numberOfLines={1} style={{ alignSelf: "center" }}>
            <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: "space-around" }}>
              <Text style={styles.propText}>Product : {pro.item.name}</Text>

            </View>
            {/* <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: "space-around" }}>
              <Text style={styles.propText}>Category : {pro.item.category}</Text>

            </View> */}
            <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: "space-around" }}>
              <Text style={styles.propText}>Price : ${pro.item.price} </Text>

            </View>
        
          </View>



        </View>
     
        )}
  render() {
    let pro = this.props.navigation.getParam("pro");
    //alert(JSON.stringify(pro[0]))
    var   data = pro.map(({id, name,short_description, price,images,description}) => ({id, name,short_description, price,images,description}));

    //alert(JSON.stringify(data))

    return (
    <View>
      <Header style={{backgroundColor:"rgba(245,245,245,255)",alignSelf:"center"}}>
       

        <Body >
        <Title style={{color:"rgba(115,149,160,255)",left:width/3,fontWeight:"bold"}}>Ordered Items</Title>
        </Body>
              </Header>
      <ScrollView>
        
        <FlatList data={data} renderItem={this.loadproducts} />
     
      </ScrollView>
      <TouchableOpacity
              style={{

                width: 150,
                backgroundColor:"rgba(115,149,160,255)",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                alignSelf: "center",
                height: 35,
              }}
              onPress={() => this.props.navigation.navigate("Products1")}
            >
              <Text style={{  fontWeight: "bold",color:"#fff" }}>
                Start Shopping
              </Text>
            </TouchableOpacity>
          </View>
    );
  }
}
const styles = StyleSheet.create({
  productMain: {
    flexDirection: "row",
    justifyContent: "flex-start",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  main: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    borderColor: "black",
    justifyContent: "center",
    marginTop: 20
  },
  rating: {
    marginTop: 10,
    marginBottom: 10,
  },
  infoBox: {
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginTop: 15,
    borderRadius: 30
  },
  fitImage: {
    margin: 5,
    borderRadius: 5,
    zIndex: -1,
    resizeMode: "contain",
    width: "50%",
    height: 200,
  },

  fitImageWithSize: {
    height: 100,
    width: 30,
  },
  defaultText: {
    fontSize: 15,
  },
  propText: {
    fontFamily: "halfmoon_bold",
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
    paddingBottom: 10
  },
});
const mapStateToProps = (state) => {
    return {
      cartItems: state.cartItems,
     // itemsCount: state.itemsCount,
    };
  };

export default connect(mapStateToProps, null)(OrdersScreen);
