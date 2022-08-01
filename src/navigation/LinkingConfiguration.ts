/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '~/src/types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Wallet: {
            screens: {
              WalletScreen: 'wallet',
            },
          },
        },
      },

      // Wallet
      Transfer: {
        screens: {
          TransferScreen: 'transfer',
        },
      },
      Trade: {
        screens: {
          TradeScreen: 'trade',
        },
      },

      // Modal
      Receive: {
        screens: {
          ReceiveScreen: 'receive',
        },
      },

      // Not Found
      NotFound: '*',
    },
  },
};

export default linking;
