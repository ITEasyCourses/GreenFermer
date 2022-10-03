import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Star } from 'angular-feather/icons';

import { RatingStarComponent } from './rating-star.component';

const icons = {
  Star
};

@NgModule({
  declarations: [RatingStarComponent],
  exports: [RatingStarComponent],
  imports: [CommonModule, FeatherModule.pick(icons)]
})
export class RatingStarModule {}
