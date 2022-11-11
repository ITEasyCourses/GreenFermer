import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { ProductCardComponent } from './product-card.component';

@NgModule({
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent],
  imports: [CommonModule, IconSpriteModule, MatProgressSpinnerModule]
})
export class ProductCardModule {}
