import React from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';

const DescriptionText: React.FC<TextProps> = ({children, style, ...rest}) => {
  return (
    <Text style={[styles.description, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default DescriptionText;
