import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import Styles from '~constants/Styles';
import { View, ViewProps } from '~components/Themed';

type Props = {
  style?: StyleProp<ViewStyle>,
} & ViewProps;

const Container: React.FC<Props> = ({ style, ...otherProps }) => {
  return (
    <View {...otherProps} style={[styles.container, style]} />
  );
}

export default Container;

const styles = StyleSheet.create({
  container: {
    ...Styles.container,
  },
});
