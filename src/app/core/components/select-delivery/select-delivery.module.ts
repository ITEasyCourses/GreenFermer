import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { SelectDeliveryComponent } from './select-delivery.component';

@NgModule({
  declarations: [SelectDeliveryComponent],
  exports: [SelectDeliveryComponent],
  imports: [CommonModule, IconSpriteModule]
})
export class SelectDeliveryModule {}
