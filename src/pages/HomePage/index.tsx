// src/pages/HomePage.tsx
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  Button,
  Alert,
} from 'react-native';
import {useMutation, useQuery} from '@tanstack/react-query';
import {addDrink, fetchReviews} from '../../services/api';
import ReviewList from '../../components/organisms/ReviewList';
import AddDrinkModal from './components/organisms/AddDrinkModal';
import { Drink } from '@/intrefaces/drink';

const HomePage: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const {data, error, isLoading, refetch} = useQuery({
    queryKey: ['reviews'],
    queryFn: fetchReviews,
  });

  const mutation = useMutation<Drink, Error, FormData>({
    mutationFn: addDrink,
    onSuccess: () => {
      refetch();
      setModalVisible(false);
      Alert.alert('Bebida adicionada com sucesso!');
    },
    onError: error => {
      console.error('Erro ao adicionar bebida:', error);
      Alert.alert('Erro ao adicionar bebida', error.message);
    },
  });

  const handleAddDrink = (formData: FormData) => {
    mutation.mutate(formData);
  };

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Erro ao carregar dados!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button title="Adicionar Bebida" onPress={() => setModalVisible(true)} />

      <ReviewList reviews={data as Drink[]} />

      <AddDrinkModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleAddDrink}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomePage;
