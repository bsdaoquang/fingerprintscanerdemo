import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from '../styles/styles';

const Splash = () => {
  return (
    <View style={[styles.container]}>
      <ActivityIndicator />
      <Text>Wellcome to myapp</Text>
    </View>
  );
};

export default Splash;
