import axios from 'axios';

const API_URL = 'https://api.npoint.io/46a507ebd6bad476c8db'; // <- Puedes cambiar por tu API simulada

export const fetchSensorData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos del sensor', error);
    return null;
  }
};
