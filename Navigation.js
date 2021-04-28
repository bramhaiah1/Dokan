import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Fontisto from "react-native-vector-icons/Fontisto";
 import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
 import Icon from "react-native-vector-icons/FontAwesome5"
 import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
 import { createDrawerNavigator, DrawerItems,DrawerActions } from "react-navigation-drawer";
 import { createBottomTabNavigator } from "react-navigation-tabs";
 import FontAwesome from "react-native-vector-icons/FontAwesome";
 import AntDesign from "react-native-vector-icons/AntDesign";
//  import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {scale, verticalScale, moderateScale,width,height} from "./Screens/style"

 import Entypo from "react-native-vector-icons/Entypo";
import { createAppContainer } from 'react-navigation'
import Login from './Screens/Loginscreen'
import Register from './Screens/Registrationscrene'
import Drawer from './Screens/Drawe'
import Forgot from './Screens/Forgotpaass'
import Home from './Screens/Home'
import category1 from './Screens/categorylist'
import category2 from './Screens/categoryfilter'
import category21 from './Screens/categortflat'
import searchbar from './Screens/searchbar';
import buy from './Screens/Buy'
import Subcategory from './Screens/subcategory'
import Allsubcategories from './Screens/allsubcategories'
import cart from './Screens/cart'
import Bestsale from './Screens/list_of_products'
import profile from './Screens/profile'
import whitlist from './Screens/Whitlist'
import CartScreen1 from './Screens/cartscreen'
import Whitlist1 from './Screens/whitlist1'
import order from "./Screens/orderscreen";
import checkout from "./Screens/checkout";
import loader from './Screens/loader'
const TabNavigator = createBottomTabNavigator(
  {

    Products1: {
      screen: Home,
      navigationOptions: {
        
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="home" size={22} color={tintColor} />;
        },
      },
    },
    Categories: {
      screen: category1,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <FontAwesome name="th" size={20} color={tintColor} />;
        },
      },
    },
    "Wish List": {
      screen: Whitlist1,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Fontisto name="heart" size={20} color={tintColor} />;
        },
      },
    },
    Cart: {
      screen: profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="user" size={20} color={tintColor} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#44bcd8",
      inactiveTintColor: "black",
      tabStyle: {
        height: 50,
        zIndex: 99,
        borderColor: "white",
        borderTopWidth: 0,
      },
      labelStyle: {
        fontSize: 12,
        paddingTop: 2,
        paddingBottom: 3,
        fontFamily: "halfmoon_bold",
      },
    },
  }
);

const LOGIN = createStackNavigator({
  
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      headerShown:false,
      drawerIcon: ({ tintColor }) => {
        return <Icon name="home" size={20} color={tintColor} />
      }
    }
  },
 checkout:{
   screen:checkout,
   navigationOptions: {

   headerShown:false}
 }
 ,
  cart: {
    screen: cart,
    headerShown:true,
    navigationOptions: ({ navigation }) => ({      
      //headerLeft: () => <AntDesign style={{left:20}} onPress={()=>navigation.navigate("Buy")} name="arrowleft" size={20} color="#fff" />,
      headerRight: () => <MaterialIcons style={{right:20}} onPress={()=>alert("Deleted")} name="delete" size={20} color="#fff" />,
      headerTitle:"My Cart ",
      headerStyle: {
        backgroundColor: "#d8341c",
        
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#FFFFFF",
        fontSize: 18,
      },  
    
      tabBarVisible:false
    }),
    
  
  
  },
  LoginScreen: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({      
    headerShown:false,
  }),
  
  },
  Buy: {
    screen: buy,
    
    navigationOptions: ({ navigation }) => ({      
     // headerLeft: () => <AntDesign style={{left:20}} onPress={()=>navigation.navigate("Products")} name="arrowleft" size={20} color="#fff" />,
     // headerRight: () => <AntDesign style={{right:20}} onPress={()=>navigation.navigate("Cartscreen")} name="shoppingcart" size={20} color="#fff" />,
      headerShown:false,
      // headerTitle:"Product Details",
      // headerStyle: {
      //   backgroundColor: "#d8341c",
        
      // },
      // headerTitleStyle: {
      //   fontWeight: "bold",
      //   color: "#FFFFFF",
      //   fontSize: 18,
      // },  
    
      tabBarVisible:false
    }),
    
 
  
  },
  Cartscreen: {
    screen: CartScreen1,
    navigationOptions: ({ navigation }) => ({  
      headerTitle:"Items in Cart",
      headerStyle: {
color:"rgba(115,149,160,255)"        
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color:"rgba(115,149,160,255)" ,
                fontSize: 18,
      },      
    headerShown:true,
  }),},
  cate: {
    screen: category2,
    navigationOptions: ({ navigation }) => ({      
    headerShown:false,
  }),},
 
  subcategory: {
    screen: Subcategory,
    navigationOptions: ({ navigation }) => ({      
    headerShown:true,
  }),},
  Products: {
    screen: category21,
    navigationOptions: ({ navigation }) => ({      
    headerShown:false,
  }),},
  order: {
    screen: order,
    navigationOptions: ({ navigation }) => ({      
    headerShown:false,
  }),},
  Search: {
    screen: searchbar,
    navigationOptions: ({ navigation }) => ({      
    headerShown:false,
  }),},
  Bestsale1: {
    screen: Bestsale,
    navigationOptions: ({ navigation }) => ({      
    headerShown:true,
    headerTitle:"Products",
    headerLeft: () =>      <AntDesign onPress={()=>this.props.navigation.goBack(null)
    } name="arrowleft" style={{color:"rgba(115,149,160,255)",left:width/20}} size={25} />,
    headerTitleStyle: {
      color:"rgba(115,149,160,255)" ,
    right:width/10,
    alignSelf:"center"
    },
    tabBarVisible:true
    
  }),},
  forgot: {

    screen:Forgot,
    navigationOptions: ({ navigation }) => ({
     

headerTitle:"Password Reset" , 
headerTintColor:"black" ,   
justifyContent:"center"
    }),
 },

  switch: {
    screen:Register,
    navigationOptions: ({ navigation }) => ({      
      headerShown:false,
    }),
  },
  category: {
    screen:category1,
    navigationOptions: ({ navigation }) => ({      
      headerShown:true,
    }),
  },
  
})

