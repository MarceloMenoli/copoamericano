import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface Props {
  filled: boolean;
  onPress?: () => void;
}

const Star: React.FC<Props> = ({filled, onPress}) => {
  return (
    <Text onPress={onPress ? onPress : undefined} style={styles.star}>
      {filled ? '★' : '☆'}
    </Text>
  );
};

const styles = StyleSheet.create({
  star: {
    fontSize: 20,
    color: '#FFD700',
  },
});

export default Star;
