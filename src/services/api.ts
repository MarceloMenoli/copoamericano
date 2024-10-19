// src/services/api.ts
import axios from 'axios';
import { Drink, NewDrink } from '../intrefaces/drink';

const api = axios.create({
  baseURL: 'https://goexample-production.up.railway.app',
});

export const fetchReviews = async (): Promise<Drink[]> => {
  const response = await api.get<Drink[]>('/drinks');
  return response.data;
};

export const addDrink = async (drink: FormData): Promise<Drink> => {
    const response = await api.post<Drink>('/drinks', drink);
    return response.data;
  };
