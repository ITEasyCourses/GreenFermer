import { FormGroup } from '@angular/forms';

export interface DeliveryType {
  label: string;
  value: string;
  group: FormGroup;
  cityOptions: CityOptions[];
  cityPlaces: Record<number | string, CityPlace[]>;
}

export interface CityOptions {
  viewValue: string;
  id: number;
  value?: string
  address?: string;
}

export interface CityPlace {
  address: string;
  id: number;
}
