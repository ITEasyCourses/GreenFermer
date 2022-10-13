import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { ChevronDown } from 'angular-feather/icons';

import { SelectDeliveryComponent } from './select-delivery.component';

const icons = {
  ChevronDown
};

@NgModule({
  declarations: [SelectDeliveryComponent],
  exports: [SelectDeliveryComponent],
  imports: [CommonModule, FeatherModule.pick(icons)]
})
export class SelectDeliveryModule {}
