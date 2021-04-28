import { Avatar } from 'react-native-elements';
import React, { Component } from 'react';

import { Text,View,StyleSheet,Image,ScrollView,TouchableOpacity,Dimensions} from "react-native";
import { withNavigation } from 'react-navigation';

class Avatar1 extends Component {
    render() {
    const { item } = this.props;
//alert(item)
return(
    <View>
        <Avatar
         
         size="large"
         rounded


         source={{uri:item}}

/>
    </View>
)
}
}
export default withNavigation(Avatar1)
