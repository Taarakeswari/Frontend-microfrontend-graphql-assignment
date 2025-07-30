// host-native/components/MicroFrontendWebView.tsx
import React from 'react';
import { WebView } from 'react-native-webview';
import type { ViewStyle, StyleProp } from 'react-native';

export default function MicroFrontendWebView({ url, style }: { url: string; style?: StyleProp<ViewStyle> }) {
  return <WebView source={{ uri: url }} style={style} />;
}
