import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import Container from '~components/parts/layout/container/Container';
import { Text, View } from '~components/Themed';

type Props = {
  style?: StyleProp<ViewStyle>,
};

const CoinList: React.FC<Props> = ({ style }) => {
  return (
    <Container style={[styles.container, style]}>
      <View>
        <Text>ABC</Text>
        <Text>1234</Text>
      </View>
      <View>
        <Text>DEF</Text>
        <Text>1</Text>
      </View>
    </Container>
  );
}

export default CoinList;

const styles = StyleSheet.create({
  container: {
  },
});
