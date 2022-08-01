import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import Container from '~components/parts/layout/container/Container';
import { View } from '~components/Themed';

type Props = {
  address: string,
  style?: StyleProp<ViewStyle>,
};

const Qr: React.FC<Props> = ({ style }) => {
  return (
    <Container style={[styles.container, style]}>
      <View style={styles.qrWrap}>
        <View style={styles.qr} />
      </View>
    </Container>
  );
}

export default Qr;

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
  },
  qrWrap: {
    padding: 24,
    alignItems: 'center',
  },
  qr: {
    width: 240,
    aspectRatio: 1,
    backgroundColor: '#fff',
  },
});
