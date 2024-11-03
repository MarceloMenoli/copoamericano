export const fetchNearbyPlaces = async (latitude: number, longitude: number) => {
  const radius = 1000; // Defina o raio em metros
  const type = 'bar'; // Você pode trocar para 'supermarket', 'restaurant', etc.
  const apiKey = 'AIzaSyBnRdCbC8mobTqHgc9COM5S9RYR-oThVQI';

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.results) {
      return data.results;
    }
  } catch (error) {
    console.error('Erro ao buscar lugares próximos:', error);
  }
};
