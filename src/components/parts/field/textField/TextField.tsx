import React from 'react';
import {StyleProp, StyleSheet, TextInput as DefaultTextInput, ViewStyle} from 'react-native';

import Colors from '~constants/Colors';
import useColorScheme from '~hooks/useColorScheme';
import { View, Text, TextInput } from '~components/Themed';

type Props = {
  style?: StyleProp<ViewStyle>,
  label: string,
} & TextInputProps;

type TextInputProps = DefaultTextInput['props'];

const TextField: React.FC<Props> = ({ style, label, ...otherProps }) => {
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{label}</Text>
      <TextInput style={[styles.input, { borderColor: Colors[colorScheme].text }]} {...otherProps} />
    </View>
  );
}

export default TextField;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 16,
  },
  input: {
    marginTop: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 8,
  },
});
