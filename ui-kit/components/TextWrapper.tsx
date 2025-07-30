import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

const TextWrapper = (props: TextProps & { children: React.ReactNode }) => {
  return <Text style={styles.text} {...props}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default TextWrapper;
