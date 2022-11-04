import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { ButtonModule } from '../button/button.module';

import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    IconSpriteModule
  ]
})
export class SearchModule {}
