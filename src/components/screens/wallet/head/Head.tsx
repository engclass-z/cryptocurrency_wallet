import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import Container from '~components/parts/layout/container/Container';

import Meta from './meta/Meta';
import Nav, { NavType } from './nav/Nav';

type Props = {
  style?: StyleProp<ViewStyle>,
  onPressNav: (type: NavType) => void,
};

const Head: React.FC<Props> = ({ style, onPressNav }) => {
  return (
    <Container style={[styles.container, style]}>
      <Meta />
      <Nav style={styles.nav} onPressNav={onPressNav} />
    </Container>
  );
}

export default Head;

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
  },
  nav: {
    marginTop: 24,
  },
});
