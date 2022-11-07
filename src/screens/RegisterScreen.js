import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import DatePicker from 'react-native-date-picker';

import InputField from '../components/InputField';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RegistrationSVG from '../assets/images/misc/registration.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';
import CustomButton from '../components/CustomButton';

import {Colors} from '../utils/Constants';

const RegisterScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainScrollContainer}>
        <View style={styles.mainScrollViewContainer}>
          <RegistrationSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          />
        </View>

        <Text style={styles.mainScrollRegisterContainer}>Register</Text>

        <View style={styles.mainScrollTouchableViewContainer}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.mainScrollViewTouchableButtonContainer}>
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.mainScrollViewTouchableButtonContainer}>
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.mainScrollViewTouchableButtonContainer}>
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View>

        <Text style={styles.registerContainer}>
          Or, register with email ...
        </Text>

        <InputField
          label={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={styles.inputIcon}
            />
          }
        />

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={styles.inputIcon}
            />
          }
          keyboardType="email-address"
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
        />

        <InputField
          label={'Confirm Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={styles.inputIcon}
            />
          }
          inputType="password"
        />

        <View style={styles.dobLabelContainer}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={styles.inputIcon}
          />
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={styles.dobLabel}>{dobLabel}</Text>
          </TouchableOpacity>
        </View>

        <DatePicker
          modal
          open={open}
          date={date}
          mode={'date'}
          maximumDate={new Date('2005-01-01')}
          minimumDate={new Date('1980-01-01')}
          onConfirm={localDate => {
            setOpen(false);
            setDate(localDate);
            setDobLabel(localDate.toDateString());
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <CustomButton label={'Register'} onPress={() => {}} />

        <View style={styles.alreadyRegisteredContainer}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.alreadyRegisteredButton}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  mainScrollContainer: {
    paddingHorizontal: 25,
  },
  mainScrollViewContainer: {
    alignItems: 'center',
  },
  mainScrollRegisterContainer: {
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
  },
  mainScrollTouchableViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  mainScrollViewTouchableButtonContainer: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  registerContainer: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  inputIcon: {
    marginRight: 5,
  },
  dobLabelContainer: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 30,
  },
  dobLabel: {
    color: '#666',
    marginLeft: 5,
    marginTop: 5,
  },
  alreadyRegisteredContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  alreadyRegisteredButton: {
    color: Colors.PRIMARY,
    fontWeight: '700',
  },
});

export default RegisterScreen;
