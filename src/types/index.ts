import { ReactNode } from "react";

export interface FoodContextProps {
  pageFoods: PageProps | null;
  food: FoodNutrientsProps | null;
  error: string | null;
  getFoodsByPage: (page: number) => Promise<void>;
  search: (term: string) => Promise<void>;
  getById: (id: string) => Promise<void>;
  setError: (value: string | null) => void;
}

export interface FoodProps {
  id: string;
  description: string;
}

export interface FoodNutrientsProps {
  id: string;
  description: string;
  category: CategoryProps;
  moisture: ValueProps;
  energy: ValueProps;
  protein: ValueProps;
  lipids: ValueProps;
  cholesterol: ValueProps;
  carbohydrate: ValueProps;
  dietary_fiber: ValueProps;
  ash: ValueProps;
  calcium: ValueProps;
  magnesium: ValueProps;
  manganese: ValueProps;
  phosphorus: ValueProps;
  iron: ValueProps;
  sodium: ValueProps;
  potassium: ValueProps;
  copper: ValueProps;
  zinc: ValueProps;
  retinol: ValueProps;
  re: ValueProps;
  era: ValueProps;
  thiamin: ValueProps;
  riboflavin: ValueProps;
  pyridoxine: ValueProps;
  niacin: ValueProps;
  vitamin_c: ValueProps;
}

export interface PageProps {
  items: FoodProps[];
  total: number;
  page: number;
  pagesize: number;
}

export interface CategoryProps {
  id: string;
  name: string;
}

export interface ValueProps {
  label: string;
  value: number | null;
  unit: string;
}

export interface ErrorProps {
  message: string;
}

export interface ProviderProps {
  children: ReactNode;
}
