import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, FlatList, StyleSheet } from "react-native";
import {
  Appbar,
  Button,
  Divider,
  PaperProvider,
  TextInput,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { MyContextControllerProvider } from "./store";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import Router from "./Router/Router";
const KTGK = () => {
  return (
    <View style={{flex: 1}}>
      <MyContextControllerProvider>
        <PaperProvider>
          <NavigationContainer>
            <Router/>
          </NavigationContainer>
        </PaperProvider>
      </MyContextControllerProvider>
      
      
    </View>
  );
};
export default KTGK;
