import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';

import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions';

import {freeGames, paidGames, sliderData} from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import {AuthContext} from '../context/AuthContext';
import {style} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

import {Colors} from '../utils/Constants';

export default function HomeScreen({navigation}) {
  const [gamesTab, setGamesTab] = useState(1);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  const {userInfo} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.userProfileContainer}>
          <Text style={styles.userProfileLabel}>
            Hello {userInfo ? userInfo?.data?.displayName : 'Vardan GHULYAN'}
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../assets/images/avatar.png')}
              width={undefined}
              height={undefined}
              style={styles.userProfileImageBackground}
              imageStyle={styles.userProfileImage}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            style={styles.searchTextPlaceholder}
          />
        </View>

        <View style={styles.upcomingContainer}>
          <Text style={styles.upcomingLabelContainer}>Upcoming Games</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.upcomingLabel}>See all</Text>
          </TouchableOpacity>
        </View>

        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />

        <View style={styles.switchContainer}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to play"
            option2="Paid games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {gamesTab === 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
        {gamesTab === 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  scrollViewContainer: {
    padding: 20,
  },
  userProfileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  userProfileLabel: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
  },
  userProfileImageBackground: {
    width: 35,
    height: 35,
  },
  userProfileImage: {
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    borderColor: '#C6C6C6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchTextPlaceholder: {
    paddingVertical: 0,
  },
  upcomingContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upcomingLabelContainer: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
  },
  upcomingLabel: {
    color: '#0aada8',
  },
  switchContainer: {
    marginVertical: 20,
  },
});
