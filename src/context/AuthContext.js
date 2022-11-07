import React, {useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import {BASE_URL} from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = (username, password) => {
    /*
    // fetch() -> http://localhost/wp-jwt-test/wp-json/jwt-auth/v1/token
    success: true | false
    statusCode: 200 | 403,
    code: 'iinvalid_username' | 'invalid_password',
    message: 'some message',
    data: {
        token: 'TOKEN',
        id: 1,
        email: 'email@email.com'
        nicename: 'admin',
        firstName: '',
        lastName: '',
        displayName: ''

    }
    */

    setIsLoading(true);
    // axios
    //   .post(
    //     `${BASE_URL}/jwt-auth/v1/token`,
    //     {
    //       username,
    //       password,
    //     },
    //     {
    //       headers: {'Content-Type': 'multipart/form-data'},
    //       transformRequest: formData => formData, // this line
    //     },
    //   )
    //   .then(res => {
    //     console.log(res.data);
    //      let userInfo = res.data
    //      setUserInfo(userInfo)
    //      setUserToken(userInfo.data.token)
    //      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
    //      AsyncStorage.setItem('userToken', userInfo.data.token);
    //   })
    //   .catch(e => {
    //     console.log(`Login error ${e}`);
    //   });

    setUserToken('some random token');
    AsyncStorage.setItem('userToken', 'some random token');
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let localUserInfo = await AsyncStorage.getItem('userInfo');
      let localUserToken = await AsyncStorage.getItem('userToken');
      localUserInfo = JSON.parse(userInfo);
      // if (userInfo) {
      if (localUserToken) {
        // change to if(userInfo) {} when getting data from the backend
        setUserToken(localUserToken);
        setUserInfo(localUserInfo);
      }

      setIsLoading(false);
    } catch (e) {
      console.log(`isLogged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{login, logout, isLoading, userToken, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};
