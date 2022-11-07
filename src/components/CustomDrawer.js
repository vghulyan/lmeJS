import React, {useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {AuthContext} from '../context/AuthContext';

import {Colors} from '../utils/Constants';

const CustomDrawer = props => {
  const {logout, userInfo} = useContext(AuthContext);
  return (
    <View style={styles.mainContainer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContentContainer}>
        <ImageBackground
          source={require('../assets/images/wave_bg.webp')}
          width={undefined}
          height={undefined}
          style={styles.menuImage}>
          <Image
            source={require('../assets/images/avatar.png')}
            width={undefined}
            height={undefined}
            style={styles.userProfile}
          />
          <Text style={styles.userProfileLabel}>
            {userInfo ? userInfo?.data?.displayName : 'Vardan GHULYAN'}
          </Text>
          <View style={styles.coinContainer}>
            <Text style={styles.coinLabel}>280 NFT Coins</Text>
            <FontAwesome5 name="coins" size={14} color={Colors.WHITE} />
          </View>
        </ImageBackground>
        <View style={styles.drawerItemContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.socialContainer}>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.socialToucableContainer}>
          <View style={styles.socialViewContainer}>
            <Ionicons name="share-social-outline" size={22} />
            <Text style={styles.socialLabel}>Tell a Friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={styles.socialToucableContainer}>
          <View style={styles.socialViewContainer}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={styles.socialLabel}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  drawerContentContainer: {backgroundColor: Colors.DRAWER_BACKGROUND},
  menuImage: {padding: 20},
  userProfile: {height: 80, width: 80, borderRadius: 40, marginBottom: 10},
  userProfileLabel: {
    color: Colors.LABEL_COLOR,
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    marginBottom: 5,
  },
  coinContainer: {flexDirection: 'row'},
  coinLabel: {
    color: Colors.LABEL_COLOR,
    fontFamily: 'Roboto-Regular',
    marginRight: 5,
  },
  drawerItemContainer: {flex: 1, backgroundColor: Colors.WHITE, paddingTop: 10},
  socialContainer: {padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'},
  socialToucableContainer: {paddingVertical: 15},
  socialViewContainer: {flexDirection: 'row', alignItems: 'center'},
  socialsocialLabelImage: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginLeft: 5,
  },
  socialLabel: {
    marginLeft: 10,
  },
});

export default CustomDrawer;
