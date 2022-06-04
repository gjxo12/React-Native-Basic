import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Result = ({navigation}) => {
  return (
    <View>
      <View>
        <Text> Result </Text>
      </View>
      <View>
        <Image
          source={require('../img/quiz.png')}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Home....</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    width: 300,
    height: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
});
