import React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '~components/Themed';
import Title from '~components/parts/text/title/Title';
import { RootTabScreenProps } from '~/src/types';

type Props = RootTabScreenProps<'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title>Home</Title>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
