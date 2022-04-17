import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './navigation';
import Home from './screen/home';
import Quiz from './screen/quiz';
import Result from './screen/result';

const App = () => {
  return (
    <NavigationContainer>
      <AppStack></AppStack>
    </NavigationContainer>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
