// src/services/api.ts
import axios from 'axios';
import {Drink, NewDrink} from '../intrefaces/drink';

const api = axios.create({
  baseURL: 'https://goexample-production.up.railway.app',
});

api.interceptors.request.use(request => {
  return request;
});

// Interceptar as respostas
api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log('Error Response:', error.response);
    return Promise.reject(error);
  },
);

export const fetchReviews = async (): Promise<Drink[]> => {
  const response = await api.get<Drink[]>('/drinks');
  return response.data;
};

export const addDrink = async (formData: FormData): Promise<Drink> => {
  try {
    const response = await api.post<Drink>('/drinks', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      const serverError = error.response.data;
      console.error('Erro do servidor:', serverError);
      throw new Error(serverError.error || 'Erro ao adicionar a bebida');
    } else if (error.request) {
      console.error('Nenhuma resposta recebida:', error.request);
      throw new Error('Sem resposta do servidor');
    } else {
      console.error('Erro ao configurar a requisição:', error.message);
      throw new Error('Erro ao configurar a requisição');
    }
  }
};
