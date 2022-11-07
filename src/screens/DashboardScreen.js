import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';
import {Colors} from '../utils/Constants';

const DashboardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dashboard Screen</Text>
      <CustomButton label="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: Colors.PRIMARY,
  },
});
export default DashboardScreen;
