import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../utils/Constants';

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={[
          styles.containerOption,
          {
            backgroundColor:
              getSelectionMode === 1 ? Colors.PRIMARY : Colors.SECONDARY,
          },
        ]}>
        <Text
          style={[
            styles.labelOption,
            {color: getSelectionMode == 1 ? 'white' : Colors.PRIMARY},
          ]}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={[
          styles.containerOption,
          {
            backgroundColor:
              getSelectionMode === 2 ? Colors.PRIMARY : Colors.SECONDARY,
          },
        ]}>
        <Text
          style={[
            styles.labelOption,
            {color: getSelectionMode == 2 ? 'white' : Colors.PRIMARY},
          ]}>
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: '100%',
    backgroundColor: Colors.SECONDARY,
    borderRadius: 10,
    borderColor: Colors.PRIMARY,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerOption: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelOption: {
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
  },
});
