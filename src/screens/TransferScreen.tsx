import React from 'react';
import { StyleSheet } from 'react-native';

import { RootStackScreenProps } from '~/src/types';
import { View } from '~components/Themed';
import Form from '~components/screens/transfer/form/Form';

type Props = RootStackScreenProps<'Transfer'>;

const TransferScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
}

export default TransferScreen;

const styles = StyleSheet.create({
  container: {},
});
