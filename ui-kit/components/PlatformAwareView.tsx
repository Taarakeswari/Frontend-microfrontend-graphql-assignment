// host-web/src/components/PlatformAwareView.tsx
import React from 'react';
import { View as RNView, ViewStyle, StyleProp, Platform } from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  webStyle?: StyleProp<ViewStyle>;
  nativeStyle?: StyleProp<ViewStyle>;
};

export const PlatformAwareView = ({ children, style, webStyle, nativeStyle }: Props) => {
  return (
    <RNView style={[style, Platform.OS === 'web' ? webStyle : nativeStyle]}>
      {children}
    </RNView>
  );
}
