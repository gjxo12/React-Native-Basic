import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>Image Select.,...</Text>
      </View>
      <View style={styles.option}>
        <TouchableOpacity>
          <Text>option1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>option2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>option3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>option4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <Text>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>End</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  option: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
