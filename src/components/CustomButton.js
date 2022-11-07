import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../utils/Constants';

export default function CustomButton({label, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  label: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: Colors.WHITE,
  },
});
