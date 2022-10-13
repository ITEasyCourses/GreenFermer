import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { FeatherModule } from 'angular-feather';
import { Search, MapPin } from 'angular-feather/icons';

import { ButtonModule } from '../button/button.module';

import { SearchComponent } from './search.component';

const icons = {
  Search,
  MapPin
};

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeatherModule.pick(icons),
    ButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class SearchModule {}
