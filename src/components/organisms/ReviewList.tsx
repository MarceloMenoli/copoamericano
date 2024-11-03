import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Review from '../molecules/Review';
import {Drink} from '../../intrefaces/drink';

interface ReviewData {
  id: string;
  name: string;
  rating: number;
  description: string;
}

interface ReviewListProps {
  reviews: Drink[];
}

const ReviewList: React.FC<ReviewListProps> = ({reviews}) => {
  return (
    <FlatList
      data={reviews}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Review
          name={item.name}
          rating={item.rating}
          description={item.description}
          image_url={item.image_url}
        />
      )}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
});

export default ReviewList;
