import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeartOutline = () => {
  return <Ionicons name="heart-outline" size={30} />;
};

const AlarmOutlineWithColor = () => {
  return <Ionicons name="alarm-outline" size={30} color="red" />;
};

const AlarmVectorIcon = () => {
  return <Ionicons name="alarm" size={30} />;
};

export {HeartOutline, AlarmOutlineWithColor, AlarmVectorIcon};
