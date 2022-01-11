export interface Vitamin {
  id: number;
  name: string;
  description: string;
  image: string;
  vitamins: string[];
}

export interface Vitamins {
  [key: number]: Vitamin
}