import { Asset } from "react-native-image-picker";

export interface Drink {
  description: string;
  ingredients: string;
  is_alcoholic: boolean;
  name: string;
  rating: number;
  id: string;
  image?: Asset;
  image_url?: string;
}

export type NewDrink = Omit<Drink, 'id'>;