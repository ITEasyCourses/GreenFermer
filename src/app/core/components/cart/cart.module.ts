import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { CartComponent } from './cart.component';

@NgModule({
  declarations: [CartComponent],
  exports: [CartComponent],
  imports: [CommonModule, IconSpriteModule]
})
export class CartModule {}
