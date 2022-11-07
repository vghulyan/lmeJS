import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginSVG from '../assets/images/misc/login.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import {AuthContext} from '../context/AuthContext';

import {Colors} from '../utils/Constants';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {login} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.loginSVGContainer}>
          <LoginSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          />
        </View>

        <Text style={styles.loginContainer}>Login</Text>

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={styles.inputlIcon}
            />
          }
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={styles.inputIcon}
            />
          }
          inputType="password"
          fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => {}}
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <CustomButton
          label={'Login'}
          onPress={() => {
            login(email, password);
          }}
        />

        <Text style={styles.loginAlternative}>Or, login with ...</Text>

        <View style={styles.socialMainContainer}>
          <TouchableOpacity onPress={() => {}} style={styles.socialContainer}>
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.socialContainer}>
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.socialContainer}>
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.newToTheAppContainer}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerLabel}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 25,
  },
  loginSVGContainer: {
    alignItems: 'center',
  },
  loginContainer: {
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
  },
  inputIcon: {
    marginRight: 5,
  },
  loginAlternative: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  socialMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  socialContainer: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  newToTheAppContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  registerLabel: {
    color: Colors.PRIMARY,
    fontWeight: '700',
  },
});

export default LoginScreen;
