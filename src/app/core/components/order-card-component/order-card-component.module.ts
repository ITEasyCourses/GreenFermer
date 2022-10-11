import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { ArrowRight, Disc } from 'angular-feather/icons';

import { ButtonModule } from '../button/button.module';

import { OrderCardComponentComponent } from './order-card-component.component';

const icons = {
  Disc,
  ArrowRight
};

@NgModule({
  declarations: [OrderCardComponentComponent],
  exports: [OrderCardComponentComponent],
  imports: [CommonModule, FeatherModule.pick(icons), ButtonModule]
})
export class OrderCardComponentModule {}
