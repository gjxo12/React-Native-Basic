import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Result = () => {
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
});
