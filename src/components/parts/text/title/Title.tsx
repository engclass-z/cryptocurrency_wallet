import React from 'react';
import { StyleSheet, StyleProp, TextStyle } from 'react-native';

import { Text, TextProps } from '~components/Themed';

type Props = {
  style?: StyleProp<TextStyle>,
} & TextProps;

const Title: React.FC<Props> = (
  {
    style,
    ...otherProps
  }) => {

  return <Text {...otherProps} style={[styles.title, style]} />;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
