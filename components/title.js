import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Title..... </Text>
    </View>
  );
};

export default Title;

const state = StyleSheet.create({});

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: '600',
  },
  container: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
