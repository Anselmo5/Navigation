import React from 'react';
import { View,StyleSheet,Pressable,Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenA } from './ScreenA';

export function ScreenB() {
    
  return (
    <View style={styles.container}>
        <Pressable style ={styles.btn} >
            <View>
                <Text style={styles.text}>
                        Click Aqui
                </Text>
            </View>
        </Pressable>
    </View>
  );
  
 }

 const Stack = createNativeStackNavigator();

 const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:"green",
        justifyContent:"center",

    },
    btn:{
      display:"flex",
      justifyContent:'center',
      alignItems:"center",
      flexDirection:"column",
    },
    text:{
        color:"#fff",
        fontFamily:"bold"
    }
 })