// src/pages/ProfilePage.tsx
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {fetchNearbyPlaces} from './utils/fetchNearbyPlaces';

const ProfilePage: React.FC = () => {
  const [region, setRegion] = useState<any>(null);
  const [places, setPlaces] = useState<any[]>([]);
  console.log(places);
  useEffect(() => {
    Geolocation.getCurrentPosition(
      async position => {
        const coords = position.coords;
        console.log(coords);
        setRegion({
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
        const nearbyPlaces = await fetchNearbyPlaces(
          coords.latitude,
          coords.longitude,
        );
        setPlaces(nearbyPlaces);
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  if (!region) {
    return null; // Ou um loading enquanto carrega a localização
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        showsUserLocation={true}
        onRegionChange={e => console.log('region change', e)}
        onRegionChangeComplete={e => console.log('region complete change', e)}>
        {places.map((place, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: place.geometry.location.lat,
              longitude: place.geometry.location.lng,
            }}
            title={place.name}
            description={place.vicinity}
            icon={{uri: place.icon}} // Exibe o ícone do lugar
          />
        ))}
        {/* <Marker
          coordinate={{latitude: region.latitude, longitude: region.longitude}}
          title="Aqui mesmo"
          description="Descrição do local"
        /> */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default ProfilePage;
