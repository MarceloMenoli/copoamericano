import React from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';

const TitleText: React.FC<TextProps> = ({children, style, ...rest}) => {
  return (
    <Text style={[styles.title, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TitleText;
