// src/pages/ProfilePage.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfilePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Este é o seu Perfil.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default ProfilePage;
