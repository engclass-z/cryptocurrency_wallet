import React, { useState } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import Number from '~constants/Number';
import { Text, View } from '~components/Themed';

type Props = {
  style?: StyleProp<ViewStyle>,
};

const Meta: React.FC<Props> = ({ style }) => {
  const [totalCoin, setTotalCoin] = useState(1234.01234);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.amount}>
        {totalCoin.toLocaleString(undefined, { maximumFractionDigits: Number.maximumFractionDigits })}
      </Text>
      <Text style={styles.unit}>
        ABC
      </Text>
    </View>
  );
}

export default Meta;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  unit: {
    marginLeft: 4,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
