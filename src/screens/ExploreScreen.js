import React from 'react';

import CustomButton from '../components/CustomButton';
import {windowWidth} from '../utils/Dimensions';
import {Colors} from '../utils/Constants';

import {View, Text, StyleSheet} from 'react-native';

const ExploreScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Explore Screen</Text>
      <CustomButton
        label="Go To Dashboard"
        onPress={() => navigation.navigate('DashboardScreen')}
      />
      <View style={styles.cards}>
        <Text style={styles.card}>Option #1</Text>
        <Text style={styles.card}>Option #1</Text>
      </View>
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
  cards: {
    display: 'flex',
  },
  card: {
    height: 150,
    width: windowWidth - 20,
    margin: 5,
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
});
export default ExploreScreen;
