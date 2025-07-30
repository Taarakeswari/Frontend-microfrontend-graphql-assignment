// host-native/App.tsx
import React from 'react';
import { SafeAreaView, Text, Platform, StyleSheet } from 'react-native';
import MicroFrontendWebView from './components/MicroFrontendWebView';
import Header from './components/Header';

export default function App() {
  const mfeUrl = 'http://10.0.2.2:3000'; // host-web MFE server

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {Platform.OS === 'web' ? (
        <Text>Use the web host for actual Web interface</Text>
      ) : (
        <MicroFrontendWebView url={mfeUrl} style={styles.webview} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webview: { flex: 1 }
});
