import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Dolphin from '../assets/images/dolphin.svg';

import {Colors} from '../utils/Constants';

const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.gameLabelContainer}>
        <Text style={styles.gameLabel}>GAMES</Text>
      </View>
      <View style={styles.gamingContainer}>
        <Image
          source={require('../assets/images/dolphin.png')}
          width={undefined}
          height={undefined}
          style={styles.logo}
        />

        {/* <Dolphin
          width={300}
          height={300}
          style={{transform: [{rotate: '-15deg'}]}}
        /> */}
      </View>
      <TouchableOpacity
        style={styles.gamingButtonContainer}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.gamingButtonLabel}>Let's Begin</Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={22}
          color={Colors.WHITE}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  gameLabelContainer: {
    marginTop: 20,
  },
  gameLabel: {
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#20315f',
  },
  gamingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gamingButtonContainer: {
    backgroundColor: Colors.PRIMARY,
    padding: 20,
    width: '90%',
    borderRadius: 10,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gamingButtonLabel: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Roboto-MediumItalic',
  },
  logo: {
    width: 300,
    height: 200,
    marginBottom: 20,
    // transform: [{rotate: '-15deg'}],
  },
});

export default OnboardingScreen;
