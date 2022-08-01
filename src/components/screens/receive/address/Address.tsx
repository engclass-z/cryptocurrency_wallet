import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import TextButton from '~components/parts/button/textButton/TextButton';
import Container from '~components/parts/layout/container/Container';
import { Text } from '~components/Themed';

type Props = {
  address: string,
  style?: StyleProp<ViewStyle>,
  onPressCopyAddress: () => void,
};

const Address: React.FC<Props> = ({ address, style, onPressCopyAddress }) => {
  return (
    <Container style={[styles.container, style]}>
      <Text style={styles.address}>{address}</Text>
      <TextButton style={styles.button} onPress={onPressCopyAddress}>
        Copy Address
      </TextButton>
    </Container>
  );
}

export default Address;

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
  },
  address: {
    fontSize: 13,
    textAlign: 'center',
  },
  button: {
    marginTop: 24,
  },
});
