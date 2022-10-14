import { FormGroup } from '@angular/forms';

export interface DeliveryType {
  label: string;
  value: string;
  group: FormGroup;
  cityOptions: SelectOption[];
  cityPlaces: Record<number | string, SelectOption[]>;
}

export interface SelectOption {
  viewValue: string;
  id: number;
}
