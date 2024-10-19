import React from 'react';
import {SafeAreaView, StyleSheet, ViewStyle} from 'react-native';

interface MainTemplateProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const MainTemplate: React.FC<MainTemplateProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainTemplate;
