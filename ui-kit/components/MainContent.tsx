import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

type MainContentProps = ViewProps & {
  children: React.ReactNode;
};

const MainContent = ({ children, style, ...rest }: MainContentProps) => {
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,                 // fill available space
    padding: 16,             // padding inside main content
    backgroundColor: '#f9f9f9', // light background
  },
});
export default MainContent;
