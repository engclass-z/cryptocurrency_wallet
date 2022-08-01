import React from 'react';
import { StyleSheet } from 'react-native';

import Head from '~components/screens/wallet/head/Head';
// import CoinList from '~components/screens/wallet/coinList/CoinList';
import { NavType } from '~components/screens/wallet/head/nav/Nav';
import { View } from '~components/Themed';
import { RootTabScreenProps } from '~/src/types';

type Props = RootTabScreenProps<'Wallet'>;

const WalletScreen: React.FC<Props> = ({ navigation }) => {
  const pressNavHandler = (type: NavType) => {
    switch (type) {
      case 'receive':
        navigation.navigate('Receive');
        break;
      case 'transfer':
        navigation.navigate('Transfer');
        break;
      // case 'trade':
      //   navigation.navigate('Trade');
      //   break;
    }
  }

  return (
    <View style={styles.container}>
      <Head onPressNav={pressNavHandler} />
      {/*<CoinList style={styles.coinList} />*/}
    </View>
  );
}

export default WalletScreen;

const styles = StyleSheet.create({
  container: {},
  coinList: {
    marginTop: 48,
  },
});
