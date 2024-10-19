import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Star from '../atoms/Stars';

interface ReviewProps {
  name: string;
  rating: number;
  description: string;
}

const Review: React.FC<ReviewProps> = ({name, rating, description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.stars}>
        {Array.from({length: 5}).map((_, index) => (
          <Star key={index} filled={index < rating} />
        ))}
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stars: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default Review;
