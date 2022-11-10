import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { ButtonModule } from '../button/button.module';

import { OrderCardComponentComponent } from './order-card-component.component';

@NgModule({
  declarations: [OrderCardComponentComponent],
  exports: [OrderCardComponentComponent],
  imports: [CommonModule, ButtonModule, IconSpriteModule]
})
export class OrderCardComponentModule {}
