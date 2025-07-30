import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';

const Card = (props: ViewProps & { children: React.ReactNode }) => {
  return <View style={styles.card} {...props}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginVertical: 8,
  },
});

export default Card;
