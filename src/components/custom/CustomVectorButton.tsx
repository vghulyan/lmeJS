import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, StyleSheet} from 'react-native';

const CustomButton = () => {
  return (
    <Icon.Button name="facebook" backgroundColor="#3b5998">
      <Text style={styles.label}>Login with Facebook222</Text>
    </Icon.Button>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Arial',
    fontSize: 15,
  },
});

export default CustomButton;
