import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { Text } from '~components/Themed';

type Props = {
  style?: StyleProp<ViewStyle>,
  title: string,
  icon: 'download-outline' | 'arrow-redo-outline' | 'swap-horizontal',
  color: string,
  onPress: () => void,
};

const IconButton: React.FC<Props> = ({ style, title, icon, color, onPress }) => {
  return (
    <Pressable
      style={({pressed}) =>
        pressed
          ? [styles.container, styles.pressed, style]
          : [styles.container, style]
      }
      onPress={onPress}
    >
      <Ionicons
        name={icon}
        size={24}
        color={color}
      />
      <Text>{title}</Text>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.48,
  },
});
