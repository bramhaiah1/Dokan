import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableHighlight
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { scale, verticalScale, moderateScale, height, width } from "../style"

class ItemCard extends Component {
  state = {
    qty: '1'
  }

  incQty = () => {
    this.setState(prevState => ({
      qty: (parseInt(prevState.qty) + 1).toString()
    }))
  }

  decQty = () => {
    if (this.state.qty > 1) {
      this.setState(prevState => ({
        qty: (parseInt(prevState.qty) - 1).toString()
      }))
    }
  }

  render() {
    const image = this.props.navigation.getParam('image', '')
    const name = this.props.navigation.getParam('name', '')
    const price = this.props.navigation.getParam('price', '')

    return (
      <View>
        {name != '' ? <View style={styles.itemCard}>
          <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />
          <View style={styles.productDetail}>
            <Text style={styles.productTitle}>{name}</Text>
            <Text style={styles.productPrice}>Price: US${price}</Text>
            <View style={styles.inputNumberContainer}>
              <TouchableHighlight style={styles.incDecBtn}>
                <Text
                  style={styles.incDecBtnText}
                  onPress={this.incQty}
                >+</Text>
              </TouchableHighlight>
              <TextInput
                style={styles.inputNumber}
                value={this.state.qty}
                onChangeText={(text) => this.setState({ qty: text })}
                keyboardType='numeric'
              />
              <TouchableHighlight style={styles.incDecBtn}>
                <Text
                  style={styles.incDecBtnText}
                  onPress={this.decQty}
                >-</Text>
              </TouchableHighlight>
            </View>
            {/* <Button title='Add to Cart'
            // onPress={ () => addToCart({
            //   ...item,
            //   qty: parseInt(this.state.qty),
            // }) }
          /> */}
          </View></View> : <View>
          <View style={{ top: height / 6, alignSelf: "center" }}>

            <Image
              style={{
                alignSelf: "center",
                //height: height/40,
                width: width / 2,
                height: height / 5,
                elevation: 9,
              }}
              source={require("../assets/wishlist.png")}
            ></Image></View>
          <View style={{ alignSelf: "center", top: height / 6 }}><Text style={{ fontWeight: "bold", fontSize: 20 }}>Your Cart is Empty</Text>
          </View>
          <View style={{ alignSelf: "center", paddingTop: scale(220), top: height / 18 }}><Text style={{ fontSize: 15, fontWeight: "600" }}>Add a product to the shopping cart</Text></View>

        </View>
        }
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

const styles = StyleSheet.create({
  itemCard: {
    flex: 1,
    marginTop: 4,
    marginBottom: 4,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  productDetail: {
    marginLeft: 2,
    flex: 1,
    justifyContent: 'flex-start',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
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

export default connect(null, mapDispatchToProps)(ItemCard);