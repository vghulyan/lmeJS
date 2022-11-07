import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {windowWidth} from '../utils/Dimensions';

import {Colors} from '../utils/Constants';

export default function ListItem({
  photo,
  title,
  subTitle,
  isFree,
  price,
  onPress,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Image source={photo} style={styles.image} />
        <View style={{width: windowWidth - 220}}>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={onPress} style={styles.yesnocontainer}>
        <Text style={styles.yesnolabel}>
          {isFree === 'Yes' && 'Play'}
          {isFree === 'No' && price}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 8,
  },
  subTitle: {
    color: '#333',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  title: {
    color: '#333',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  yesnocontainer: {
    backgroundColor: '#0aada8',
    padding: 10,
    width: 100,
    borderRadius: 10,
  },
  yesnolabel: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
});
