import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Star from '../atoms/Stars';

interface ReviewProps {
  name: string;
  rating: number;
  description: string;
  image_url?: string;
}

const Review: React.FC<ReviewProps> = ({
  name,
  rating,
  description,
  image_url,
}) => {
  return (
    <View style={styles.container}>
      {image_url ? (
        <Image source={{uri: image_url}} style={styles.image} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Sem imagem</Text>
        </View>
      )}
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
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 5,
  },
  placeholder: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#999',
    fontSize: 16,
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
