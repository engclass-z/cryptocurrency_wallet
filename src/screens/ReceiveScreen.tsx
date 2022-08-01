import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { View } from '~components/Themed';
import Address from '~components/screens/receive/address/Address';
import Qr from '~components/screens/receive/qr/Qr';

import { RootStackScreenProps } from '~/src/types';

type Props = RootStackScreenProps<'Receive'>;

const ReceiveScreen: React.FC<Props> = ({ navigation }) => {
  const [address, setAddress] = useState('8ETcSGED1jACuaeKxjwTdJ8n1xqUQTJzfzyRZoREUPME');

  const copyAddressHandler = () => {
    console.log('pressCopyAddressHandler', address)
  };

  return (
    <View style={styles.container}>
      <Qr address={address} />
      <Address
        address={address}
        style={styles.address}
        onPressCopyAddress={copyAddressHandler}
      />
    </View>
  );
}

export default ReceiveScreen;

const styles = StyleSheet.create({
  container: {},
  address: {
    marginTop: 16,
  },
});
