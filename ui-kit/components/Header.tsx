// host-web/src/components/Header.tsx
import React from 'react';
import { Text, View, Platform } from 'react-native';
import { PlatformAwareView } from './PlatformAwareView';

export default function Header() {
  return (
    <PlatformAwareView
      style={{ padding: 24, backgroundColor: '#f5f5f5'}}
      webStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      nativeStyle={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{Platform.OS === 'web' ? 'Sample Assignment' : 'Sample Native Assignment'}</Text>
    </PlatformAwareView>
  );
}
