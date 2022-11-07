import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function BannerSlider({data}) {
  return (
    <View>
      <Image source={data.image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 300,
    borderRadius: 10,
  },
});