const HOME1 = createStackNavigator(
  {
    Logout: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({      
        headerLeft: () =><Drawer navigationProps={navigation}   />,
        headerShown:false,

        //headerTintColor:"#fff" ,  h 
        headerStyle: {
          backgroundColor: '#fff'
        },
    }),
    },
   
   
  },
  
  )
const NavigationDrawer = createDrawerNavigator({
  InitialPage:{
    screen:LOGIN,
   
    
    navigationOptions: ({navigation}) => {
      return {
          drawerLabel: () => null,
      }
    }
  },

  Home:{
    screen:Whitlist1,
    navigationOptions: {
      drawerIcon: () => {
        return <FontAwesome5Icon name="sign-in-alt" size={30}  />
      }
    
    },
  },
  Notifications:{
    screen:Whitlist1,
    navigationOptions: {
      drawerIcon: () => {
        return <FontAwesome5Icon name="sign-in-alt" size={30}  />
      }
    
    },
  },
  "About Us":{
    screen:Whitlist1,
    navigationOptions: {
      drawerIcon: () => {
        return <FontAwesome5Icon name="sign-in-alt" size={30}  />
      }
    
    },
  },
  "Sign Out":{
    screen:Whitlist1,
    navigationOptions: {
      drawerIcon: () => {
        return <FontAwesome5Icon name="sign-in-alt" size={30}  />
      }
    
    },
  },
},
{
  contentComponent: (props) => (
    <SafeAreaView>
      <View style={styles.sideMenuContainer}>
      <AntDesign onPress={()=>props.navigation.goBack()} name="arrowleft" size={35} style={{color:"#fff",alignSelf:"flex-end"}}  />

        <View style={styles.profileHeader}>
          <View style={styles.profileHeaderPicCircle}>
          <AntDesign name='user' size={46} color='rgba(183,207,208,255)'/>
           
          </View>
        </View>

        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView>
            <View
              style={{
               // flexDirection: "row",
                color: "white",
                backgroundColor: 'rgba(183,207,208,255)',
              }}
            >
              <View style={{paddingBottom:height/50}} >
                <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                <Text style={{color:"#fff",fontWeight:"bold",fontSize:22,left:width/10}}><AntDesign name="home" size={25}  /> Home</Text>
                </TouchableOpacity>
                
                </View>
                <View style={{borderWidth:1,borderColor:"#fff"}}/>
                <View style={{paddingBottom:height/50,paddingTop:height/50}} >
                <TouchableOpacity  onPress={()=>props.navigation.goBack()}>
                <Text style={{color:"#fff",fontWeight:"bold",fontSize:22,left:width/10}}><AntDesign name="bells" size={25}  /> Notifications</Text>
                </TouchableOpacity>
                
                </View>
                <View style={{borderWidth:1,borderColor:"#fff"}}/>
                <View style={{paddingBottom:height/50,paddingTop:height/50}} >
                <TouchableOpacity>
                <Text style={{color:"#fff",fontWeight:"bold",fontSize:22,left:width/10}}> <AntDesign name="infocirlceo" size={25}  /> About Us</Text>
                </TouchableOpacity>
                
                </View>
                <View style={{borderWidth:1,borderColor:"#fff"}}/>
                <View style={{paddingBottom:height/50,paddingTop:height/50}} >
                                  <TouchableOpacity onPress={()=>props.navigation.navigate('LoginScreen')}>
                <Text style={{color:"#fff",fontWeight:"bold",fontSize:22,left:width/10}}><FontAwesome5Icon name="sign-in-alt" size={25}  /> Login</Text>
                </TouchableOpacity>
                
                </View>
              {/* <DrawerItems  {...props} /> */}
              </View>
          </ScrollView></View></View>
    </SafeAreaView>

  )
}
)
const AppContainer = createAppContainer(NavigationDrawer);
export default AppContainer
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(183,207,208,255)',
    paddingTop: 40,
    color: "rgb(0,0,0)",
  },
  profileHeader: {
    flexDirection: "row",
    backgroundColor: 'rgba(183,207,208,255)',
    padding: 15,
    textAlign: "center",
    alignSelf:"center"
  },
  profileHeaderPicCircle: {
    bottom:height/20,
    width: width/3,
    height: height/6,
    borderRadius: 400 / 2,
    color: "rgb(0,0,0)",
    backgroundColor: "#ffff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center"
  },
  profileHeaderText: {
    alignSelf: "center",
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: "rgb(0,0,0)",
    marginTop: 15,
    marginBottom: 10,
  },
});
