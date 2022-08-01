import React from 'react';
import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import Colors from '~constants/Colors';
import useColorScheme from '~hooks/useColorScheme';
import { Text } from '~components/Themed';

type Props = {
  style?: StyleProp<ViewStyle>,
  onPress: () => void,
};

const TextButton: React.FC<Props> = ({ style, onPress, children }) => {
  const colorScheme = useColorScheme();

  return (
    <Pressable
      style={({pressed}) =>
        pressed
          ? [styles.container, { backgroundColor: Colors[colorScheme].tint }, styles.pressed, style]
          : [styles.container, { backgroundColor: Colors[colorScheme].tint }, style]
      }
      onPress={onPress}
    >
      <Text style={[styles.text, { color: Colors[colorScheme].tintContrast }]}>{children}</Text>
    </Pressable>
  );
}

export default TextButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 28,
  },
  pressed: {
    opacity: 0.72,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
