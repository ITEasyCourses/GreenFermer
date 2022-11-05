import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { RatingComponentModule } from '../rating-component/rating-component.module';

import { ProductInfoComponent } from './product-info-component.component';

@NgModule({
  declarations: [ProductInfoComponent],
  exports: [ProductInfoComponent],
  imports: [CommonModule, RatingComponentModule, FormsModule, IconSpriteModule]
})
export class ProductInfoModule {}
