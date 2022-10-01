import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FeatherModule } from 'angular-feather';
import { ChevronDown } from 'angular-feather/icons';

import { SelectComponent } from './select.component';

const icons = {
  ChevronDown
};

@NgModule({
  declarations: [SelectComponent],
  exports: [SelectComponent, FeatherModule],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    FeatherModule.pick(icons)
  ]
})
export class SelectModule {}
