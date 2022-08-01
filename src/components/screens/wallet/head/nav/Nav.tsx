import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import Colors from '~constants/Colors';
import useColorScheme from '~hooks/useColorScheme';
import { View } from '~components/Themed';
import IconButton from '~components/parts/button/iconButton/IconButton';

type Props = {
  style?: StyleProp<ViewStyle>,
  onPressNav: (type: NavType) => void,
};

export const NavType = {
  receive: 'Receive',
  transfer: 'Transfer',
  trade: 'Trade',
};
export type NavType = keyof typeof NavType;

const Nav: React.FC<Props> = ({ style, onPressNav }) => {
  const colorScheme = useColorScheme();

  const pressNavHandler = (type: NavType) => {
    onPressNav(type);
  };

  return (
    <View style={[styles.container, style]}>
      <View>
        <IconButton
          title={NavType.receive}
          icon="download-outline"
          color={Colors[colorScheme].text}
          onPress={pressNavHandler.bind(this, 'receive')}
        />
      </View>
      <View>
        <IconButton
          title={NavType.transfer}
          icon="arrow-redo-outline"
          color={Colors[colorScheme].text}
          onPress={pressNavHandler.bind(this, 'transfer')}
        />
      </View>
      {/*<View>
        <IconButton
          title={NavType.trade}
          icon="swap-horizontal"
          color={Colors[colorScheme].text}
          onPress={pressNavHandler.bind(this, 'trade')}
        />
      </View>*/}
    </View>
  );
}

export default Nav;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
