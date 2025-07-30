// host-native/components/Header.tsx
import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{Platform.OS === 'web' ? 'Web Header (Native)' : 'Native Header'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { padding: 16, backgroundColor: '#ddeeff', alignItems: 'center' },
  text: { fontSize: 18 }
});
